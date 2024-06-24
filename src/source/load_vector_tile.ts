// @ts-expect-error - TS2300 - Duplicate identifier 'VectorTile'.
import {VectorTile} from '@mapbox/vector-tile';
import Protobuf from 'pbf';
import {getArrayBuffer} from '../util/ajax';

import type {DedupedRequest} from './deduped_request';

import type {Callback} from '../types/callback';
import type {RequestedTileParameters} from './worker_source';

export type LoadVectorTileResult = {
    rawData: ArrayBuffer;
    vectorTile?: VectorTile;
    expires?: any;
    cacheControl?: any;
    resourceTiming?: Array<PerformanceResourceTiming>;
};

/**
 * @callback LoadVectorDataCallback
 * @param error
 * @param vectorTile
 * @private
 */
export type LoadVectorDataCallback = Callback<LoadVectorTileResult | null | undefined>;

export type AbortVectorData = () => void;
export type LoadVectorData = (params: RequestedTileParameters, callback: LoadVectorDataCallback) => AbortVectorData | null | undefined;

/**
 * @private
 */
export function loadVectorTile(
    params: RequestedTileParameters & {vtOptions: any},
    callback: LoadVectorDataCallback,
    skipParse?: boolean,
): () => void {
    const key = JSON.stringify(params.request);

    const makeRequest = (callback: LoadVectorDataCallback) => {
        const request = getArrayBuffer(params.request, (err?: Error | null, data?: ArrayBuffer | null, cacheControl?: string | null, expires?: string | null) => {
            if (err) {
                callback(err);
            } else if (data) {
                callback(null, {
                    vectorTile: skipParse ? undefined : new VectorTile(new Protobuf(data), undefined, params.vtOptions),
                    rawData: data,
                    cacheControl,
                    expires
                });
            }
        });
        return () => {
            request.cancel();
            callback();
        };
    };

    if (params.data) {
        // if we already got the result earlier (on the main thread), return it directly
        (this.deduped as DedupedRequest).entries[key] = {result: [null, params.data]};
    }

    const callbackMetadata = {type: 'parseTile', isSymbolTile: params.isSymbolTile, zoom: params.tileZoom};
    return (this.deduped as DedupedRequest).request(key, callbackMetadata, makeRequest, callback);
}
