export type TileJSON = {
    tilejson: '3.0.0' | '2.2.0' | '2.1.0' | '2.0.1' | '2.0.0' | '1.0.0';
    name?: string;
    description?: string;
    version?: string;
    attribution?: string;
    template?: string;
    tiles: Array<string>;
    grids?: Array<string>;
    data?: Array<string>;
    minzoom?: number;
    maxzoom?: number;
    bounds?: [number, number, number, number];
    center?: [number, number, number];
    vector_layers?: Array<any>;
    raster_layers?: Array<any>;
    variants?: Array<any>;
    language?: {
        [source_name: string]: string;
    }
    language_options?: {
        [country_code: string]: string;
    }
    worldview?: {
        [source_name: string]: string;
    };
    worldview_options?: {
        [country_code: string]: string;
    },
    worldview_default?: string;
};
