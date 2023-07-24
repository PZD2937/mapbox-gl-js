// @flow
import transformLngLat from "../geo/projection/coordinates_transform.js";
import {lngLatToTileFromZ} from "../geo/projection/tile_transform.js";
import {arrayBufferToImage, getImage} from "../util/ajax.js";
import {asyncAll, isWorker} from "../util/util.js";
import {CanonicalTileID} from "./tile_id.js";
import type {Callback} from "../types/callback.js";
import type {RequestParameters} from "../util/ajax.js";
import type {TileParameters} from "./worker_source.js";
import {TileState} from "./tile.js";
import {getTileSystem, lngLatToPixel} from "../geo/projection/tile_projection.js";
import {DedupedRequest} from "./vector_tile_worker_source.js";
import type {Cancelable} from "../types/cancelable.js";
import offscreenCanvasSupported from "../util/offscreen_canvas_supported.js";
import window from "../util/window.js";

let supportImageBitmap = typeof window.createImageBitmap === 'function'

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
    request: Cancelable
}

function dataToTextureImage(data, cb: Callback) {
    if (data instanceof window.ArrayBuffer) {
        arrayBufferToImage(data, cb)
    } else {
        cb(null, data)
    }
}

function canvasToImage(canvas: HTMLCanvasElement | OffscreenCanvas, callback: Callback<ImageBitmap | HTMLCanvasElement>) {
    if (supportImageBitmap) {
        // console.log(canvas.toDataURL())
        window.createImageBitmap(canvas).then(imageBitmap => {
            callback(null, imageBitmap)
        });
    } else {
        callback(null, canvas);
    }
}


export function loadRasterTile(params: WorkerTileParameters, callback: Callback): Cancelable {
    const {requests, ltPixel, rbPixel} = params;

    const makeRequest = (requestParam: RequestParameters, cb: Callback) => {
        requestParam.returnArraybuffer = true;
        const request = getImage(requestParam, cb);
        return () => {
            request.cancel();
            cb();
        };
    }
    let canvas, ctx, tileSize, dx, dy;

    const initConfig = (imageSize: number) => {
        if (!canvas) {
            canvas = offscreenCanvasSupported() ? new window.OffscreenCanvas(imageSize, imageSize) : (isWorker() ? null : document.createElement('canvas'));
            if (!canvas) return;
            // 计算都是基于256像素计算，所以使用的所有坐标要乘以 实际图片像素/256
            const scale = imageSize / 256;
            dx = -ltPixel.x * scale;
            dy = -ltPixel.y * scale;
            tileSize = imageSize;
            // 实际需要的瓦片像素范围，不是正方形mapbox渲染有问题
            const size = (rbPixel.x - ltPixel.x + rbPixel.y - ltPixel.y) * scale / 2;
            canvas.width = size;
            canvas.height = size;
            ctx = canvas.getContext('2d', {willReadFrequently: true});
        }
    }
    const draw = (data, x: number, y: number) => {
        ctx.drawImage(data, x * tileSize + dx, y * tileSize + dy, data.width, data.height);
    }

    const cancels = [];

    asyncAll(requests, (item, cb) => {
        const key = item.tile.key;
        if (this.subLoading[key]) {
            dataToTextureImage(this.subLoading[key], (error, textureImage) => {
                if (textureImage) {
                    initConfig(textureImage.width);
                    draw(textureImage, item.x, item.y);
                }
                cb(null);
            })
        } else {
            const cancel = this.deduped.request(item.tile.key, null, makeRequest.bind(this, item.request), (error, data) => {
                if (error) {
                    delete this.subLoading[key];
                    return cb(null);
                }
                if (data) {
                    this.subLoading[key] = data;
                    dataToTextureImage(data, (error, textureImage) => {
                        if (textureImage) {
                            initConfig(textureImage.width);
                            draw(textureImage, item.x, item.y);
                        }
                        cb(null);
                    })
                }
            });
            cancels.push(cancel);
        }
    }, () => {
        if (canvas) {
            canvasToImage(canvas, callback)
        } else {
            callback('image failed to load')
        }
    });
    return {
        cancel: () => {
            cancels.forEach(cancel => cancel());
        }
    };
}

