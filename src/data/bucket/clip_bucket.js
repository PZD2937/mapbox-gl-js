// @flow

import earcut from 'earcut';
import classifyRings from '../../util/classify_rings.js';
import assert from 'assert';
import {register} from '../../util/web_worker_transfer.js';
import loadGeometry from '../load_geometry.js';
import toEvaluationFeature from '../evaluation_feature.js';
import EvaluationParameters from '../../style/evaluation_parameters.js';
import TriangleGridIndex from '../../util/triangle_grid_index.js';

import type {CanonicalTileID, UnwrappedTileID} from '../../source/tile_id.js';
import type {
    Bucket,
    BucketParameters,
    BucketFeature,
    IndexedFeature,
    PopulateParameters
} from '../bucket.js';
import type ClipStyleLayer from '../../style/style_layer/clip_style_layer.js';
import type Context from '../../gl/context.js';
import type {FeatureStates} from '../../source/source_state.js';
import type {TileTransform} from '../../geo/projection/tile_transform.js';
import type {Footprint, TileFootprint} from '../../../3d-style/util/conflation.js';
import type {IVectorTileLayer} from '@mapbox/vector-tile';
import type {SpritePositions} from '../../util/image.js';

import Point from "@mapbox/point-geometry";

class ClipBucket implements Bucket {
    index: number;
    zoom: number;
    layers: Array<ClipStyleLayer>;
    layerIds: Array<string>;
    stateDependentLayers: Array<ClipStyleLayer>;
    stateDependentLayerIds: Array<string>;
    patternFeatures: Array<BucketFeature>;
    hasPattern: boolean;

    footprints: Array<Footprint>;

    constructor(options: BucketParameters<ClipStyleLayer>) {
        this.zoom = options.zoom;
        this.layers = options.layers;
        this.layerIds = this.layers.map(layer => layer.fqid);
        this.index = options.index;
        this.patternFeatures = [];
        this.hasPattern = false;

        this.stateDependentLayerIds = this.layers.filter((l) => l.isStateDependent()).map((l) => l.id);
        this.footprints = [];
    }

    updateFootprints(id: UnwrappedTileID, footprints: Array<TileFootprint>) {
        for (const footprint of this.footprints) {
            footprints.push({
                footprint,
                id
            });
        }
    }

    populate(features: Array<IndexedFeature>, options: PopulateParameters, canonical: CanonicalTileID, tileTransform: TileTransform) {
        const bucketFeatures = [];

        for (const {feature, id, index, sourceLayerIndex} of features) {
            const needGeometry = this.layers[0]._featureFilter.needGeometry;
            const evaluationFeature = toEvaluationFeature(feature, needGeometry);

            // $FlowFixMe[method-unbinding]
            if (!this.layers[0]._featureFilter.filter(new EvaluationParameters(this.zoom), evaluationFeature, canonical)) continue;

            const bucketFeature: BucketFeature = {
                id,
                properties: feature.properties,
                type: feature.type,
                sourceLayerIndex,
                index,
                geometry: needGeometry ? evaluationFeature.geometry : loadGeometry(feature, canonical, tileTransform),
                patterns: {}
            };

            bucketFeatures.push(bucketFeature);
        }

        for (const bucketFeature of bucketFeatures) {
            const {geometry, index, sourceLayerIndex} = bucketFeature;

            this.addFeature(bucketFeature, geometry, index, canonical, {}, options.availableImages, options.brightness);
            const feature = features[index].feature;
            options.featureIndex.insert(feature, geometry, index, sourceLayerIndex, this.index);
        }
    }

    isEmpty(): boolean {
        return this.footprints.length === 0;
    }

    uploadPending(): boolean {
        return false;
    }

    upload(_context: Context) {
    }

    update(_states: FeatureStates, _vtLayer: IVectorTileLayer, _availableImages: Array<string>, _imagePositions: SpritePositions, _brightness: ?number) {
    }

    destroy() {
    }

    addFeature(feature: BucketFeature, geometry: Array<Array<Point>>, index: number, canonical: CanonicalTileID, imagePositions: SpritePositions, _availableImages: Array<string> = [], _brightness: ?number) {
        for (const polygon of classifyRings(geometry, 2)) {
            const points: Array<Point> = [];
            const flattened = [];
            const holeIndices = [];

            const min = new Point(Infinity, Infinity);
            const max = new Point(-Infinity, -Infinity);

            for (const ring of polygon) {
                if (ring.length === 0) {
                    continue;
                }

                if (ring !== polygon[0]) {
                    holeIndices.push(flattened.length / 2);
                }

                for (let i = 0; i < ring.length; i++) {
                    flattened.push(ring[i].x);
                    flattened.push(ring[i].y);
                    points.push(ring[i]);

                    min.x = Math.min(min.x, ring[i].x);
                    min.y = Math.min(min.y, ring[i].y);
                    max.x = Math.max(max.x, ring[i].x);
                    max.y = Math.max(max.y, ring[i].y);
                }
            }

            const indices = earcut(flattened, holeIndices);
            assert(indices.length % 3 === 0);

            const grid = new TriangleGridIndex(points, indices, 8, 256);
            this.footprints.push({
                vertices: points,
                indices,
                grid,
                min,
                max
            });
        }
    }
}

register(ClipBucket, 'ClipBucket', {omit: ['layers']});

export default ClipBucket;