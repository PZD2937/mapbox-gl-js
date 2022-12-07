// @flow
import LngLat from "../lng_lat";
import Mercator from "./mercator";

import type {ProjectionSpecification} from "../../style-spec/types";
import type {ProjectedPoint} from "./projection";
import type Transform from "../transform";
import type {UnwrappedTileID} from "../../source/tile_id";
import {mat4} from "gl-matrix";

export default class Baidu extends Mercator {
    constructor(options: ProjectionSpecification) {
        super(options);
        this.wrap = true;
        this.supportsWorldCopies = true;
        this.supportsTerrain = true;
        this.supportsFog = true;
        this.supportsFreeCamera = true;
        this.isReprojectedInTileSpace = false;
        this.unsupportedLayers = [];
        this.range = null;
    }

    createTileMatrix(tr: Transform, worldSize: number, id: UnwrappedTileID): Float64Array {
        let scale, scaledX, scaledY;
        const canonical = id.canonical;
        const posMatrix = mat4.identity(new Float64Array(16));

    }
}