export default class RasterTileWorkerSource {
    loading: { [_: number]: LoadingTile }
    subLoading: { [_: number]: ImageBitmap }

    constructor() {
        this.loading = {};
        this.subLoading = {};
        this.deduped = new DedupedRequest();
        this.loadRasterTile = loadRasterTile.bind(this);
    }

    getCoverTiles(params: { projection: string, tile: CanonicalTileID }, callback: Callback) {
        const {tile, projection} = params;
        const coverTiles = [];
        const bound = tile.toLngLatBounds();
        const trNorthwestCoords = transformLngLat(bound.getNorthWest(), 'WGS84', projection);
        const {direction} = getTileSystem(projection);
        // 左上角像素坐标
        const ltPixel = lngLatToPixel(trNorthwestCoords, tile.z, projection);
        const trSoutheastCoords = transformLngLat(bound.getSouthEast(), 'WGS84', projection);
        // 右下脚像素坐标
        const rbPoint = lngLatToPixel(trSoutheastCoords, tile.z, projection);
        // console.log(rbPoint);
        const northwestTile = lngLatToTileFromZ(trNorthwestCoords, tile.z, projection);
        const southeastTile = lngLatToTileFromZ(trSoutheastCoords, tile.z, projection);
        const xMin = Math.min(northwestTile.x, southeastTile.x);
        const xMax = Math.max(northwestTile.x, southeastTile.x);
        const yMin = Math.min(northwestTile.y, southeastTile.y);
        const yMax = Math.max(northwestTile.y, southeastTile.y);
        const xRange = xMax - xMin, yRange = yMax - yMin;
        for (let x = xMin; x <= xMax; x++) {
            for (let y = yMin; y <= yMax; y++) {
                const dx = (x - xMin) * direction.x + (direction.x < 0 ? xRange : 0);
                const dy = (y - yMin) * direction.y + (direction.y < 0 ? yRange : 0);
                coverTiles.push({x, y, z: tile.z, dx, dy});
            }
        }
        callback(null, {
            coverTiles,
            ltPixel,
            rbPixel: {x: rbPoint.x + 256 * xRange, y: rbPoint.y + 256 * yRange}
        })
    }

    loadTile(params: WorkerTileParameters, callback: Callback) {
        const loading = this.loading[params.tileID.key] = this.loading[params.tileID.key] || {status: 'loading'};
        loading.request = this.loadRasterTile(params, (error, result) => {
            if (loading.status === 'unloaded') return callback(null);
            delete loading.request;
            callback(error, result)
        });
        // console.log(Object.keys(this.loading).length, 'loading')
        // console.log(Object.keys(this.subLoading).length, 'subLoading')
        this.limitedStorage();
    }

    limitedStorage() {
        const subLoading = Object.keys(this.subLoading);
        if (subLoading.length > 300) {
            // 删除复用率较低的
            for (let i = 0; i < subLoading.length - 80; i++) {
                delete this.subLoading[subLoading[i]];
            }
        }
    }


    abortTile(params: TileParameters & { tileID: CanonicalTileID }) {
        const {tileID} = params;
        const loading = this.loading[tileID.key];
        if (loading) {
            loading.status = 'unloaded';
            loading.request && loading.request.cancel();
            delete this.loading[tileID.key];
        }
    }

    removeTile(params: TileParameters & { tileID: CanonicalTileID }) {
        const tileID = params.tileID;
        const loading = this.loading[tileID.key];
        this.abortTile(params);
        if (loading) {
            // console.log(1111)
            loading.subTiles && loading.subTiles.forEach(tile => delete this.subLoading[tile]);
        }
    }

}
