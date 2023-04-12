// @flow
import transformLngLat from "../geo/projection/coordinates_transform.js";
import {getTileBounds, lngLatToTileFromZ} from "../geo/projection/tile_transform.js";
import {getImage} from "../util/ajax.js";
import {asyncAll} from "../util/util.js";
import offscreenCanvasSupported from "../util/offscreen_canvas_supported.js";
import mergerTextureImage from "../util/merger_image.js";
import {CanonicalTileID} from "./tile_id.js";
import type {Callback} from "../types/callback.js";
import type {RequestParameters} from "../util/ajax.js";
import type {TileParameters} from "./worker_source.js";
import {TileState} from "./tile.js";
import {getTileSystem} from "../geo/projection/tile_projection.js";

type Request = {
    request: RequestParameters,
    tile: CanonicalTileID,
    x: number,
    y: number
}

type WorkerTileParameters = {
    tileID: CanonicalTileID,
    requests: Request[],
    offset: number[],
    extent: number[],
}

type LoadingTile = {
    status: TileState,
    subTiles: number[],
}

type CallbackItem = {
    callback: Callback,
    metadata: ImageItem
}

type SubLoadingTile = {
    status: string,
    reTry: number,
    callbacks: CallbackItem[],
    cancel?: () => void,
    result?: [any, any]
}

type ImageItem = {
    x: number,
    y: number,
    data?: ImageBitmap
}

export default class RasterTileWorkerSource {
    loading: { [_: number]: LoadingTile }
    subLoading: { [_: number]: SubLoadingTile }

    constructor() {
        this.loading = {};
        // this.loaded = {};
        this.subLoading = {};
    }

    getCoverTiles(params: { projection: string, tile: CanonicalTileID }, callback: Callback) {
        const {tile, projection} = params;
        const coverTiles = [];
        const bound = getTileBounds(tile.x, tile.y, tile.z);
        const trNorthwestCoords = transformLngLat(bound.getNorthWest(), 'WGS84', projection);
        const {direction} = getTileSystem(projection);
        const offset = [bound.getWest() - trNorthwestCoords.lng, bound.getNorth() - trNorthwestCoords.lat];
        offset[0] *= direction.x;
        offset[1] *= direction.y;
        if (offset[0] && offset[1]) {
            const trSoutheastCoords = transformLngLat(bound.getSouthEast(), 'WGS84', projection);
            const northwestTile = lngLatToTileFromZ(trNorthwestCoords, tile.z, projection);
            const southeastTile = lngLatToTileFromZ(trSoutheastCoords, tile.z, projection);
            const xMin = Math.min(northwestTile.x, southeastTile.x);
            const xMax = Math.max(northwestTile.x, southeastTile.x);
            const yMin = Math.min(northwestTile.y, southeastTile.y);
            const yMax = Math.max(northwestTile.y, southeastTile.y);
            for (let x = xMin; x <= xMax; x++) {
                for (let y = yMin; y <= yMax; y++) {
                    coverTiles.push({x, y, z: tile.z, dx: (x - xMin), dy: (y - yMin) * -direction.y});
                }
            }
            callback(null, {
                coverTiles,
                offset,
                extent: [bound.getEast() - bound.getWest(), bound.getNorth() - bound.getSouth()]
            })
        } else {
            callback(null, null)
        }
    }

    loadTile(params: WorkerTileParameters, callback: Callback) {
        // console.log(params)
        const {requests, offset, extent, tileID} = params;
        this.loading[tileID.key] = {
            status: 'loading',
            subTiles: requests.map(request => request.tile.key)
        };
        asyncAll(requests, this._loadTile.bind(this, tileID.key), async (error, results: ImageItem[]) => {
            const tile = this.loading[tileID.key];
            // delete this.loading[tileID.key];
            if (tile.status === 'unloaded') {
                return callback(null, null);
            }
            let imageSize;
            results.forEach(item => {
                if (item.data) imageSize = item.data.width;
            });
            if (!imageSize) {
                return callback('imageSize error')
            }
            const lngResolution = imageSize / extent[0];
            const latResolution = imageSize / extent[1];
            const dx = (offset[0] * lngResolution) % imageSize;
            const dy = (offset[1] * latResolution) % imageSize;
            if (offscreenCanvasSupported()) {
                mergerTextureImage(results, imageSize, dx, dy, (err, imageBitmap: ImageBitmap) => {
                    callback(null, {textureImage: imageBitmap});
                });
            } else {
                callback(null, {textureImageList: {images: results, imageSize, dx, dy}})
            }
        });
        // console.log(Object.keys(this.loading).length, 'loading');
        // console.log(Object.keys(this.subLoading).length, 'subLoading');
    }

    _loadTile(uid: number, item: Request, callback: Callback) {
        if (this.loading[uid].status === 'unloaded') return callback(null, {});
        const {request, tile, x, y} = item;
        const entry = this.subLoading[tile.key] = this.subLoading[tile.key] || {callbacks: [], reTry: 2};
        if (entry.status === 'loaded' && entry.result) {
            const [err, result] = entry.result;
            callback(err, {x, y, data: result});
            return;
        }
        entry.callbacks.push({callback, metadata: {x, y}});
        if (!entry.cancel || (entry.status === 'error' && entry.reTry)) {
            entry.cancel = getImage(request, (error, data) => {
                entry.status = error ? 'error' : 'loaded';
                entry.result = [error, data];
                for (const cb of entry.callbacks) {
                    cb.metadata.data = data;
                    cb.callback(error, cb.metadata);
                }
                entry.callbacks = [];
                entry.reTry -= 1;
            }).cancel;
        }
    }

    abortTile(params: TileParameters & { tileID: CanonicalTileID }) {
        const {tileID} = params;
        const tile = this.loading[tileID.key];
        if (tile) {
            tile.status = 'unloaded'
            tile.subTiles.forEach(subTile => {
                if (this.subLoading[subTile]) {
                    this.subLoading[subTile].cancel();
                    for (const cb of this.subLoading[subTile].callbacks) {
                        cb.metadata.data = null;
                        cb.callback(null, cb.metadata);
                    }
                    delete this.subLoading[subTile]
                }
            });
        }
    }

    removeTile(params: TileParameters & { tileID: CanonicalTileID }) {
        this.abortTile(params);
        delete this.loading[params.tileID.key];
    }

}
