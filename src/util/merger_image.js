// @flow
import offscreenCanvasSupported from "./offscreen_canvas_supported.js";
import {TextureImage} from "../render/texture.js";
import type {Callback} from "../types/callback.js";
const supportImageBitmap = typeof self.createImageBitmap === 'function';

type MergerImageObject = {
    x: number,
    y: number,
    data: TextureImage
}

export default function mergerTextureImage(mergers: Array<MergerImageObject>, imageSize: number, dx: number, dy: number, callback: Callback): TextureImage {
    const canvas = offscreenCanvasSupported() ? new OffscreenCanvas(imageSize, imageSize) : document.createElement('canvas');
    const ctx = canvas.getContext('2d', {willReadFrequently: true});
    canvas.width = imageSize;
    canvas.height = imageSize;
    for (let i = 0; i < mergers.length; i++) {
        const {data, x, y} = mergers[i] || {};
        if (!data) continue;
        ctx.drawImage(data, x * imageSize + dx, y * imageSize + dy, data.width, data.height);
    }
    if (supportImageBitmap) {
        window.createImageBitmap(canvas).then(imageBitmap => {
            callback(null, imageBitmap);
        });
    } else {
        callback(null, canvas);
    }
}

