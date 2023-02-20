// @flow

import {TextureImage} from "../render/texture.js";
import offscreenCanvasSupported from "./offscreen_canvas_supported.js";

type MergerImageObject = {
    x: number,
    y: number,
    z: number,
    offsetX: number,
    offsetY: number,
    data: TextureImage
}

type MergerOptions = {
    offsetX: number,
    offsetY: number,
    imageSize: number
}

export function mergerAndCutFromTextureImage(baseImage: TextureImage, mergers: Array<MergerImageObject>, opt: MergerOptions, callback: Function<TextureImage>) {
    const {offsetX, offsetY, imageSize} = opt;
    const canvas = offscreenCanvasSupported ? new OffscreenCanvas(imageSize, imageSize) : document.createElement('canvas');
    canvas.width = imageSize;
    canvas.height = imageSize;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(baseImage, offsetX, offsetY);
    for (let i = 0; i < mergers.length; i++) {
        ctx.drawImage(mergers[i].data, mergers[i].offsetX * imageSize + offsetX, mergers[i].offsetY * imageSize + offsetY);
    }
    if(window.createImageBitmap){
        window.createImageBitmap(canvas).then(r => {
            callback(r)
        }).catch(err => {
            console.log(err)
        })
    }else {
        callback(canvas)
    }
    // callback(canvas)
}


