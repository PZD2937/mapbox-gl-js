// @flow

import {asyncAll, extend, pick} from '../util/util.js';

import {getImage, ResourceType} from '../util/ajax.js';
import {Event, ErrorEvent, Evented} from '../util/evented.js';
import loadTileJSON from './load_tilejson.js';
import {postTurnstileEvent} from '../util/mapbox.js';
import TileBounds from './tile_bounds.js';
import browser from '../util/browser.js';

import {cacheEntryPossiblyAdded} from '../util/tile_request_cache.js';

import type {Source} from './source.js';
import type {OverscaledTileID} from './tile_id.js';
import type Map from '../ui/map.js';
import type Painter from '../render/painter.js';
import type Dispatcher from '../util/dispatcher.js';
import type Tile from './tile.js';
import type {Callback} from '../types/callback.js';
import type {Cancelable} from '../types/cancelable.js';
import type {TextureImage} from '../render/texture.js';
import type {
    RasterSourceSpecification,
    RasterDEMSourceSpecification
} from '../style-spec/types.js';
import {mergerAndCutFromTextureImage} from "../util/canvas.js";
import {CanonicalTileID} from "./tile_id.js";

class RasterTileSource extends Evented implements Source {
    type: 'raster' | 'raster-dem';
    id: string;
    minzoom: number;
    maxzoom: number;
    url: string;
    scheme: string;
    tileSize: number;
    customTags: ?Object;
    projection: ?string;

    bounds: ?[number, number, number, number];
    tileBounds: TileBounds;
    roundZoom: boolean | void;
    dispatcher: Dispatcher;
    map: Map;
    tiles: Array<string>;

    _loaded: boolean;
    _options: RasterSourceSpecification | RasterDEMSourceSpecification;
    _tileJSONRequest: ?Cancelable;

    constructor(id: string, options: RasterSourceSpecification | RasterDEMSourceSpecification, dispatcher: Dispatcher, eventedParent: Evented) {
        super();
        this.id = id;
        this.dispatcher = dispatcher;
        this.setEventedParent(eventedParent);

        this.type = 'raster';
        this.minzoom = 0;
        this.maxzoom = 22;
        this.roundZoom = true;
        this.scheme = 'xyz';
        this.tileSize = 512;
        this._loaded = false;

        this._options = extend({type: 'raster'}, options);
        extend(this, pick(options, ['url', 'scheme', 'tileSize', 'projection', 'customTags']));
    }

    load() {
        this._loaded = false;
        this.fire(new Event('dataloading', {dataType: 'source'}));
        this._tileJSONRequest = loadTileJSON(this._options, this.map._requestManager, null, null, (err, tileJSON) => {
            this._tileJSONRequest = null;
            this._loaded = true;
            if (err) {
                this.fire(new ErrorEvent(err));
            } else if (tileJSON) {
                extend(this, tileJSON);
                if (tileJSON.bounds) this.tileBounds = new TileBounds(tileJSON.bounds, this.minzoom, this.maxzoom);

                postTurnstileEvent(tileJSON.tiles);

                // `content` is included here to prevent a race condition where `Style#_updateSources` is called
                // before the TileJSON arrives. this makes sure the tiles needed are loaded once TileJSON arrives
                // ref: https://github.com/mapbox/mapbox-gl-js/pull/4347#discussion_r104418088
                this.fire(new Event('data', {dataType: 'source', sourceDataType: 'metadata'}));
                this.fire(new Event('data', {dataType: 'source', sourceDataType: 'content'}));
            }
        });
    }

    loaded(): boolean {
        return this._loaded;
    }

    onAdd(map: Map) {
        this.map = map;
        this.load();
    }

    onRemove() {
        if (this._tileJSONRequest) {
            this._tileJSONRequest.cancel();
            this._tileJSONRequest = null;
        }
    }

    serialize(): RasterSourceSpecification | RasterDEMSourceSpecification {
        return extend({}, this._options);
    }

    hasTile(tileID: OverscaledTileID): boolean {
        return !this.tileBounds || this.tileBounds.contains(tileID.canonical);
    }

    loadTile(tile: Tile, callback: Callback<void>) {
        const use2x = browser.devicePixelRatio >= 2;
        const url = this.map._requestManager.normalizeTileURL(tile.tileID.canonical.url(this.tiles, this.scheme), use2x, this.tileSize);
        const {x, y, z} = tile.tileID.canonical;
        const tiles = tile.getCoverTile(tile.tileID.projection);
        if(z > 9 && tiles.needOffset && tiles.tiles.length){
            const cancels = [];
            asyncAll(tiles.tiles, (item, cb) => {
                const url = this.map._requestManager.normalizeTileURL(new CanonicalTileID(item.z, item.x, item.y).url(this.tiles, this.scheme), use2x, this.tileSize);
                const cancel = getImage(this.map._requestManager.transformRequest(url, ResourceType.Tile, this.customTags, item), (error, data, cacheControl, expires) => {
                    cb(error, {
                        x: item.x,
                        y: item.y,
                        z: item.z,
                        offsetX: item.offsetX,
                        offsetY: item.offsetY,
                        data,
                    });
                })
                cancels.push(cancel);
            }, (error, results) => {
                if (tile.aborted) {
                    tile.state = 'unloaded';
                    return callback(null);
                }
                if(error){
                    tile.state = 'errored';
                    return callback(error)
                }

                const imageSize = results[0].data.width;
                // const worldSize = Math.pow(2, z) * imageSize;
                const bbox = tiles.bbox;

                const lngResolution = imageSize / (bbox.maxx - bbox.minx);
                const latResolution = imageSize / (bbox.maxy - bbox.miny);

                const tileOffset = tiles.offset;
                const mergerOpt = {offsetX: -(tileOffset.x * lngResolution) % imageSize, offsetY: -(tileOffset.y * latResolution) % imageSize, imageSize};

                mergerAndCutFromTextureImage(results[0].data, results, mergerOpt, textureImage => {
                    tile.setTexture(textureImage, this.map.painter);
                    tile.state = 'loaded';
                    cacheEntryPossiblyAdded(this.dispatcher);
                    callback(null);
                });
            })
            tile.request = {
                cancel: function () {
                    cancels.forEach(c => c.cancel())
                    cancels.length = 0;
                }
            }
        }else {
            tile.request = getImage(this.map._requestManager.transformRequest(url, ResourceType.Tile, this.customTags, {x, y, z}), (error, data, cacheControl, expires) => {
                delete tile.request;

                if (tile.aborted) {
                    tile.state = 'unloaded';
                    return callback(null);
                }

                if (error) {
                    tile.state = 'errored';
                    return callback(error);
                }

                if (!data) return callback(null);

                if (this.map._refreshExpiredTiles) tile.setExpiryData({cacheControl, expires});
                tile.setTexture(data, this.map.painter);
                tile.state = 'loaded';

                cacheEntryPossiblyAdded(this.dispatcher);
                callback(null);
            });
        }
    }

    static loadTileData(tile: Tile, data: TextureImage, painter: Painter) {
        tile.setTexture(data, painter);
    }

    static unloadTileData(tile: Tile, painter: Painter) {
        if (tile.texture) {
            painter.saveTileTexture(tile.texture);
        }
    }

    abortTile(tile: Tile, callback: Callback<void>) {
        if (tile.request) {
            tile.request.cancel();
            delete tile.request;
        }
        callback();
    }

    unloadTile(tile: Tile, callback: Callback<void>) {
        if (tile.texture) this.map.painter.saveTileTexture(tile.texture);
        callback();
    }

    hasTransition(): boolean {
        return false;
    }
}

export default RasterTileSource;
