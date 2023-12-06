// @flow

import RasterTileSource from "../../src/source/raster_tile_source.js";
import type {Source} from "../../src/source/source.js";
import type Tile from "../../src/source/tile.js";
import type {Callback} from "../../src/types/callback.js";
import {Event} from "../../src/util/evented.js";

class RasterWindyTileSource extends RasterTileSource implements Source {

    setTiles(tiles: Array<string>): this {
        this._options.tiles = tiles;
        this.tiles = tiles;
        this.reload();
        return this;
    }

    reload() {
        const sourceCache = this.map.style._getSourceCache(this.id);
        sourceCache._preloadTiles(this.map.transform, (err, results: Tile[]) => {
            if (err) return;
            for (const id in sourceCache._tiles) {
                sourceCache._removeTile(+id);
            }
            results.forEach(tile => {
                sourceCache._tiles[tile.tileID.key] = tile;
            });
            this.fire(new Event('data', {dataType: 'source', sourceDataType: 'metadata'}));
            this.fire(new Event('data', {dataType: 'source', sourceDataType: 'content'}));
        });
    }

    loadTile(tile: Tile, callback: Callback<void>) {
        tile.isWindyTile = true;
        super.loadTile(tile, callback);
    }

    _isSea() {
        return this._options && this._options.isSea;
    }

    _isPngTile() {
        return this.tiles[0].split('.').reverse()[0].toLowerCase().startsWith('png');
    }
}

export default RasterWindyTileSource;
