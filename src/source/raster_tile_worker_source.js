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

const supportImageBitmap = typeof window.createImageBitmap === 'function';

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
        arrayBufferToImage(data, cb);
    } else {
        cb(null, data);
    }
}

function canvasToImage(canvas: HTMLCanvasElement | OffscreenCanvas, callback: Callback<ImageBitmap | HTMLCanvasElement>) {
    if (supportImageBitmap) {
        // console.log(canvas.toDataURL())
        window.createImageBitmap(canvas).then(imageBitmap => {
            callback(null, imageBitmap);
        });
    } else {
        callback(null, canvas);
    }
}

function tileChildren(tile: {x: number, y: number, z: number}, targetZ: number, targetChildren: []) {
    if (tile.z > targetZ) return targetChildren.push(tile);
    const x = tile.x << 1, y = tile.y << 1, z = tile.z + 1, dx = (tile.dx || 0) * 2, dy = (tile.dy || 0) * 2;
    const children = [{x, y, z, dx, dy}, {x: x + 1, y, z, dx: dx + 1, dy}, {x, y: y + 1, z, dx, dy: dy + 1}, {x: x + 1, y: y + 1, z, dx: dx + 1, dy: dy + 1}];
    if (tile.z === targetZ) return targetChildren.push(...children);
    for (let i = 0; i < 4; i++) {
        tileChildren(children[i], targetZ - 1, targetChildren);
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
    };
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
    };
    const draw = (data, x: number, y: number) => {
        ctx.drawImage(data, x * tileSize + dx, y * tileSize + dy, data.width, data.height);
    };

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
            });
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
                    });
                }
            });
            cancels.push(cancel);
        }
    }, () => {
        if (canvas) {
            canvasToImage(canvas, callback);
        } else {
            callback('image failed to load');
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

    getCoverTiles(params: { projection: string, tile: CanonicalTileID, zoom: number}, callback: Callback) {
        const coverTiles = [];
        return callback(null, this.reprojectedTile(params, coverTiles));
    }

    reprojectedTile(params: { projection: string, tile: CanonicalTileID, zoom: number }, coverTiles: []) {
        const {tile, projection, zoom} = params;

        const actualZ = zoom || tile.z;
        const worldSize = 1 << actualZ;

        const bound = tile.toLngLatBounds();
        const trNorthwestCoords = transformLngLat(bound.getNorthWest(), 'WGS84', projection);
        const {direction} = getTileSystem(projection);
        // 左上角像素坐标
        const ltPixel = lngLatToPixel(trNorthwestCoords, actualZ, projection);
        const trSoutheastCoords = transformLngLat(bound.getSouthEast(), 'WGS84', projection);
        // 右下角像素坐标
        const rbPoint = lngLatToPixel(trSoutheastCoords, actualZ, projection);

        const northwestTile = lngLatToTileFromZ(trNorthwestCoords, actualZ, projection);
        const southeastTile = lngLatToTileFromZ(trSoutheastCoords, actualZ, projection);

        const xMin = direction.x > 0 ? northwestTile.x : southeastTile.x;
        const xMax = direction.x > 0 ? southeastTile.x : northwestTile.x;
        const yMin = direction.y > 0 ? northwestTile.y : southeastTile.y;
        const yMax = direction.y > 0 ? southeastTile.y : northwestTile.y;
        // eslint-disable-next-line prefer-const
        let xRange = xMax - xMin, yRange = yMax - yMin;
        // 穿过子午线
        if (xMin > xMax) {
            xRange = worldSize - xMin;
            xRange += xMax;
        }
        for (let x = 0; x < xRange + 1; x++) {
            for (let y = 0; y < yRange + 1; y++) {
                const tileX = (xMin + x) % worldSize, tileY = yMin + y;
                const dx = x * direction.x + (direction.x < 0 ? xRange : 0);
                const dy = y * direction.y + (direction.y < 0 ? yRange : 0);
                coverTiles.push({x: tileX, y: tileY, z: actualZ, dx, dy});
            }
        }
        return {
            coverTiles,
            ltPixel,
            rbPixel: {x: rbPoint.x + 256 * xRange, y: rbPoint.y + 256 * yRange}
        };
    }

    loadTile(params: WorkerTileParameters, callback: Callback) {
        const loading = this.loading[params.tileID.key] = this.loading[params.tileID.key] || {status: 'loading'};
        loading.request = this.loadRasterTile(params, (error, result) => {
            if (loading.status === 'unloaded') return callback(null);
            delete loading.request;
            callback(error, result);
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
            // eslint-disable-next-line no-unused-expressions
            loading.subTiles && loading.subTiles.forEach(tile => delete this.subLoading[tile]);
        }
    }

}
