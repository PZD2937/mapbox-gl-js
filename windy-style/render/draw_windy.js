// @flow
import type Painter from "../../src/render/painter.js";
import type SourceCache from "../../src/source/source_cache.js";
import type RasterWindyStyleLayer from "../style/style_layer/raster_windy_style_layer.js";
import type {OverscaledTileID} from "../../src/source/tile_id.js";
import DepthMode from "../../src/gl/depth_mode.js";
import CullFaceMode from "../../src/gl/cull_face_mode.js";
import {rasterWindyUniformValues} from "./program/windy_program.js";


function drawCloud(painter: Painter, sourceCache: SourceCache, layer: RasterWindyStyleLayer, tileIDs: Array<OverscaledTileID>) {
    if (painter.renderPass !== 'translucent') return;
    if (layer.paint.get('raster-opacity') === 0) return;
    if (!tileIDs.length) return;

    const context = painter.context;
    const gl = context.gl;
    const program = painter.useProgram('windy', null, layer.getDefines());

    const colorMode = painter.colorModeForRenderPass();

    // When rendering to texture, coordinates are already sorted: primary by
    // proxy id and secondary sort is by Z.
    const renderingToTexture = painter.terrain && painter.terrain.renderingToTexture;

    const [gradient, gradient2] = layer.getGradients(gl);
    const [patt, patt2] = layer.buildExtraTexture(gl);
    const [stencilModes, coords] = renderingToTexture ? [{}, tileIDs] : painter.stencilConfigForOverlap(tileIDs);

    const minTileZ = coords[coords.length - 1].overscaledZ;
    const align = !painter.options.moving;

    if (gradient) {
        context.activeTexture.set(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, gradient.texture);
    }

    if (gradient2) {
        context.activeTexture.set(gl.TEXTURE3);
        gl.bindTexture(gl.TEXTURE_2D, gradient2.texture);
    }

    if (patt) {
        context.activeTexture.set(gl.TEXTURE4);
        gl.bindTexture(gl.TEXTURE_2D, patt);
    }
    if (patt2) {
        context.activeTexture.set(gl.TEXTURE5);
        gl.bindTexture(gl.TEXTURE_2D, patt2);
    }

    for (const coord of coords) {
        const depthMode = renderingToTexture ? DepthMode.disabled : painter.depthModeForSublayer(coord.overscaledZ - minTileZ,
            layer.paint.get('windy-opacity') === 1 ? DepthMode.ReadWrite : DepthMode.ReadOnly, gl.LESS);
        const unwrappedTileID = coord.toUnwrapped();

        const tile = sourceCache.getTile(coord);
        if (renderingToTexture && !(tile && tile.hasData())) continue;

        const projMatrix = (renderingToTexture) ? coord.projMatrix : painter.transform.calculateProjMatrix(unwrappedTileID, align);

        const stencilMode = painter.terrain && renderingToTexture ?
            painter.terrain.stencilModeForRTTOverlap(coord) :
            stencilModes[coord.overscaledZ];

        const textureFilter = layer.paint.get('windy-resampling') === 'nearest' ? gl.NEAREST : gl.LINEAR;
        context.activeTexture.set(gl.TEXTURE0);
        tile.texture.bind(textureFilter, gl.CLAMP_TO_EDGE);

        // Enable trilinear filtering on tiles only beyond 20 degrees pitch,
        // to prevent it from compromising image crispness on flat or low tilted maps.
        if (tile.texture.useMipmap && context.extTextureFilterAnisotropic && painter.transform.pitch > 20) {
            gl.texParameterf(gl.TEXTURE_2D, context.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT, context.extTextureFilterAnisotropicMax);
        }
        // console.log(coord.toString(), layer.getPars0(tile), layer.getPars1(), layer.getPars2())
        const uniformValues = rasterWindyUniformValues(projMatrix, layer, layer.getPars0(tile), layer.getPars1(), layer.getPars2());

        painter.uploadCommonUniforms(context, program, unwrappedTileID);

        const {tileBoundsBuffer, tileBoundsIndexBuffer, tileBoundsSegments} = painter.getTileBoundsBuffers(tile);

        program.draw(painter, gl.TRIANGLES, depthMode, stencilMode, colorMode, CullFaceMode.disabled,
            uniformValues, layer.id, tileBoundsBuffer,
            tileBoundsIndexBuffer, tileBoundsSegments);
    }

    // const test = new Uint8ClampedArray(512 * 512 * 4);
    // // console.log(gl.drawingBufferWidth, gl.drawingBufferHeight)
    // gl.readPixels(0, 0, 512, 512, gl.RGBA, gl.UNSIGNED_BYTE, test)
    // // console.log(test);
    // imageDataToImage(test, 512, 512)

}

export default drawCloud
