// @flow
import Transform from "../geo/transform.js";
import {OverscaledTileID} from "../source/tile_id.js";

function twoOfPower(value: number): number {
    return Math.log(value) / Math.LN2;
}

function getTileChildOfZoom(out: Array, tile: OverscaledTileID, zoom: number, maxZoom: number): void {
    if (tile.overscaledZ === zoom) return out.push(tile);
    const children = tile.children(maxZoom);
    for (let i = 0; i < children.length; i++) {
        getTileChildOfZoom(out, children[i], zoom, maxZoom);
    }
}

/**
 *
 * - 提供每一帧地图上标准的web mercator瓦片网格
 */
export default class SurfaceTileManager {
    _normalTiles: Array<OverscaledTileID>;
    transform: Transform;

    constructor() {
        this._normalTileSize = 512;
        this._normalTiles = [];
    }

    update(tr: Transform) {
        this.transform = tr;
        this._normalTiles = tr.coveringTiles({tileSize: 512});
    }

    getCoveringTiles(tileSize, minZoom, maxZoom) {
        if (!tileSize || tileSize === this._normalTileSize) return this._normalTiles.slice(0, Infinity);

        const normalTiles = this._normalTiles;
        const z = Math.max(minZoom, this.transform.coveringZoomLevel({tileSize}));
        const tiles = [], checked = {};
        for (let i = 0; i < normalTiles.length; i++) {
            // source 的tileSize 比标准的小，需要子瓦片;反之，需要父瓦片
            if (tileSize < this._normalTileSize) {
                getTileChildOfZoom(tiles, normalTiles[i], z, maxZoom);
            } else {
                const parents = normalTiles[i].scaledTo(z);
                // 已添加过的父瓦片
                if(checked[parents.key]) continue;
                checked[parents.key] = true;

                tiles.push(parents);
            }
        }
        return tiles;
    }

}
