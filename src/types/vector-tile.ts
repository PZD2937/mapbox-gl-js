declare module '@mapbox/vector-tile' {
    import type Pbf from "pbf";

    export class VectorTile {
        constructor(pbf: Pbf, end?: number, options?: any);
    }
}
