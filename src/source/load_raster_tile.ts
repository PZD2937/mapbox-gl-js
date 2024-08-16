// @flow
import {arrayBufferToImage, getImage} from "../util/ajax";
import offscreenCanvasSupported from "../util/offscreen_canvas_supported";
import {asyncAll, isWorker} from "../util/util";

import type {Callback} from "../types/callback";
import type {Cancelable} from "../types/cancelable";
import type {RequestParameters} from "../util/ajax";
import type {WorkerCoverTilesResult, WorkerRasterTileParameters} from "./worker_source";

const supportImageBitmap = typeof createImageBitmap === 'function';

function dataToTextureImage(data: ArrayBuffer | HTMLImageElement, cb: Callback<ImageBitmap | HTMLImageElement>) {
    if (data instanceof ArrayBuffer) {
        arrayBufferToImage(data, cb);
    } else {
        cb(null, data);
    }
}

function canvasToImage(canvas: HTMLCanvasElement | OffscreenCanvas, callback: Callback<ImageBitmap | HTMLCanvasElement>) {
    if (supportImageBitmap) {
        // console.log(canvas.toDataURL())
        createImageBitmap(canvas).then(imageBitmap => {
            callback(null, imageBitmap);
        });
    } else {
        callback(null, canvas as HTMLCanvasElement);
    }
}

export type LoadRasterTile = (params: WorkerCoverTilesResult, callback: Callback<ImageBitmap | HTMLCanvasElement>) => Cancelable;

export function loadRasterTile(params: WorkerRasterTileParameters, callback: Callback<ImageBitmap | HTMLCanvasElement>): Cancelable {
    const {requests, ltPixel, rbPixel} = params;

    const makeRequest = (requestParam: RequestParameters, cb: Callback<undefined>) => {
        // @ts-ignore
        requestParam.returnArraybuffer = true;
        const request = getImage(requestParam, cb);
        return () => {
            request.cancel();
            cb();
        };
    };

    let canvas: OffscreenCanvas | HTMLCanvasElement,
        ctx: OffscreenCanvasRenderingContext2D | CanvasRenderingContext2D,
        tileSize: number,
        dx: number,
        dy: number;

    const initConfig = (imageSize: number) => {
        if (!canvas) {
            canvas = offscreenCanvasSupported() ? new OffscreenCanvas(imageSize, imageSize) : (isWorker() ? null : document.createElement('canvas'));
            if (!canvas) return;
            // 计算都是基于256像素计算，所以使用的所有坐标要乘以 实际图片像素/256
            const scale = imageSize / 256;
            dx = -ltPixel.x * scale;
            dy = -ltPixel.y * scale;
            tileSize = imageSize;

            const size = Math.max(rbPixel.x - ltPixel.x, rbPixel.y - ltPixel.y) * scale;
            canvas.width = size;
            canvas.height = size;
            // @ts-ignore
            ctx = canvas.getContext('2d', {willReadFrequently: true});
        }
    };
    const draw = (data: ImageBitmap | HTMLImageElement, x: number, y: number) => {
        ctx.drawImage(data, x * tileSize + dx, y * tileSize + dy, data.width, data.height);
    };

    const cancels = [];
    // console.log(params);
    asyncAll(requests, (item, cb) => {
        const key = item.tile.key;
        if (this._subLoading[key]) {
            dataToTextureImage(this._subLoading[key], (_error, textureImage) => {
                if (textureImage) {
                    initConfig(textureImage.width);
                    draw(textureImage, item.x, item.y);
                }
                cb(null);
            });
        } else {
            const cancel = this.deduped.request(item.tile.key, null, makeRequest.bind(this, item.request), (error: any, data: any) => {
                if (error) {
                    delete this._subLoading[key];
                    return cb(null);
                }
                if (data) {
                    this._subLoading[key] = data;
                    dataToTextureImage(data, (_error, textureImage) => {
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
            // console.log(params.tileID, canvas.width, canvas.height, canvas.toDataURL());
            canvasToImage(canvas, callback);
        } else {
            callback(new Error('image failed to load'));
        }
    });
    return {
        cancel: () => {
            cancels.forEach(cancel => cancel());
        }
    };
}
