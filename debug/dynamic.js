window.dynamic = {
    "version": 8,
    "name": "Mapbox Standard",
    "metadata": {
        "mapbox:type": "default",
        "mapbox:origin": "streets-v12",
        "mapbox:autocomposite": true,
        "mapbox:groups": {
            "Transit, transit-labels": {
                "name": "Transit, transit-labels",
                "collapsed": true
            },
            "Administrative boundaries, admin": {
                "name": "Administrative boundaries, admin",
                "collapsed": true
            },
            "Land & water, built": {
                "name": "Land & water, built",
                "collapsed": true
            },
            "Transit, bridges": { "name": "Transit, bridges", "collapsed": true },
            "Buildings, building-labels": {
                "name": "Buildings, building-labels",
                "collapsed": true
            },
            "Transit, surface": { "name": "Transit, surface", "collapsed": true },
            "Land & water, land": {
                "name": "Land & water, land",
                "collapsed": true
            },
            "Road network, bridges": {
                "name": "Road network, bridges",
                "collapsed": false
            },
            "Road network, tunnels": {
                "name": "Road network, tunnels",
                "collapsed": true
            },
            "Road network, road-labels": {
                "name": "Road network, road-labels",
                "collapsed": true
            },
            "Buildings, built": { "name": "Buildings, built", "collapsed": true },
            "Natural features, natural-labels": {
                "name": "Natural features, natural-labels",
                "collapsed": true
            },
            "Road network, surface": {
                "name": "Road network, surface",
                "collapsed": true
            },
            "Walking, cycling, etc., barriers-bridges": {
                "name": "Walking, cycling, etc., barriers-bridges",
                "collapsed": true
            },
            "Place labels, place-labels": {
                "name": "Place labels, place-labels",
                "collapsed": true
            },
            "Transit, ferries": { "name": "Transit, ferries", "collapsed": true },
            "Transit, elevated": {
                "name": "Transit, elevated",
                "collapsed": true
            },
            "Point of interest labels, poi-labels": {
                "name": "Point of interest labels, poi-labels",
                "collapsed": true
            },
            "Walking, cycling, etc., tunnels": {
                "name": "Walking, cycling, etc., tunnels",
                "collapsed": true
            },
            "Terrain, land": { "name": "Terrain, land", "collapsed": true },
            "Road network, tunnels-case": {
                "name": "Road network, tunnels-case",
                "collapsed": true
            },
            "Walking, cycling, etc., walking-cycling-labels": {
                "name": "Walking, cycling, etc., walking-cycling-labels",
                "collapsed": true
            },
            "Walking, cycling, etc., surface": {
                "name": "Walking, cycling, etc., surface",
                "collapsed": true
            },
            "Transit, built": { "name": "Transit, built", "collapsed": true },
            "Road network, surface-icons": {
                "name": "Road network, surface-icons",
                "collapsed": true
            },
            "Land & water, water": {
                "name": "Land & water, water",
                "collapsed": true
            },
            "Transit, ferry-aerialway-labels": {
                "name": "Transit, ferry-aerialway-labels",
                "collapsed": true
            }
        },
        "mapbox:uiParadigm": "layers",
        "mapbox:sdk-support": {
            "android": "10.6.0",
            "ios": "10.6.0",
            "js": "2.9.0"
        }
    },
    "center": [
        -87.63501659454005,
        41.87939907691319
    ],
    "zoom": 15.788024649845564,
    "bearing": 12.275759733208476,
    "pitch": 60.34019026251125,
    "camera": {
        "camera-projection": "orthographic"
    },
    "models": {
        "maple1-lod1": "mapbox://models/mapbox/maple1-lod1.glb",
        "maple1-lod2": "mapbox://models/mapbox/maple1-lod2.glb",
        "maple1-lod3": "mapbox://models/mapbox/maple1-lod3.glb",
        "maple1-lod4": "mapbox://models/mapbox/maple1-lod4.glb",
        "maple2-lod1": "mapbox://models/mapbox/maple2-lod1.glb",
        "maple2-lod2": "mapbox://models/mapbox/maple2-lod2.glb",
        "maple2-lod3": "mapbox://models/mapbox/maple2-lod3.glb",
        "maple2-lod4": "mapbox://models/mapbox/maple2-lod4.glb",
        "oak1-lod1": "mapbox://models/mapbox/oak1-lod1.glb",
        "oak1-lod2": "mapbox://models/mapbox/oak1-lod2.glb",
        "oak1-lod3": "mapbox://models/mapbox/oak1-lod3.glb",
        "oak1-lod4": "mapbox://models/mapbox/oak1-lod4.glb",
        "oak2-lod1": "mapbox://models/mapbox/oak2-lod1.glb",
        "oak2-lod2": "mapbox://models/mapbox/oak2-lod2.glb",
        "oak2-lod3": "mapbox://models/mapbox/oak2-lod3.glb",
        "oak2-lod4": "mapbox://models/mapbox/oak2-lod4.glb",
        "palm1-lod1": "mapbox://models/mapbox/palm1-lod1.glb",
        "palm1-lod2": "mapbox://models/mapbox/palm1-lod2.glb",
        "palm1-lod3": "mapbox://models/mapbox/palm1-lod3.glb",
        "palm1-lod4": "mapbox://models/mapbox/palm1-lod4.glb",
        "pine1-lod1": "mapbox://models/mapbox/pine1-lod1.glb",
        "pine1-lod2": "mapbox://models/mapbox/pine1-lod2.glb",
        "pine1-lod3": "mapbox://models/mapbox/pine1-lod3.glb",
        "pine1-lod4": "mapbox://models/mapbox/pine1-lod4.glb",
        "pine2-lod1": "mapbox://models/mapbox/pine2-lod1.glb",
        "pine2-lod2": "mapbox://models/mapbox/pine2-lod2.glb",
        "pine2-lod3": "mapbox://models/mapbox/pine2-lod3.glb",
        "pine2-lod4": "mapbox://models/mapbox/pine2-lod4.glb"
    },
    "sources": {
        "composite": {
            "type": "vector",
            "url": "mapbox://mapbox.mapbox-bathymetry-v2,mapbox.mapbox-streets-v8,mapbox.mapbox-terrain-v2"
        },
        "trees": {
            "type": "vector",
            "url": "mapbox://mapbox.mapbox-models-v1"
        },
        "3dbuildings": {
            "type": "batched-model",
            "url": "mapbox://mapbox.mapbox-3dbuildings-v1-beta"
        }
    },
    "sprite": "mapbox://sprites/mapbox/standard-beta/73jrw2iv9yt1v27bf6hw4p4cn",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "projection": { "name": "globe" },
    "layers": [
        {
            "id": "land",
            "type": "background",
            "metadata": { "mapbox:group": "Land & water, land" },
            "layout": { },
            "paint": {
                "background-color": "hsl(20, 20%, 95%)",
                "background-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    4,
                    0.1,
                    5,
                    0.0
                ]
            }
        },
        {
            "id": "landcover",
            "type": "fill",
            "metadata": { "mapbox:group": "Land & water, land" },
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 9,
            "layout": { },
            "paint": {
                "fill-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    2,
                    0.5,
                    4,
                    0.2
                ],
                "fill-color": [
                    "match",
                    [ "get", "class" ],
                    "wood",
                    "hsla(115, 55%, 74%, 0.8)",
                    "snow",
                    "hsl(200, 70%, 90%)",
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.28,
                        "hsl(137, 46%, 66%)",
                        0.3,
                        "hsl(110, 52%, 81%)"
                    ]
                ],
                "fill-opacity": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    8,
                    0.4,
                    9,
                    0
                ],
                "fill-antialias": false
            }
        },
        {
            "id": "national-park",
            "type": "fill",
            "metadata": { "mapbox:group": "Land & water, land" },
            "source": "composite",
            "source-layer": "landuse_overlay",
            "minzoom": 5,
            "filter": [ "==", [ "get", "class" ], "national_park" ],
            "layout": { },
            "paint": {
                "fill-emissive-strength": 0.3,
                "fill-color": "hsl(110, 41%, 78%)",
                "fill-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    5,
                    0,
                    6,
                    0.6,
                    12,
                    0.2
                ]
            }
        },
        {
            "id": "road-pedestrian-polygon-fill",
            "type": "fill",
            "metadata": { "mapbox:group": "Land & water, land" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "path", "pedestrian" ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "case", [ "has", "layer" ], [ ">=", [ "get", "layer" ], 0 ], true ],
                [ "==", [ "geometry-type" ], "Polygon" ]
            ],
            "paint": { "fill-color": "hsl(0, 20%, 97%)" }
        },
        {
            "id": "landuse",
            "type": "fill",
            "metadata": { "mapbox:group": "Land & water, land" },
            "source": "composite",
            "source-layer": "landuse",
            "minzoom": 5,
            "filter": [
                "all",
                [ ">=", [ "to-number", [ "get", "sizerank" ] ], 0 ],
                [
                    "match",
                    [ "get", "class" ],
                    [
                        "agriculture",
                        "wood",
                        "grass",
                        "scrub",
                        "park",
                        "airport",
                        "glacier",
                        "pitch",
                        "sand"
                    ],
                    true,
                    "residential",
                    [ "step", [ "zoom" ], true, 12, false ],
                    [ "facility", "industrial" ],
                    [ "step", [ "zoom" ], false, 12, true ],
                    "cemetery",
                    true,
                    "school",
                    true,
                    "hospital",
                    true,
                    "commercial_area",
                    true,
                    false
                ],
                [
                    "<=",
                    [
                        "-",
                        [ "to-number", [ "get", "sizerank" ] ],
                        [
                            "interpolate",
                            [ "exponential", 1.5 ],
                            [ "zoom" ],
                            12,
                            0,
                            18,
                            14
                        ]
                    ],
                    14
                ]
            ],
            "layout": { },
            "paint": {
                "fill-emissive-strength":0.2,
                "fill-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.1,
                    [
                        "match",
                        [ "get", "class" ],
                        "wood",
                        "hsla(115, 55%, 74%, 0.8)",
                        "scrub",
                        "hsla(110, 52%, 82%, 0.6)",
                        "agriculture",
                        "hsla(110, 55%, 88%, 0.6)",
                        "park",
                        "hsl(110, 60%, 80%)",
                        "grass",
                        "hsla(110, 55%, 88%, 0.6)",
                        "airport",
                        "hsl(225, 60%, 92%)",
                        "cemetery",
                        "hsl(110, 48%, 85%)",
                        "glacier",
                        "hsl(200, 70%, 90%)",
                        "hospital",
                        "hsl(0, 50%, 92%)",
                        "pitch",
                        "hsl(100, 70%, 85%)",
                        "sand",
                        "hsl(52, 65%, 86%)",
                        "school",
                        "hsl(40, 50%, 88%)",
                        "commercial_area",
                        "hsl(24, 75%, 80%)",
                        "residential",
                        "hsl(20, 7%, 97%)",
                        [ "facility", "industrial" ],
                        "hsl(230, 20%, 90%)",
                        "hsl(20, 22%, 86%)"
                    ],
                    0.4,
                    [
                        "match",
                        [ "get", "class" ],
                        "wood",
                        "hsla(115, 55%, 74%, 0.8)",
                        "scrub",
                        "hsla(110, 52%, 82%, 0.6)",
                        "agriculture",
                        "hsla(110, 55%, 88%, 0.6)",
                        "park",
                        "hsl(110, 60%, 80%)",
                        "grass",
                        "hsla(110, 55%, 88%, 0.6)",
                        "airport",
                        "hsl(225, 60%, 92%)",
                        "cemetery",
                        "hsl(110, 48%, 85%)",
                        "glacier",
                        "hsl(200, 70%, 90%)",
                        "hospital",
                        "hsl(0, 50%, 92%)",
                        "pitch",
                        "hsl(100, 70%, 85%)",
                        "sand",
                        "hsl(52, 65%, 86%)",
                        "school",
                        "hsl(40, 50%, 88%)",
                        "commercial_area",
                        "hsl(24, 100%, 94%)",
                        "residential",
                        "hsl(20, 7%, 97%)",
                        [ "facility", "industrial" ],
                        "hsl(230, 20%, 90%)",
                        "hsl(20, 22%, 86%)"
                    ]
                ],
                "fill-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    5,
                    0,
                    6,
                    [
                        "match",
                        [ "get", "class" ],
                        [ "residential", "airport" ],
                        [
                            "interpolate",
                            [ "linear" ],
                            [ "measure-light", "brightness" ],
                            0.1,
                            1,
                            0.4,
                            0.8
                        ],
                        0.2
                    ],
                    12,
                    [ "match", 
                    [ "get", "class" ],
                    ["residential"],
                    0,
                    ["forest", "grass", "meadow", "park"],
                    1,
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.1,
                        0.5,
                        0.4,
                        1
                    ] 
                    ]
                ]
            }
        },
        {
            "id": "hillshade",
            "type": "fill",
            "metadata": { "mapbox:group": "Terrain, land" },
            "source": "composite",
            "source-layer": "hillshade",
            "maxzoom": 16,
            "layout": { },
            "paint": {
                "fill-emissive-strength": 0.6,
                "fill-color": 
                [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.05,
                    [
                        "match",
                        [ "get", "class" ],
                        "shadow",
                        "hsla(40, 20%, 5%, 0.18)",
                        "hsla(20, 20%, 100%, 0.12)"
                    ],
                    0.2,
                    [
                        "match",
                        [ "get", "class" ],
                        "shadow",
                        "hsla(40, 41%, 21%, 0.06)",
                        "hsla(20, 20%, 100%, 0.12)"
                    ]
                ],
                "fill-opacity":
                [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    14,
                    1,
                    16,
                    0
                ],
                "fill-antialias": false
            }
        },
        {
            "id": "pitch-outline",
            "type": "line",
            "metadata": { "mapbox:group": "Land & water, land" },
            "source": "composite",
            "source-layer": "landuse",
            "minzoom": 15,
            "filter": [ "==", [ "get", "class" ], "pitch" ],
            "layout": { },
            "paint": { "line-color": "hsl(100, 65%, 75%)" }
        },
        {
            "id": "waterway-shadow",
            "type": "line",
            "metadata": { "mapbox:group": "Land & water, water" },
            "source": "composite",
            "source-layer": "waterway",
            "minzoom": 8,
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 11, "round" ],
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(219, 100%, 79%)",
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.3 ],
                    [ "zoom" ],
                    9,
                    [ "match", [ "get", "class" ], [ "canal", "river" ], 0.1, 0 ],
                    20,
                    [ "match", [ "get", "class" ], [ "canal", "river" ], 8, 3 ]
                ],
                "line-translate": [
                    "interpolate",
                    [ "exponential", 1.2 ],
                    [ "zoom" ],
                    7,
                    [ "literal", [ 0, 0 ] ],
                    16,
                    [ "literal", [ -1, -1 ] ]
                ],
                "line-translate-anchor": "viewport",
                "line-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    8,
                    0,
                    8.5,
                    1
                ]
            }
        },
        {
            "id": "water-shadow",
            "type": "fill",
            "metadata": { "mapbox:group": "Land & water, water" },
            "source": "composite",
            "source-layer": "water",
            "minzoom": 7,
            "layout": { },
            "paint": {
                "fill-color": "hsl(219, 100%, 79%)",
                "fill-translate": [
                    "interpolate",
                    [ "exponential", 1.2 ],
                    [ "zoom" ],
                    7,
                    [ "literal", [ 0, 0 ] ],
                    16,
                    [ "literal", [ -1, -1 ] ]
                ],
                "fill-translate-anchor": "viewport"
            }
        },
        {
            "id": "waterway",
            "type": "line",
            "metadata": { "mapbox:group": "Land & water, water" },
            "source": "composite",
            "source-layer": "waterway",
            "minzoom": 8,
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 11, "round" ],
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(200, 100%, 80%)",
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.3 ],
                    [ "zoom" ],
                    9,
                    [ "match", [ "get", "class" ], [ "canal", "river" ], 0.1, 0 ],
                    20,
                    [ "match", [ "get", "class" ], [ "canal", "river" ], 8, 3 ]
                ],
                "line-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    8,
                    0,
                    8.5,
                    1
                ]
            }
        },
        {
            "id": "water",
            "type": "fill",
            "metadata": { "mapbox:group": "Land & water, water" },
            "source": "composite",
            "source-layer": "water",
            "layout": { },
            "paint": {
                "fill-color": "hsl(200, 100%, 80%)" },
            "fill-emissive-strength": 0.1
        },
        {
            "id": "water-depth",
            "type": "fill",
            "metadata": { "mapbox:group": "Land & water, water" },
            "source": "composite",
            "source-layer": "depth",
            "maxzoom": 8,
            "layout": { },
            "paint": {
                "fill-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    6,
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "get", "min_depth" ],
                        0,
                        "hsla(200, 100%, 80%, 0.35)",
                        200,
                        "hsla(200, 100%, 72%, 0.35)",
                        7000,
                        "hsla(200, 100%, 64%, 0.35)"
                    ],
                    8,
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "get", "min_depth" ],
                        0,
                        "hsla(200, 100%, 80%, 0)",
                        200,
                        "hsla(200, 100%, 72%, 0)",
                        7000,
                        "hsla(200, 100%, 60%, 0)"
                    ]
                ]
            }
        },
        {
            "id": "land-structure-polygon",
            "type": "fill",
            "metadata": { "mapbox:group": "Land & water, built" },
            "source": "composite",
            "source-layer": "structure",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "class" ], "land" ],
                [ "==", [ "geometry-type" ], "Polygon" ]
            ],
            "layout": { },
            "paint": { "fill-color": "hsl(12, 20%, 95%)" }
        },
        {
            "id": "land-structure-line",
            "type": "line",
            "metadata": { "mapbox:group": "Land & water, built" },
            "source": "composite",
            "source-layer": "structure",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "class" ], "land" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { "line-cap": "square" },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.99 ],
                    [ "zoom" ],
                    14,
                    0.75,
                    20,
                    40
                ],
                "line-color": "hsl(12, 20%, 95%)"
            }
        },
        {
            "id": "aeroway-polygon",
            "type": "fill",
            "metadata": { "mapbox:group": "Transit, built" },
            "source": "composite",
            "source-layer": "aeroway",
            "minzoom": 11,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "type" ],
                    [ "runway", "taxiway", "helipad" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "Polygon" ]
            ],
            "paint": {
                "fill-color": "hsl(225, 52%, 87%)",
                "fill-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    10,
                    0,
                    11,
                    1
                ]
            }
        },
        {
            "id": "aeroway-line",
            "type": "line",
            "metadata": { "mapbox:group": "Transit, built" },
            "source": "composite",
            "source-layer": "aeroway",
            "minzoom": 9,
            "filter": [ "==", [ "geometry-type" ], "LineString" ],
            "paint": {
                "line-color": "hsl(225, 52%, 87%)",
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    9,
                    [ "match", [ "get", "type" ], "runway", 1, 0.5 ],
                    18,
                    [ "match", [ "get", "type" ], "runway", 80, 20 ]
                ],
                "line-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    10,
                    0,
                    11,
                    1
                ]
            }
        },
        {
            "id": "building-underground",
            "type": "fill",
            "metadata": { "mapbox:group": "Buildings, built" },
            "source": "composite",
            "source-layer": "building",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "underground" ], "true" ],
                [ "==", [ "geometry-type" ], "Polygon" ]
            ],
            "layout": { },
            "paint": {
                "fill-color": "hsl(240, 60%, 92%)",
                "fill-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    0,
                    16,
                    0.5
                ]
            }
        },
        {
            "id": "tunnel-minor-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels-case" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "track" ],
                    true,
                    "service",
                    [ "step", [ "zoom" ], false, 14, true ],
                    false
                ],
                [ "match", [ "get", "type" ], [ "piste" ], false, true ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.9,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.8,
                    22,
                    2
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    18,
                    10,
                    22,
                    100
                ],
                "line-dasharray": [ 3, 3 ]
            }
        },
        {
            "id": "tunnel-street-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels-case" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "street", "street_limited" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.9,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.8,
                    22,
                    2
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.5,
                    18,
                    20,
                    22,
                    200
                ],
                "line-opacity": [ "step", [ "zoom" ], 0, 14, 1 ],
                "line-dasharray": [ 3, 3 ]
            }
        },
        {
            "id": "tunnel-minor-link-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels-case" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "primary_link", "secondary_link", "tertiary_link" ],
                    true,
                    false
                ],
                [ "==", [ "get", "structure" ], "tunnel" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ]
            },
            "paint": {
                "line-emissive-strength": 0.9,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.8,
                    22,
                    2
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.4,
                    18,
                    18,
                    22,
                    180
                ],
                "line-opacity": [ "step", [ "zoom" ], 0, 11, 1 ],
                "line-dasharray": [ 3, 3 ]
            }
        },
        {
            "id": "tunnel-secondary-tertiary-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels-case" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "secondary", "tertiary" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.9,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    22,
                    2
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0,
                    18,
                    26,
                    22,
                    260
                ],
                "line-dasharray": [ 3, 3 ]
            }
        },
        {
            "id": "tunnel-primary-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels-case" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [ "==", [ "get", "class" ], "primary" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.9,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    22,
                    2
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    28,
                    22,
                    280
                ],
                "line-dasharray": [ 3, 3 ]
            }
        },
        {
            "id": "tunnel-major-link-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels-case" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "motorway_link", "trunk_link" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.9,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.8,
                    22,
                    2
                ],
                "line-color": "hsl(220, 20%, 65%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.8,
                    18,
                    20,
                    22,
                    200
                ],
                "line-dasharray": [ 3, 3 ]
            }
        },
        {
            "id": "tunnel-motorway-trunk-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels-case" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [ "match", [ "get", "class" ], [ "motorway", "trunk" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { },
            "paint": {
                "line-emissive-strength": 0.9,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    22,
                    2
                ],
                "line-color": "hsl(220, 20%, 65%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    30,
                    22,
                    300
                ],
                "line-dasharray": [ 3, 3 ]
            }
        },
        {
            "id": "tunnel-path-trail",
            "type": "line",
            "metadata": { "mapbox:group": "Walking, cycling, etc., tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [ "==", [ "get", "class" ], "path" ],
                [
                    "match",
                    [ "get", "type" ],
                    [ "hiking", "mountain_bike", "trail" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { 
                "line-cap":  [ "step", [ "zoom" ], "butt", 16, "round" ]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ],
                "line-color": "hsla(0, 0%, 94%, 0.5)",
                "line-dasharray": [ 10, 0 ]
            }
        },
        {
            "id": "tunnel-path",
            "type": "line",
            "metadata": { "mapbox:group": "Walking, cycling, etc., tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [ "==", [ "get", "class" ], "path" ],
                [ "!=", [ "get", "type" ], "steps" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { 
                "line-cap":  [ "step", [ "zoom" ], "butt", 16, "round" ]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ],
                "line-color": "hsla(0, 0%, 94%, 0.5)"
            }
        },
        {
            "id": "tunnel-steps",
            "type": "line",
            "metadata": { "mapbox:group": "Walking, cycling, etc., tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [ "==", [ "get", "type" ], "steps" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ],
                "line-color": "hsla(0, 20%, 97%, 0.5)",
                "line-dasharray": [
                    "step",
                    [ "zoom" ],
                    [ "literal", [ 1, 0 ] ],
                    17,
                    [ "literal", [ 0.2, 0.2 ] ],
                    19,
                    [ "literal", [ 0.1, 0.1 ] ]
                ]
            }
        },
        {
            "id": "tunnel-pedestrian",
            "type": "line",
            "metadata": { "mapbox:group": "Walking, cycling, etc., tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [ "==", [ "get", "class" ], "pedestrian" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { 
            "line-cap":  [ "step", [ "zoom" ], "butt", 16, "round" ]
            },
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "hsla(0, 20%, 97%, 0.5)"
            }
        },
        {
            "id": "tunnel-construction",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [ "==", [ "get", "class" ], "construction" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    2,
                    18,
                    20,
                    22,
                    200
                ],
                "line-color": "hsl(223, 25%, 86%)",
                "line-dasharray": [ 0.2, 0.1 ]
            }
        },
        {
            "id": "tunnel-minor",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "track" ],
                    true,
                    "service",
                    [ "step", [ "zoom" ], false, 14, true ],
                    false
                ],
                [ "match", [ "get", "type" ], [ "piste" ], false, true ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    18,
                    10,
                    22,
                    100
                ],
                "line-color": "hsl(223, 25%, 86%)"
            }
        },
        {
            "id": "tunnel-minor-link",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "primary_link", "secondary_link", "tertiary_link" ],
                    true,
                    false
                ],
                [ "==", [ "get", "structure" ], "tunnel" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 13, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 13, "round" ]
            },
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.4,
                    18,
                    18,
                    22,
                    180
                ],
                "line-color": "hsl(223, 25%, 86%)"
            }
        },
        {
            "id": "tunnel-major-link",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "motorway_link", "trunk_link" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.8,
                    18,
                    20,
                    22,
                    200
                ],
                "line-color": [
                    "match",
                    [ "get", "class" ],
                    [ "motorway_link" ],
                    "hsl(214, 23%, 86%)",
                    "hsl(235, 20%, 86%)"
                ]
            }
        },
        {
            "id": "tunnel-street",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "street", "street_limited" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { },
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.5,
                    18,
                    20,
                    22,
                    200
                ],
                "line-color": "hsl(223, 25%, 86%)",
                "line-opacity": [ "step", [ "zoom" ], 0, 14, 1 ]
            }
        },
        {
            "id": "tunnel-street-low",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "maxzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "street", "street_limited" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ]
            },
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.5,
                    18,
                    20,
                    22,
                    200
                ],
                "line-color": "hsl(223, 25%, 86%)"
            }
        },
        {
            "id": "tunnel-secondary-tertiary",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "secondary", "tertiary" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0,
                    18,
                    26,
                    22,
                    260
                ],
                "line-color": "hsl(223, 25%, 86%)"
            }
        },
        {
            "id": "tunnel-primary",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [ "==", [ "get", "class" ], "primary" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    28,
                    22,
                    280
                ],
                "line-color": "hsl(223, 25%, 86%)"
            }
        },
        {
            "id": "tunnel-motorway-trunk",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [ "match", [ "get", "class" ], [ "motorway", "trunk" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    30,
                    22,
                    300
                ],
                "line-color": [
                    "match",
                    [ "get", "class" ],
                    "motorway",
                    "hsl(214, 23%, 86%)",
                    "hsl(235, 20%, 86%)"
                ]
            }
        },
        {
            "id": "tunnel-oneway-arrow-blue",
            "type": "symbol",
            "metadata": { "mapbox:group": "Road network, tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [ "==", [ "get", "oneway" ], "true" ],
                [
                    "step",
                    [ "zoom" ],
                    [
                        "match",
                        [ "get", "class" ],
                        [
                            "primary",
                            "secondary",
                            "street",
                            "street_limited",
                            "tertiary"
                        ],
                        true,
                        false
                    ],
                    16,
                    [
                        "match",
                        [ "get", "class" ],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service",
                            "track"
                        ],
                        true,
                        false
                    ]
                ]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step",
                    [ "zoom" ],
                    "oneway-small",
                    18,
                    "oneway-large"
                ],
                "symbol-spacing": 200,
                "icon-rotation-alignment": "map",
                "icon-allow-overlap": true,
                "icon-ignore-placement": true
            },
            "paint": {
                "icon-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.7,
                    0.5,
                    1.0
                ]
            }
        },
        {
            "id": "tunnel-oneway-arrow-white",
            "type": "symbol",
            "metadata": { "mapbox:group": "Road network, tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "motorway", "motorway_link", "trunk", "trunk_link" ],
                    true,
                    false
                ],
                [ "==", [ "get", "oneway" ], "true" ]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step",
                    [ "zoom" ],
                    "oneway-white-small",
                    18,
                    "oneway-white-large"
                ],
                "symbol-spacing": 200,
                "icon-rotation-alignment": "map",
                "icon-allow-overlap": true,
                "icon-ignore-placement": true
            },
            "paint": {
                "icon-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.7,
                    0.5,
                    1.0
                ]
            }
        },
        {
            "id": "tunnel-path-cycleway-piste",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, tunnels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "tunnel" ],
                [ "match", [ "get", "class" ], [ "path", "track" ], true, false ],
                [
                    "match",
                    [ "get", "type" ],
                    "cycleway",
                    [ "step", [ "zoom" ], false, 15, true ],
                    "piste",
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    12,
                    [ "match", [ "get", "type" ], [ "piste" ], 0.5, 0 ],
                    18,
                    [ "match", [ "get", "type" ], [ "piste" ], 4, 2 ],
                    22,
                    [ "match", [ "get", "type" ], [ "piste" ], 40, 20 ]
                ],
                "line-color": "hsl(125, 50%, 60%)",
                "line-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    [ "match", [ "get", "type" ], [ "piste" ], 1, 0 ],
                    16,
                    0.5
                ],
                "line-translate": [ 0, 0 ],
                "line-offset": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    [ "match", [ "get", "type" ], [ "piste" ], 0, -2 ],
                    22,
                    [ "match", [ "get", "type" ], [ "piste" ], 0, -20 ]
                ],
                "line-dasharray": [
                    "step",
                    [ "zoom" ],
                    [ "literal", [ 1 ] ],
                    16,
                    [ "literal", [ 1, 1 ] ]
                ]
            }
        },
        {
            "id": "ferry",
            "type": "line",
            "metadata": { "mapbox:group": "Transit, ferries" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 8,
            "filter": [ "==", [ "get", "type" ], "ferry" ],
            "paint": {
                "line-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    13,
                    0.3,
                    14,
                    0.5
                ],
                "line-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    "hsl(209, 93%, 73%)",
                    17,
                    "hsl(234, 93%, 73%)"
                ],
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.5,
                    20,
                    1
                ],
                "line-dasharray": [
                    "step",
                    [ "zoom" ],
                    [ "literal", [ 1, 0 ] ],
                    13,
                    [ "literal", [ 12, 4 ] ]
                ]
            }
        },
        {
            "id": "ferry-auto",
            "type": "line",
            "metadata": { "mapbox:group": "Transit, ferries" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 8,
            "filter": [ "==", [ "get", "type" ], "ferry_auto" ],
            "paint": {
                "line-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    13,
                    0.3,
                    14,
                    0.5
                ],
                "line-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    "hsl(209, 93%, 73%)",
                    17,
                    "hsl(234, 93%, 73%)"
                ],
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.5,
                    20,
                    1
                ]
            }
        },
        {
            "id": "road-pedestrian-polygon-pattern",
            "type": "fill",
            "metadata": { "mapbox:group": "Walking, cycling, etc., surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "path", "pedestrian" ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "case", [ "has", "layer" ], [ ">=", [ "get", "layer" ], 0 ], true ],
                [ "==", [ "geometry-type" ], "Polygon" ]
            ],
            "layout": { "visibility": "none" },
            "paint": {
                "fill-pattern": "pedestrian-polygon",
                "fill-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    16,
                    0,
                    17,
                    0.2
                ]
            }
        },
        {
            "id": "road-path-bg",
            "type": "line",
            "metadata": { "mapbox:group": "Walking, cycling, etc., surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "class" ], "path" ],
                [
                    "step",
                    [ "zoom" ],
                    [
                        "!",
                        [
                            "match",
                            [ "get", "type" ],
                            [ "steps", "sidewalk", "crossing" ],
                            true,
                            false
                        ]
                    ],
                    16,
                    [ "!=", [ "get", "type" ], "steps" ]
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { 
                "line-cap":  [ "step", [ "zoom" ], "butt", 16, "round"],
                "line-join": [ "step", [ "zoom" ], "miter", 16, "round" ]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.5,
                    18,
                    1,
                    22,
                    2
                ],
                "line-color": "hsl(0, 10%, 80%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ]
            }
        },
        {
            "id": "road-steps-bg",
            "type": "line",
            "metadata": { "mapbox:group": "Walking, cycling, etc., surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "type" ], "steps" ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ],
                "line-color": "hsl(0, 10%, 80%)"
            }
        },
        {
            "id": "road-pedestrian-case",
            "type": "line",
            "metadata": { "mapbox:group": "Walking, cycling, etc., surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "class" ], "pedestrian" ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "case", [ "has", "layer" ], [ ">=", [ "get", "layer" ], 0 ], true ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { 
                "line-cap":  [ "step", [ "zoom" ], "butt", 16, "round"],
                "line-join": [ "step", [ "zoom" ], "miter", 16, "round" ]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.5,
                    18,
                    1,
                    22,
                    2
                ],
                "line-color": "hsl(0, 10%, 80%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ]
            }
        },
        {
            "id": "road-path-trail",
            "type": "line",
            "metadata": { "mapbox:group": "Walking, cycling, etc., surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [ "==", [ "get", "class" ], "path" ],
                [
                    "match",
                    [ "get", "type" ],
                    [ "hiking", "mountain_bike", "trail" ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { 
                "line-cap":  [ "step", [ "zoom" ], "butt", 16, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 16, "round" ]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ],
                "line-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    "hsl(295, 10%, 97%)",
                    16,
                    "hsl(295, 10%, 93%)"
                ],
                "line-dasharray": [ 10, 0 ]
            }
        },
        {
            "id": "road-path",
            "type": "line",
            "metadata": { "mapbox:group": "Walking, cycling, etc., surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [ "==", [ "get", "class" ], "path" ],
                [
                    "step",
                    [ "zoom" ],
                    [
                        "!",
                        [
                            "match",
                            [ "get", "type" ],
                            [ "steps", "sidewalk", "crossing" ],
                            true,
                            false
                        ]
                    ],
                    16,
                    [ "!=", [ "get", "type" ], "steps" ]
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { 
                "line-cap":  [ "step", [ "zoom" ], "butt", 16, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 16, "round" ]
            },
            "paint": {
                "line-emissive-strength": 0.3,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ],
                "line-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    "hsl(295, 10%, 97%)",
                    16,
                    "hsl(295, 10%, 93%)"
                ]
            }
        },
        {
            "id": "road-steps",
            "type": "line",
            "metadata": { "mapbox:group": "Walking, cycling, etc., surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "type" ], "steps" ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ],
                "line-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    "hsl(295, 10%, 97%)",
                    16,
                    "hsl(295, 10%, 93%)"
                ],
                "line-dasharray": [
                    "step",
                    [ "zoom" ],
                    [ "literal", [ 1, 0 ] ],
                    17,
                    [ "literal", [ 0.2, 0.2 ] ],
                    19,
                    [ "literal", [ 0.1, 0.1 ] ]
                ]
            }
        },
        {
            "id": "road-pedestrian",
            "type": "line",
            "metadata": { "mapbox:group": "Walking, cycling, etc., surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [ "==", [ "get", "class" ], "pedestrian" ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "case", [ "has", "layer" ], [ ">=", [ "get", "layer" ], 0 ], true ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { 
                "line-cap":  [ "step", [ "zoom" ], "butt", 16, "round"],
                "line-join": [ "step", [ "zoom" ], "miter", 16, "round" ]
            },
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ],
                "line-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    "hsl(295, 10%, 97%)",
                    16,
                    "hsl(295, 10%, 93%)"
                ]
            }
        },
        {
            "id": "golf-hole-line",
            "type": "line",
            "metadata": { "mapbox:group": "Walking, cycling, etc., surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [ "==", [ "get", "class" ], "golf" ],
            "paint": { "line-color": "hsl(110, 29%, 70%)" }
        },
        {
            "id": "road-polygon",
            "type": "fill",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [
                        "primary",
                        "secondary",
                        "tertiary",
                        "primary_link",
                        "secondary_link",
                        "tertiary_link",
                        "trunk",
                        "trunk_link",
                        "street",
                        "street_limited",
                        "track",
                        "service"
                    ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "Polygon" ]
            ],
            "layout": { "visibility": "none" },
            "paint": { "fill-color": "hsl(224, 25%, 80%)", "fill-outline-color": "hsl(221, 20%, 70%)" }
        },
        {
            "id": "gate-fence-hedge-shade",
            "type": "line",
            "metadata": {
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "structure",
            "minzoom": 17,
            "filter": [
                "match",
                [ "get", "class" ],
                [ "gate", "fence", "hedge" ],
                true,
                false
            ],
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    16,
                    1,
                    20,
                    3
                ],
                "line-opacity": [ "match", [ "get", "class" ], "gate", 0.5, 1 ],
                "line-translate": [ 1.5, 1.5 ],
                "line-color": [
                    "match",
                    [ "get", "class" ],
                    "hedge",
                    "hsl(110, 35%, 70%)",
                    "hsl(221, 0%, 70%)"
                ]
            }
        },
        {
            "id": "gate-fence-hedge",
            "type": "line",
            "metadata": {
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "structure",
            "minzoom": 16,
            "filter": [
                "match",
                [ "get", "class" ],
                [ "gate", "fence", "hedge" ],
                true,
                false
            ],
            "layout": { },
            "paint": {
                "line-color": [
                    "match",
                    [ "get", "class" ],
                    "hedge",
                    "hsl(110, 35%, 70%)",
                    "hsl(221, 0%, 85%)"
                ],
                "line-width": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    16,
                    1,
                    20,
                    3
                ],
                "line-opacity": [ "match", [ "get", "class" ], "gate", 0.5, 1 ]
            }
        },
        {
            "id": "turning-feature-outline",
            "type": "circle",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "turning_circle", "turning_loop" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "Point" ]
            ],
            "paint": {
                "circle-radius": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    15,
                    4.5,
                    16,
                    8,
                    18,
                    20,
                    22,
                    200
                ],
                "circle-color": "hsl(224, 25%, 80%)",
                "circle-stroke-width": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    0.8,
                    16,
                    1.2,
                    18,
                    2
                ],
                "circle-stroke-color": "hsl(221, 20%, 70%)",
                "circle-pitch-alignment": "map"
            }
        },
        {
            "id": "road-minor-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "track" ],
                    true,
                    "service",
                    [ "step", [ "zoom" ], false, 14, true ],
                    false
                ],
                [ "match", [ "get", "type" ], [ "piste" ], false, true ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.8,
                    22,
                    2
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    18,
                    10,
                    22,
                    100
                ]
            }
        },
        {
            "id": "road-street-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "street", "street_limited" ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.8,
                    22,
                    2
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.5,
                    18,
                    20,
                    22,
                    200
                ],
                "line-opacity": [ "step", [ "zoom" ], 0, 14, 1 ]
            }
        },
        {
            "id": "road-minor-link-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "primary_link", "secondary_link", "tertiary_link" ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.8,
                    22,
                    2
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.4,
                    18,
                    18,
                    22,
                    180
                ],
                "line-opacity": [ "step", [ "zoom" ], 0, 11, 1 ]
            }
        },
        {
            "id": "road-secondary-tertiary-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "secondary", "tertiary" ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.8,
                    22,
                    2
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0,
                    18,
                    26,
                    22,
                    260
                ]
            }
        },
        {
            "id": "road-primary-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "class" ], "primary" ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    22,
                    2
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    28,
                    22,
                    280
                ]
            }
        },
        {
            "id": "road-major-link-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "motorway_link", "trunk_link" ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.8,
                    22,
                    2
                ],
                "line-color": "hsl(220, 20%, 65%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.8,
                    18,
                    20,
                    22,
                    200
                ],
                "line-opacity": [ "step", [ "zoom" ], 0, 11, 1 ]
            }
        },
        {
            "id": "road-motorway-trunk-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "step",
                    [ "zoom" ],
                    [
                        "match",
                        [ "get", "class" ],
                        [ "motorway", "trunk" ],
                        true,
                        false
                    ],
                    5,
                    [
                        "all",
                        [
                            "match",
                            [ "get", "class" ],
                            [ "motorway", "trunk" ],
                            true,
                            false
                        ],
                        [
                            "match",
                            [ "get", "structure" ],
                            [ "none", "ford" ],
                            true,
                            false
                        ]
                    ]
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    22,
                    2
                ],
                "line-color": "hsl(220, 20%, 65%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    30,
                    22,
                    300
                ],
                "line-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    3,
                    0,
                    3.5,
                    1
                ]
            }
        },
        {
            "id": "turning-feature",
            "type": "circle",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "turning_circle", "turning_loop" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "Point" ]
            ],
            "paint": {
                "circle-emissive-strength": 0.3,
                "circle-radius": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    15,
                    4.5,
                    16,
                    8,
                    18,
                    20,
                    22,
                    200
                ],
                "circle-color": "hsl(224, 25%, 80%)",
                "circle-pitch-alignment": "map"
            }
        },
        {
            "id": "road-construction",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "class" ], "construction" ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    2,
                    18,
                    20,
                    22,
                    200
                ],
                "line-color": "hsl(224, 25%, 80%)",
                "line-dasharray": [ 0.2, 0.1 ]
            }
        },
        {
            "id": "road-minor",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "track" ],
                    true,
                    "service",
                    [ "step", [ "zoom" ], false, 14, true ],
                    false
                ],
                [ "match", [ "get", "type" ], [ "piste" ], false, true ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ]
            },
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    18,
                    10,
                    22,
                    100
                ],
                "line-color": "hsl(224, 25%, 80%)"
            }
        },
        {
            "id": "road-minor-link",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "primary_link", "secondary_link", "tertiary_link" ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 13, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 13, "round" ]
            },
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.4,
                    18,
                    18,
                    22,
                    180
                ],
                "line-color": "hsl(224, 25%, 80%)"
            }
        },
        {
            "id": "road-major-link",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "motorway_link", "trunk_link" ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 13, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 13, "round" ]
            },
            "paint": {
                "line-emissive-strength": 0.6,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.8,
                    18,
                    20,
                    22,
                    200
                ],
                "line-color": [
                    "match",
                    [ "get", "class" ],
                    [ "motorway_link" ],
                    "hsl(214, 23%, 70%)",
                    "hsl(235, 20%, 70%)"
                ]
            }
        },
        {
            "id": "road-street",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "street", "street_limited" ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ]
            },
            "paint": {
                "line-emissive-strength": 0.3,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.5,
                    18,
                    20,
                    22,
                    200
                ],
                "line-color": "hsl(224, 25%, 80%)",
                "line-opacity": [ "step", [ "zoom" ], 0, 14, 1 ]
            }
        },
        {
            "id": "road-street-low",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "street", "street_limited" ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ]
            },
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.5,
                    18,
                    20,
                    22,
                    200
                ],
                "line-color": "hsl(224, 25%, 80%)"
            }
        },
        {
            "id": "road-secondary-tertiary",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 8,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "secondary", "tertiary" ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ]
            },
            "paint": {
                "line-emissive-strength": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    10,
                    0.2,
                    15,
                    0.4
                ],
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0,
                    18,
                    26,
                    22,
                    260
                ],
                "line-color": "hsl(224, 25%, 80%)"
            }
        },
        {
            "id": "road-primary",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 6,
            "filter": [
                "all",
                [ "==", [ "get", "class" ], "primary" ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ]
            },
            "paint": {
                "line-emissive-strength": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    6,
                    0.1,
                    11,
                    0.5
                ],
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    28,
                    22,
                    280
                ],
                "line-color": "hsl(224, 25%, 80%)"
            }
        },
        {
            "id": "road-motorway-trunk",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 3,
            "filter": [
                "all",
                [
                    "step",
                    [ "zoom" ],
                    [
                        "match",
                        [ "get", "class" ],
                        [ "motorway", "trunk" ],
                        true,
                        false
                    ],
                    5,
                    [
                        "all",
                        [
                            "match",
                            [ "get", "class" ],
                            [ "motorway", "trunk" ],
                            true,
                            false
                        ],
                        [
                            "match",
                            [ "get", "structure" ],
                            [ "none", "ford" ],
                            true,
                            false
                        ]
                    ]
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 13, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 13, "round" ]
            },
            "paint": {
                "line-emissive-strength": 0.8,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    30,
                    22,
                    300
                ],
                "line-color": [
                    "match",
                    [ "get", "class" ],
                    "motorway",
                    "hsl(214, 23%, 70%)",
                    "hsl(235, 20%, 70%)"
                ],
                "line-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    3,
                    0,
                    3.5,
                    1
                ]
            }
        },
        {
            "id": "road-path-cycleway-piste",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [ "match", [ "get", "class" ], [ "path", "track" ], true, false ],
                [
                    "match",
                    [ "get", "type" ],
                    "cycleway",
                    [ "step", [ "zoom" ], false, 15, true ],
                    "piste",
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.6,
                "line-width": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    12,
                    [ "match", [ "get", "type" ], [ "piste" ], 0.5, 0 ],
                    18,
                    [ "match", [ "get", "type" ], [ "piste" ], 4, 2 ],
                    22,
                    [ "match", [ "get", "type" ], [ "piste" ], 40, 20 ]
                ],
                "line-color": "hsl(125, 50%, 60%)",
                "line-translate": [ 0, 0 ],
                "line-offset": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    [ "match", [ "get", "type" ], [ "piste" ], 0, -2 ],
                    22,
                    [ "match", [ "get", "type" ], [ "piste" ], 0, -20 ]
                ],
                "line-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    [ "match", [ "get", "type" ], [ "piste" ], 1, 0 ],
                    16,
                    1
                ],
                "line-dasharray": [
                    "step",
                    [ "zoom" ],
                    [ "literal", [ 1 ] ],
                    16,
                    [ "literal", [ 1, 1 ] ]
                ]
            }
        },
        {
            "id": "road-rail",
            "type": "line",
            "metadata": { "mapbox:group": "Transit, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "major_rail", "minor_rail" ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ]
            ],
            "layout": { },
            "paint": {
                "line-emissive-strength": 0.9,
                "line-gap-width": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    0,
                    16,
                    2
                ],
                "line-color": "hsl(0, 0%, 65%)",
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.5,
                    20,
                    1
                ]
            }
        },
        {
            "id": "road-rail-tracks",
            "type": "line",
            "metadata": { "mapbox:group": "Transit, surface" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "major_rail", "minor_rail" ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ]
            ],
            "paint": {
                "line-emissive-strength": 0.9,
                "line-color": "hsl(0, 0%, 65%)",
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    4,
                    20,
                    8
                ],
                "line-dasharray": [
                    "step",
                    [ "zoom" ],
                    [ "literal", [ 0.1, 15 ] ],
                    16,
                    [ "literal", [ 0.1, 1 ] ]
                ],
                "line-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    13.75,
                    0,
                    14,
                    1
                ]
            }
        },
        {
            "id": "level-crossing",
            "type": "symbol",
            "metadata": { "mapbox:group": "Road network, surface-icons" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [ "==", [ "get", "class" ], "level_crossing" ],
            "layout": {
                "icon-image": "level-crossing",
                "icon-rotation-alignment": "map",
                "icon-allow-overlap": true,
                "icon-ignore-placement": true
            },
            "paint": {
                "icon-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.8,
                    0.5,
                    1.0
                ]
            }
        },
        {
            "id": "road-oneway-arrow-blue",
            "type": "symbol",
            "metadata": { "mapbox:group": "Road network, surface-icons" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                [ "==", [ "get", "oneway" ], "true" ],
                [
                    "step",
                    [ "zoom" ],
                    [
                        "match",
                        [ "get", "class" ],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited"
                        ],
                        true,
                        false
                    ],
                    16,
                    [
                        "match",
                        [ "get", "class" ],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service",
                            "track"
                        ],
                        true,
                        false
                    ]
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step",
                    [ "zoom" ],
                    "oneway-small",
                    18,
                    "oneway-large"
                ],
                "symbol-spacing": 200,
                "icon-rotation-alignment": "map",
                "icon-allow-overlap": true,
                "icon-ignore-placement": true
            },
            "paint": {
                "icon-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.7,
                    0.5,
                    1.0
                ]
            }
        },
        {
            "id": "road-oneway-arrow-white",
            "type": "symbol",
            "metadata": { "mapbox:group": "Road network, surface-icons" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                [ "==", [ "get", "oneway" ], "true" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "motorway", "trunk", "motorway_link", "trunk_link" ],
                    true,
                    false
                ],
                [ "match", [ "get", "structure" ], [ "none", "ford" ], true, false ]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step",
                    [ "zoom" ],
                    "oneway-white-small",
                    18,
                    "oneway-white-large"
                ],
                "symbol-spacing": 200,
                "icon-rotation-alignment": "map",
                "icon-allow-overlap": true,
                "icon-ignore-placement": true
            },
            "paint": {
                "icon-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.7,
                    0.5,
                    1.0
                ]
            }
        },
        {
            "id": "crosswalks",
            "type": "symbol",
            "metadata": { "mapbox:group": "Road network, surface-icons" },
            "source": "composite",
            "source-layer": "structure",
            "minzoom": 17,
            "filter": [
                "all",
                [ "==", [ "get", "type" ], "crosswalk" ],
                [ "==", [ "geometry-type" ], "Point" ]
            ],
            "layout": {
                "icon-size": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    16,
                    0.1,
                    18,
                    0.2,
                    19,
                    0.5,
                    22,
                    1.5
                ],
                "icon-image": [
                    "step",
                    [ "zoom" ],
                    "crosswalk-small",
                    18,
                    "crosswalk-large"
                ],
                "icon-rotate": [ "get", "direction" ],
                "icon-rotation-alignment": "map",
                "icon-allow-overlap": true,
                "icon-ignore-placement": true
            },
            "paint": {
                "icon-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.55,
                    0.3,
                    1.0
                ]
            }
        },
        {
            "id": "bridge-path-bg",
            "type": "line",
            "metadata": {
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "==", [ "get", "class" ], "path" ],
                [
                    "step",
                    [ "zoom" ],
                    [
                        "!",
                        [
                            "match",
                            [ "get", "type" ],
                            [ "steps", "sidewalk", "crossing" ],
                            true,
                            false
                        ]
                    ],
                    16,
                    [ "!=", [ "get", "type" ], "steps" ]
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.5,
                    18,
                    1,
                    22,
                    2
                ],
                "line-color": "hsl(0, 11%, 85%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ]
            }
        },
        {
            "id": "bridge-steps-bg",
            "type": "line",
            "metadata": {
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "type" ], "steps" ],
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    15,
                    2,
                    17,
                    4.6,
                    18,
                    7
                ],
                "line-color": "hsl(0, 10%, 80%)"
            }
        },
        {
            "id": "bridge-pedestrian-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "==", [ "get", "class" ], "pedestrian" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.5,
                    18,
                    1,
                    22,
                    2
                ],
                "line-color": "hsl(0, 10%, 80%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ]
            }
        },
        {
            "id": "bridge-path-trail",
            "type": "line",
            "metadata": {
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "==", [ "get", "class" ], "path" ],
                [
                    "match",
                    [ "get", "type" ],
                    [ "hiking", "mountain_bike", "trail" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { 
                "line-cap":  [ "step", [ "zoom" ], "butt", 16, "round" ]
            },
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ],
                "line-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    "hsl(295, 10%, 97%)",
                    16,
                    "hsl(295, 10%, 93%)"
                ],
                "line-dasharray": [ 10, 0 ]
            }
        },
        {
            "id": "bridge-path",
            "type": "line",
            "metadata": {
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "==", [ "get", "class" ], "path" ],
                [ "!=", [ "get", "type" ], "steps" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { 
                "line-cap":  [ "step", [ "zoom" ], "butt", 16, "round" ]
            },
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ],
                "line-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    "hsl(295, 10%, 97%)",
                    16,
                    "hsl(295, 10%, 93%)"
                ]
            }
        },
        {
            "id": "bridge-steps",
            "type": "line",
            "metadata": {
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "type" ], "steps" ],
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { },
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ],
                "line-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    "hsl(295, 10%, 97%)",
                    16,
                    "hsl(295, 10%, 93%)"
                ],
                "line-dasharray": [
                    "step",
                    [ "zoom" ],
                    [ "literal", [ 1, 0 ] ],
                    17,
                    [ "literal", [ 0.2, 0.2 ] ],
                    19,
                    [ "literal", [ 0.1, 0.1 ] ]
                ]
            }
        },
        {
            "id": "bridge-pedestrian",
            "type": "line",
            "metadata": {
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "==", [ "get", "class" ], "pedestrian" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { 
            "line-cap":  [ "step", [ "zoom" ], "butt", 16, "round" ]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    8,
                    22,
                    100
                ],
                "line-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    "hsl(295, 10%, 97%)",
                    16,
                    "hsl(295, 10%, 93%)"
                ]
            }
        },
        {
            "id": "bridge-minor-shadow",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "track" ],
                    true,
                    "service",
                    [ "step", [ "zoom" ], false, 14, true ],
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    2,
                    22,
                    10
                ],
                "line-color": "hsl(221, 20%, 50%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    18,
                    10,
                    22,
                    100
                ],
                "line-blur": 10
            }
        },
        {
            "id": "bridge-minor-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "track" ],
                    true,
                    "service",
                    [ "step", [ "zoom" ], false, 14, true ],
                    false
                ],
                [ "match", [ "get", "type" ], [ "piste" ], false, true ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.8,
                    22,
                    2
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    18,
                    10,
                    22,
                    100
                ]
            }
        },
        {
            "id": "bridge-street-shadow",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "street", "street_limited" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    2,
                    22,
                    10
                ],
                "line-color": "hsl(221, 20%, 50%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.5,
                    18,
                    20,
                    22,
                    200
                ],
                "line-opacity": [ "step", [ "zoom" ], 0, 14, 1 ],
                "line-blur": 10
            }
        },
        {
            "id": "bridge-street-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "street", "street_limited" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.8,
                    22,
                    2
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.5,
                    18,
                    20,
                    22,
                    200
                ],
                "line-opacity": [ "step", [ "zoom" ], 0, 14, 1 ]
            }
        },
        {
            "id": "bridge-minor-link-shadow",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "primary_link", "secondary_link", "tertiary_link" ],
                    true,
                    false
                ],
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ] },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    2,
                    22,
                    10
                ],
                "line-color": "hsl(221, 20%, 50%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.4,
                    18,
                    18,
                    22,
                    180
                ],
                "line-opacity": [ "step", [ "zoom" ], 0, 11, 1 ],
                "line-blur": 10
            }
        },
        {
            "id": "bridge-minor-link-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "primary_link", "secondary_link", "tertiary_link" ],
                    true,
                    false
                ],
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ] },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.8,
                    22,
                    2
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.4,
                    18,
                    18,
                    22,
                    180
                ],
                "line-opacity": [ "step", [ "zoom" ], 0, 11, 1 ]
            }
        },
        {
            "id": "bridge-secondary-tertiary-shadow",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "secondary", "tertiary" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-color": "hsl(221, 20%, 50%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0,
                    18,
                    26,
                    22,
                    260
                ],
                "line-opacity": [ "step", [ "zoom" ], 0, 10, 1 ],
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    2,
                    22,
                    10
                ],
                "line-blur": 10
            }
        },
        {
            "id": "bridge-secondary-tertiary-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "secondary", "tertiary" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    22,
                    2
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0,
                    18,
                    26,
                    22,
                    260
                ],
                "line-opacity": [ "step", [ "zoom" ], 0, 10, 1 ]
            }
        },
        {
            "id": "bridge-primary-shadow",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "==", [ "get", "class" ], "primary" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-color": "hsl(221, 20%, 50%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    28,
                    22,
                    280
                ],
                "line-opacity": [ "step", [ "zoom" ], 0, 10, 1 ],
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    2,
                    22,
                    10
                ],
                "line-blur": 10
            }
        },
        {
            "id": "bridge-primary-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "==", [ "get", "class" ], "primary" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    22,
                    2
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    28,
                    22,
                    280
                ],
                "line-opacity": [ "step", [ "zoom" ], 0, 10, 1 ]
            }
        },
        {
            "id": "bridge-major-link-shadow",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "motorway_link", "trunk_link" ],
                    true,
                    false
                ],
                [ "<=", [ "get", "layer" ], 1 ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    2,
                    22,
                    10
                ],
                "line-color": "hsl(221, 20%, 50%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.8,
                    18,
                    20,
                    22,
                    200
                ],
                "line-blur": 10
            }
        },
        {
            "id": "bridge-major-link-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "motorway_link", "trunk_link" ],
                    true,
                    false
                ],
                [ "<=", [ "get", "layer" ], 1 ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.8,
                    22,
                    2
                ],
                "line-color": "hsl(220, 20%, 65%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.8,
                    18,
                    20,
                    22,
                    200
                ]
            }
        },
        {
            "id": "bridge-motorway-trunk-shadow",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "match", [ "get", "class" ], [ "motorway", "trunk" ], true, false ],
                [ "<=", [ "get", "layer" ], 1 ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-color": "hsl(221, 20%, 50%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    30,
                    22,
                    300
                ],
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    2,
                    22,
                    10
                ],
                "line-blur": 10
            }
        },
        {
            "id": "bridge-motorway-trunk-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "match", [ "get", "class" ], [ "motorway", "trunk" ], true, false ],
                [ "<=", [ "get", "layer" ], 1 ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    22,
                    2
                ],
                "line-color": "hsl(220, 20%, 65%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    30,
                    22,
                    300
                ]
            }
        },
        {
            "id": "bridge-construction",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "==", [ "get", "class" ], "construction" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    2,
                    18,
                    20,
                    22,
                    200
                ],
                "line-color": "hsl(221, 20%, 70%)",
                "line-dasharray": [ 0.2, 0.1 ]
            }
        },
        {
            "id": "bridge-minor",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "track" ],
                    true,
                    "service",
                    [ "step", [ "zoom" ], false, 14, true ],
                    false
                ],
                [ "match", [ "get", "type" ], [ "piste" ], false, true ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ] },
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    18,
                    10,
                    22,
                    100
                ],
                "line-color": "hsl(224, 25%, 80%)"
            }
        },
        {
            "id": "bridge-minor-link",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "primary_link", "secondary_link", "tertiary_link" ],
                    true,
                    false
                ],
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { "line-cap": "round" },
            "paint": {
                "line-emissive-strength": 0.2,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.4,
                    18,
                    18,
                    22,
                    180
                ],
                "line-color": "hsl(224, 25%, 80%)"
            }
        },
        {
            "id": "bridge-major-link",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "motorway_link", "trunk_link" ],
                    true,
                    false
                ],
                [ "<=", [ "get", "layer" ], 1 ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { "line-cap": "round" },
            "paint": {
                "line-emissive-strength": 0.6,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.8,
                    18,
                    20,
                    22,
                    200
                ],
                "line-color": [
                    "match",
                    [ "get", "class" ],
                    [ "motorway_link" ],
                    "hsl(214, 23%, 70%)",
                    "hsl(235, 20%, 70%)"
                ]
            }
        },
        {
            "id": "bridge-street",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "street", "street_limited" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ] },
            "paint": {
                "line-emissive-strength": 0.3,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.5,
                    18,
                    20,
                    22,
                    200
                ],
                "line-color": "hsl(224, 25%, 80%)",
                "line-opacity": [ "step", [ "zoom" ], 0, 14, 1 ]
            }
        },
        {
            "id": "bridge-street-low",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "maxzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "street", "street_limited" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ],
                "line-join": [ "step", [ "zoom" ], "miter", 14, "round" ]
            },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.5,
                    18,
                    20,
                    22,
                    200
                ],
                "line-color": "hsl(224, 25%, 80%)"
            }
        },
        {
            "id": "bridge-secondary-tertiary",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "secondary", "tertiary" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ] },
            "paint": {
                "line-emissive-strength": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    10,
                    0.2,
                    15,
                    0.4
                ],
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0,
                    18,
                    26,
                    22,
                    260
                ],
                "line-color": "hsl(224, 25%, 80%)"
            }
        },
        {
            "id": "bridge-primary",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "==", [ "get", "class" ], "primary" ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ] },
            "paint": {
                "line-emissive-strength": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    7,
                    0.2,
                    11,
                    0.6
                ],
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    28,
                    22,
                    280
                ],
                "line-color": "hsl(224, 25%, 80%)"
            }
        },
        {
            "id": "bridge-motorway-trunk",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "match", [ "get", "class" ], [ "motorway", "trunk" ], true, false ],
                [ "<=", [ "get", "layer" ], 1 ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { "line-cap": "round" },
            "paint": {
                "line-emissive-strength": 0.6,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    30,
                    22,
                    300
                ],
                "line-color": [
                    "match",
                    [ "get", "class" ],
                    "motorway",
                    "hsl(214, 23%, 70%)",
                    "hsl(235, 20%, 70%)"
                ]
            }
        },
        {
            "id": "bridge-major-link-2-shadow",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ ">=", [ "get", "layer" ], 2 ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "motorway_link", "trunk_link" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    2,
                    22,
                    10
                ],
                "line-color": "hsl(221, 20%, 50%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.8,
                    18,
                    20,
                    22,
                    200
                ],
                "line-blur": 10
            }
        },
        {
            "id": "bridge-major-link-2-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ ">=", [ "get", "layer" ], 2 ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "motorway_link", "trunk_link" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.8,
                    22,
                    2
                ],
                "line-color": "hsl(220, 20%, 65%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.8,
                    18,
                    20,
                    22,
                    200
                ]
            }
        },
        {
            "id": "bridge-motorway-trunk-2-shadow",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ ">=", [ "get", "layer" ], 2 ],
                [ "match", [ "get", "class" ], [ "motorway", "trunk" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { },
            "paint": {
                "line-color": "hsl(221, 20%, 50%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    30,
                    22,
                    300
                ],
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    2,
                    22,
                    10
                ],
                "line-blur": 10
            }
        },
        {
            "id": "bridge-motorway-trunk-2-case",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ ">=", [ "get", "layer" ], 2 ],
                [ "match", [ "get", "class" ], [ "motorway", "trunk" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { },
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    22,
                    2
                ],
                "line-color": "hsl(220, 20%, 65%)",
                "line-gap-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    30,
                    22,
                    300
                ]
            }
        },
        {
            "id": "bridge-major-link-2",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ ">=", [ "get", "layer" ], 2 ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "motorway_link", "trunk_link" ],
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { "line-cap": "round" },
            "paint": {
                "line-emissive-strength": 0.6,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    12,
                    0.8,
                    18,
                    20,
                    22,
                    200
                ],
                "line-color": [
                    "match",
                    [ "get", "class" ],
                    [ "motorway_link" ],
                    "hsl(214, 23%, 70%)",
                    "hsl(235, 20%, 70%)"
                ]
            }
        },
        {
            "id": "bridge-motorway-trunk-2",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ ">=", [ "get", "layer" ], 2 ],
                [ "match", [ "get", "class" ], [ "motorway", "trunk" ], true, false ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": { "line-cap": [ "step", [ "zoom" ], "butt", 14, "round" ] },
            "paint": {
                "line-emissive-strength": 0.6,
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    3,
                    0.8,
                    18,
                    30,
                    22,
                    300
                ],
                "line-color": [
                    "match",
                    [ "get", "class" ],
                    "motorway",
                    "hsl(214, 23%, 70%)",
                    "hsl(235, 20%, 70%)"
                ]
            }
        },
        {
            "id": "bridge-oneway-arrow-blue",
            "type": "symbol",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "==", [ "get", "oneway" ], "true" ],
                [
                    "step",
                    [ "zoom" ],
                    [
                        "match",
                        [ "get", "class" ],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited"
                        ],
                        true,
                        false
                    ],
                    16,
                    [
                        "match",
                        [ "get", "class" ],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service",
                            "track"
                        ],
                        true,
                        false
                    ]
                ]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step",
                    [ "zoom" ],
                    "oneway-small",
                    18,
                    "oneway-large"
                ],
                "symbol-spacing": 200,
                "icon-rotation-alignment": "map",
                "icon-allow-overlap": true,
                "icon-ignore-placement": true
            },
            "paint": {
                "icon-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.7,
                    0.5,
                    1.0
                ]
            }
        },
        {
            "id": "bridge-oneway-arrow-white",
            "type": "symbol",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "motorway", "trunk", "motorway_link", "trunk_link" ],
                    true,
                    false
                ],
                [ "==", [ "get", "oneway" ], "true" ]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": "oneway-white-small",
                "symbol-spacing": 200,
                "icon-rotation-alignment": "map",
                "icon-allow-overlap": true,
                "icon-ignore-placement": true
            },
            "paint": {
                "icon-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.7,
                    0.5,
                    1.0
                ]
            }
        },
        {
            "id": "bridge-path-cycleway-piste",
            "type": "line",
            "metadata": { "mapbox:group": "Road network, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [ "match", [ "get", "class" ], [ "path", "track" ], true, false ],
                [
                    "match",
                    [ "get", "type" ],
                    "cycleway",
                    [ "step", [ "zoom" ], false, 15, true ],
                    "piste",
                    true,
                    false
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "paint": {
                "line-emissive-strength": 0.6,
                "line-color": "hsl(125, 50%, 60%)",
                "line-width": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    12,
                    [ "match", [ "get", "type" ], [ "piste" ], 0.5, 0 ],
                    18,
                    [ "match", [ "get", "type" ], [ "piste" ], 4, 2 ],
                    22,
                    [ "match", [ "get", "type" ], [ "piste" ], 40, 20 ]
                ],
                "line-translate": [ 0, 0 ],
                "line-offset": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    12,
                    0,
                    18,
                    [ "match", [ "get", "type" ], [ "piste" ], 0, -2 ],
                    22,
                    [ "match", [ "get", "type" ], [ "piste" ], 0, -20 ]
                ],
                "line-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    [ "match", [ "get", "type" ], [ "piste" ], 1, 0 ],
                    16,
                    1
                ],
                "line-dasharray": [
                    "step",
                    [ "zoom" ],
                    [ "literal", [ 1 ] ],
                    16,
                    [ "literal", [ 1, 1 ] ]
                ]
            }
        },
        {
            "id": "bridge-rail",
            "type": "line",
            "metadata": { "mapbox:group": "Transit, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "major_rail", "minor_rail" ],
                    true,
                    false
                ]
            ],
            "layout": { },
            "paint": {
                "line-emissive-strength": 0.9,
                "line-gap-width": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    0,
                    16,
                    2
                ],
                "line-color": "hsl(0, 0%, 65%)",
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    0.5,
                    20,
                    1
                ]
            }
        },
        {
            "id": "bridge-rail-tracks",
            "type": "line",
            "metadata": { "mapbox:group": "Transit, bridges" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all",
                [ "==", [ "get", "structure" ], "bridge" ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "major_rail", "minor_rail" ],
                    true,
                    false
                ]
            ],
            "layout": { },
            "paint": {
                "line-emissive-strength": 0.9,
                "line-color": "hsl(0, 0%, 65%)",
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    4,
                    20,
                    8
                ],
                "line-dasharray": [
                    "step",
                    [ "zoom" ],
                    [ "literal", [ 0.1, 15 ] ],
                    16,
                    [ "literal", [ 0.1, 1 ] ]
                ],
                "line-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    13.75,
                    0,
                    14,
                    1
                ]
            }
        },
        {
            "id": "aerialway",
            "type": "line",
            "metadata": { "mapbox:group": "Transit, elevated" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [ "==", [ "get", "class" ], "aerialway" ],
            "paint": {
                "line-color": "hsl(225, 60%, 58%)",
                "line-width": [
                    "interpolate",
                    [ "exponential", 1.5 ],
                    [ "zoom" ],
                    14,
                    1,
                    20,
                    2
                ],
                "line-dasharray": [ 4, 1 ]
            }
        },
        {
            "id": "admin-1-boundary-bg",
            "type": "line",
            "metadata": { "mapbox:group": "Administrative boundaries, admin" },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 7,
            "filter": [
                "all",
                [ "==", [ "get", "admin_level" ], 1 ],
                [ "==", [ "get", "maritime" ], "false" ],
                [ "match", [ "get", "worldview" ], [ "all", "US" ], true, false ]
            ],
            "paint": {
                "line-color": "hsl(345, 100%, 100%)",
                "line-width": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    3,
                    3,
                    12,
                    6
                ],
                "line-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    7,
                    0,
                    8,
                    0.5
                ],
                "line-dasharray": [ 1, 0 ],
                "line-blur": [ "interpolate", [ "linear" ], [ "zoom" ], 3, 0, 12, 3 ]
            }
        },
        {
            "id": "admin-0-boundary-bg",
            "type": "line",
            "metadata": { "mapbox:group": "Administrative boundaries, admin" },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all",
                [ "==", [ "get", "admin_level" ], 0 ],
                [ "==", [ "get", "maritime" ], "false" ],
                [ "match", [ "get", "worldview" ], [ "all", "US" ], true, false ]
            ],
            "paint": {
                "line-width": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    3,
                    4,
                    12,
                    8
                ],
                "line-color": "hsl(345, 100%, 100%)",
                "line-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    3,
                    0,
                    4,
                    0.5
                ],
                "line-blur": [ "interpolate", [ "linear" ], [ "zoom" ], 3, 0, 12, 2 ]
            }
        },
        {
            "id": "admin-1-boundary",
            "type": "line",
            "metadata": { "mapbox:group": "Administrative boundaries, admin" },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 2,
            "filter": [
                "all",
                [ "==", [ "get", "admin_level" ], 1 ],
                [ "==", [ "get", "maritime" ], "false" ],
                [ "match", [ "get", "worldview" ], [ "all", "US" ], true, false ]
            ],
            "layout": { },
            "paint": {
                "line-emissive-strength": 0.5,
                "line-dasharray": [
                    "step",
                    [ "zoom" ],
                    [ "literal", [ 2, 0 ] ],
                    7,
                    [ "literal", [ 2, 2, 6, 2 ] ]
                ],
                "line-width": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    3,
                    0.3,
                    12,
                    1.5
                ],
                "line-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    2,
                    0,
                    3,
                    1
                ],
                "line-color": "hsl(345, 100%, 75%)"
            }
        },
        {
            "id": "admin-0-boundary",
            "type": "line",
            "metadata": { "mapbox:group": "Administrative boundaries, admin" },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all",
                [ "==", [ "get", "admin_level" ], 0 ],
                [ "==", [ "get", "disputed" ], "false" ],
                [ "==", [ "get", "maritime" ], "false" ],
                [ "match", [ "get", "worldview" ], [ "all", "US" ], true, false ]
            ],
            "layout": { },
            "paint": {
                "line-emissive-strength": 1,
                "line-color": "hsl(345, 100%, 70%)",
                "line-width": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    3,
                    0.5,
                    12,
                    2
                ],
                "line-dasharray": [ 10, 0 ]
            }
        },
        {
            "id": "admin-0-boundary-disputed",
            "type": "line",
            "metadata": { "mapbox:group": "Administrative boundaries, admin" },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all",
                [ "==", [ "get", "disputed" ], "true" ],
                [ "==", [ "get", "admin_level" ], 0 ],
                [ "==", [ "get", "maritime" ], "false" ],
                [ "match", [ "get", "worldview" ], [ "all", "US" ], true, false ]
            ],
            "paint": {
                "line-emissive-strength": 0.8,
                "line-color": "hsl(345, 100%, 70%)",
                "line-width": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    3,
                    0.5,
                    12,
                    2
                ],
                "line-dasharray": [
                    "step",
                    [ "zoom" ],
                    [ "literal", [ 3, 2, 5 ] ],
                    7,
                    [ "literal", [ 2, 1.5 ] ]
                ]
            }
        },
        {
            "id": "trees",
            "layout": {
                "model-id": [
                    "step",
                    [
                        "zoom"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "leaf_type"
                        ],
                        "needleleaved",
                        [
                            "case",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    2.0
                                ],
                                0.0
                            ],
                            "pine1-lod4",
                            "pine2-lod4"
                        ],
                        "palm",
                        "palm1-lod4",
                        [
                            "case",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    4.0
                                ],
                                0.0
                            ],
                            "oak1-lod4",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    4.0
                                ],
                                1.0
                            ],
                            "oak2-lod4",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    4.0
                                ],
                                2.0
                            ],
                            "maple1-lod4",
                            "maple2-lod4"
                        ]
                    ],
                    15.5,
                    [
                        "match",
                        [
                            "get",
                            "leaf_type"
                        ],
                        "needleleaved",
                        [
                            "case",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    2.0
                                ],
                                0.0
                            ],
                            "pine1-lod3",
                            "pine2-lod3"
                        ],
                        "palm",
                        "palm1-lod3",
                        [
                            "case",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    4.0
                                ],
                                0.0
                            ],
                            "oak1-lod3",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    4.0
                                ],
                                1.0
                            ],
                            "oak2-lod3",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    4.0
                                ],
                                2.0
                            ],
                            "maple1-lod3",
                            "maple2-lod3"
                        ]
                    ],
                    16.5,
                    [
                        "match",
                        [
                            "get",
                            "leaf_type"
                        ],
                        "needleleaved",
                        [
                            "case",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    2.0
                                ],
                                0.0
                            ],
                            "pine1-lod2",
                            "pine2-lod2"
                        ],
                        "palm",
                        "palm1-lod2",
                        [
                            "case",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    4.0
                                ],
                                0.0
                            ],
                            "oak1-lod2",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    4.0
                                ],
                                1.0
                            ],
                            "oak2-lod2",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    4.0
                                ],
                                2.0
                            ],
                            "maple1-lod2",
                            "maple2-lod2"
                        ]
                    ],
                    17.5,
                    [
                        "match",
                        [
                            "get",
                            "leaf_type"
                        ],
                        "needleleaved",
                        [
                            "case",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    2.0
                                ],
                                0.0
                            ],
                            "pine1-lod1",
                            "pine2-lod1"
                        ],
                        "palm",
                        "palm1-lod1",

                        [
                            "case",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    4.0
                                ],
                                0.0
                            ],
                            "oak1-lod1",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    4.0
                                ],
                                1.0
                            ],
                            "oak2-lod1",
                            [
                                "==",
                                [
                                    "%",
                                    [
                                        "number",
                                        [
                                            "id"
                                        ]
                                    ],
                                    4.0
                                ],
                                2.0
                            ],
                            "maple1-lod1",
                            "maple2-lod1"
                        ]
                    ]
                ]
            },
            "paint": {
                "model-color": [
                    "hsla",
                    [
                        "random",
                        50.0,
                        200.0,
                        [
                            "id"
                        ]
                    ],
                    60.0,
                    [
                        "random",
                        70.0,
                        90.0,
                        [
                            "id"
                        ]
                    ],
                    1.0
                ],
                "model-color-mix-intensity": 0.21,
                "model-opacity": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "zoom"
                    ],
                    15.0,
                    0.0,
                    16.0,
                    1.0
                ],
                "model-rotation": [
                    0.0,
                    0.0,
                    [
                        "random",
                        0.0,
                        360.0,
                        [
                            "id"
                        ]
                    ]

                ],
                "model-scale": [
                    "match",
                    [
                        "%",
                        [
                            "number",
                            [
                                "id"
                            ]
                        ],
                        5.0
                    ],
                    0,
                    [
                        "literal",
                        [
                            0.8,
                            0.8,
                            0.8
                        ]
                    ],
                    1,
                    [
                        "literal",
                        [
                            0.8,
                            0.8,
                            0.8
                        ]
                    ],
                    2,
                    [
                        "literal",
                        [
                            0.9,
                            0.9,
                            0.9
                        ]
                    ],
                    [
                        "literal",
                        [
                            1.0,
                            1.0,
                            1.0
                        ]
                    ]
                ]
            },
            "source": "trees",
            "source-layer": "tree",
            "type": "model"
        },
        {
            "id": "road-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Road network, road-labels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 10,
            "filter": [
                "all",
                [ "has", "name" ],
                [
                    "step",
                    [ "zoom" ],
                    [
                        "match",
                        [ "get", "class" ],
                        [
                            "motorway",
                            "trunk"
                        ],
                        true,
                        false
                    ],
                    12,
                    [
                        "match",
                        [ "get", "class" ],
                        [
                            "motorway",
                            "trunk",
                            "primary",
                            "secondary"
                        ],
                        true,
                        false
                    ],
                    13,
                    [
                        "match",
                        [ "get", "class" ],
                        [
                            "motorway",
                            "trunk",
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited"
                        ],
                        true,
                        false
                    ],
                    15,
                    [
                        "match",
                        [ "get", "class" ],
                        [ "path", "pedestrian", "golf", "ferry", "aerialway" ],
                        false,
                        true
                    ]
                ],
                [
                    "case",
                    [
                        "<=",
                        [
                            "pitch"
                        ],
                        40.0
                    ],
                    true,
                    [
                        "step",
                        [ "pitch" ],
                        true,
                        40,
                        [ "<", [ "distance-from-center" ], 1 ],
                        55,
                        [ "<", [ "distance-from-center" ], 0 ],
                        60,
                        [ "<=", [ "distance-from-center" ], -0.2 ]
                    ]
                ]
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    10,
                    [
                        "match",
                        [ "get", "class" ],
                        [
                            "motorway",
                            "trunk",
                            "primary",
                            "secondary",
                            "tertiary"
                        ],
                        9,
                        [
                            "motorway_link",
                            "trunk_link",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "street",
                            "street_limited"
                        ],
                        8,
                        6.5
                    ],
                    18,
                    [
                        "match",
                        [ "get", "class" ],
                        [
                            "motorway",
                            "trunk",
                            "primary",
                            "secondary",
                            "tertiary"
                        ],
                        16,
                        [
                            "motorway_link",
                            "trunk_link",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "street",
                            "street_limited"
                        ],
                        14,
                        13
                    ]
                ],
                "text-max-angle": 30,
                "text-transform": "uppercase",
                "text-font": [ "DIN Pro Medium", "Arial Unicode MS Regular" ],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "map",
                "text-pitch-alignment": "viewport",
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                "text-letter-spacing": 0.15
            },
            "paint": {
                "text-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.28,
                    "hsl(0, 0%, 95%)",
                    0.3,
                    "hsl(0,  0%, 5%)"
                ],
                "text-halo-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    "hsl(0, 0%, 5%)",
                    0.3,
                    "hsl(0, 0%, 95%)"
                ],
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "path-pedestrian-label",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "Walking, cycling, etc., walking-cycling-labels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all",
                [ "case", [ "has", "layer" ], [ ">=", [ "get", "layer" ], 0 ], true ],
                [
                    "step",
                    [ "zoom" ],
                    [ "match", [ "get", "class" ], [ "pedestrian" ], true, false ],
                    15,
                    [
                        "match",
                        [ "get", "class" ],
                        [ "path", "pedestrian" ],
                        true,
                        false
                    ]
                ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 40 ],
                    true,
                    [
                        "step",
                        [ "pitch" ],
                        true,
                        40,
                        [ "<", [ "distance-from-center" ], 1 ],
                        55,
                        [ "<", [ "distance-from-center" ], 0 ],
                        60,
                        [ "<=", [ "distance-from-center" ], -0.2 ]
                    ]
                ]
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    10,
                    [ "match", [ "get", "class" ], "pedestrian", 9, 6.5 ],
                    18,
                    [ "match", [ "get", "class" ], "pedestrian", 14, 13 ]
                ],
                "text-max-angle": 30,
                "text-transform": "uppercase",
                "text-font": [ "DIN Pro Medium", "Arial Unicode MS Bold" ],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "map",
                "text-pitch-alignment": "viewport",
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                "text-letter-spacing": 0.01
            },
            "paint": {
                "text-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.28,
                    "hsl(0, 0%, 100%)",
                    0.3,
                    "hsl(0, 0%, 0%)"
                ],
                "text-halo-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    "hsl(0, 0%, 0%)",
                    0.3,
                    "hsl(0, 0%, 100%)"
                ],
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "golf-hole-label",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "Walking, cycling, etc., walking-cycling-labels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all",
                [ "==", [ "get", "class" ], "golf" ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 40 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 0 ]
                ]
            ],
            "layout": {
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                "text-font": [ "DIN Pro Medium", "Arial Unicode MS Regular" ],
                "text-size": 12
            },
            "paint": {
                "text-halo-color": "hsl(110, 65%, 65%)",
                "text-halo-width": 0.5,
                "text-halo-blur": 0.5,
                "text-color": "hsl(110, 70%, 28%)"
            }
        },
        {
            "id": "ferry-aerialway-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Transit, ferry-aerialway-labels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    "aerialway",
                    true,
                    "ferry",
                    true,
                    false
                ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 40 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 0 ]
                ]
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    10,
                    6.5,
                    18,
                    13
                ],
                "text-max-angle": 30,
                "text-font": [ "DIN Pro Medium", "Arial Unicode MS Regular" ],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "map",
                "text-pitch-alignment": "viewport",
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                "text-letter-spacing": 0.01,
                "text-transform": "uppercase"
            },
            "paint": {
                "text-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.28,
                    "hsl(225, 60%, 80%)",
                    0.3,
                    "hsl(225, 60%, 58%)"
                ],
                "text-halo-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    "hsl(0, 0%, 0%)",
                    0.3,
                    "hsl(200, 100%, 80%)"
                ],
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "3d-building",
            "type": "fill-extrusion",
            "metadata": { "mapbox:group": "Buildings, built" },
            "source": "composite",
            "source-layer": "building",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "extrude" ], "true" ],
                [ "==", [ "get", "underground" ], "false" ]
            ],
            "layout": {
                "fill-extrusion-edge-radius": 0.4
            },
            "paint": {
                "fill-extrusion-flood-light-color": [
                    "rgba",
                    245,
                    243,
                    171,
                    1.0
                ],
                "fill-extrusion-flood-light-ground-radius":[
                    "step",
                    [
                      "number",
                      [
                        "get",
                        "height"
                      ]
                    ],
                    0.0,
                    30.0,
                    [
                      "random",
                      30.0,
                      300.0,
                      [
                        "id"
                      ]
                    ]
                  ],
                "fill-extrusion-flood-light-intensity": [
                    "interpolate",
                    [
                        "linear"
                    ],
                    [
                        "measure-light",
                        "brightness"
                    ],
                    0.0,
                    0.3,
                    0.05,
                    0
                ],
                "fill-extrusion-flood-light-wall-radius": [
                    "case",
                  [">",
                    [
                      "number",
                      [
                        "get",
                        "height"
                      ]
                    ],100],
                  [
                    "/",
                    [
                      "number",
                      [
                        "get",
                        "height"
                      ]
                    ],
                    3.0
                  ],
                  0
                  ],
                "fill-extrusion-vertical-scale": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15, 0,
                    15.3, 1
                ],
                "fill-extrusion-ambient-occlusion-intensity": 0.15,
                "fill-extrusion-base": [ "get", "min_height" ],
                "fill-extrusion-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "get", "height" ],
                    0,
                    "hsl(40, 43%, 93%)",
                    200,
                    "hsl(23, 100%, 97%)"
                ],
                "fill-extrusion-height": [
                    "case",
                    ["all",
                    ["==", ["get", "height"], 3],
                    ["in", ["get", "type"], ["literal", ["beach_hut", "boathouse", "bunker", "cabin", "carport", "garage", "garages", "greenhouse", "houseboat", "hut", "service", "stable", "toilets"]]]
                ],
                2,
                ["all",
                ["==", ["get", "height"], 3],
                ["==", ["get", "type"], "bungalow"]
                ],
                4,
                    ["all",
                        ["==", ["get", "height"], 3],
                        ["in", ["get", "type"], ["literal", ["apartments", "church", "civic", "college", "commercial", "hangar", "hotel", "industrial", "mosque", "office", "school", "university", "warehouse" ]]]
                    ],
                    [
                        "random",
                        18.0,
                        20.0,
                        [
                          "id"
                        ]
                    ],
                    ["==", ["get", "height"], 3],
                    [
                    "random",
                    9.0,
                    11.0,
                    [
                      "id"
                    ]
                    ],
                    [
                      "number",
                      [
                        "get",
                        "height"
                      ]
                    ]
                  ],
                "fill-extrusion-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    15,
                    0,
                    15.3,
                    1
                ]
            }
        },
        {
            "id": "building-models",
            "minzoom": 14.0,
            "paint": {
                "model-ambient-occlusion-intensity": 0.75,
                "model-color": [
                    "match",
                    [
                        "get",
                        "part"
                    ],
                    "roof",
                    [
                        "hsl",
                        22,
                        82,
                        90
                    ],
                    "wall",
                    [
                        "hsl",
                        0,
                        0,
                        100
                    ],
                    "window",
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0,
                        [
                            "hsl",
                            [
                                "random",
                                0.0,
                                90.0,
                                [
                                    "id"
                                ]
                            ],
                            [
                                "random",
                                20.0,
                                100.0,
                                [
                                    "id"
                                ]
                            ],
                            87
                        ],
                        0.15,
                        [
                            "hsl",
                            [
                                "random",
                                200.0,
                                215.0,
                                [
                                    "id"
                                ]
                            ],
                            100,
                            [
                                "random",
                                70.0,
                                80.0,
                                [
                                    "id"
                                ]
                            ]
                        ]
                    ],
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.16,
                        [
                            "hsla",
                            [
                                "random",
                                10.0,
                                70.0,
                                [
                                    "id"
                                ]
                            ],
                            55
                            ,
                            [
                                "random",
                                80.0,
                                90.0,
                                [
                                    "id"
                                ]
                            ],
                            1.0
                        ],
                        0.4,
                        "hsl(0, 100%, 100%)"
                    ]
                ],
                "model-color-mix-intensity": [
                    "match",
                    [
                        "get",
                        "part"
                    ],
                    "logo",
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.2,
                        0,
                        0.4,
                        0.3
                    ],
                    1.0
                ],
                "model-emissive-strength": [
                    "match",
                    [
                        "get",
                        "part"
                    ],
                    "door",
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.2,
                        1.5,
                        0.4,
                        2.5
                    ],
                    "logo",
                    0.6,
                    "window",
                    [
                        "random",
                        0.5,
                        0.8,
                        [
                            "id"
                        ]
                    ],
                    0.0
                ],
                "model-height-based-emissive-strength-multiplier": [
                    "match",
                    [
                        "get",
                        "part"
                    ],
                    "window",
                    [
                        "literal",
                        [
                            0.0,
                            0.9,
                            0,
                            1,
                            0.5
                        ]
                    ],
                    [
                        "literal",
                        [
                            1.0,
                            1.0,
                            1.0,
                            1.0,
                            1.0
                        ]
                    ]
                ],
                "model-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    14.2,
                    0.0,
                    14.5,
                    1.0
                ],
                "model-roughness": [
                    "match",
                    [
                        "get",
                        "part"
                    ],
                    "window",
                    0.0,
                    1.0
                ],
                "model-scale": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    14.2,
                    [
                        1.0,
                        1.0,
                        0.0
                    ],
                    14.5,
                    [
                        1.0,
                        1.0,
                        1.0
                    ]
                ],
                "model-type": "common-3d"
            },
            "source": "3dbuildings",
            "type": "model"
        },
        {
            "id": "waterway-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Natural features, natural-labels" },
            "source": "composite",
            "source-layer": "natural_label",
            "minzoom": 13,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [
                        "canal",
                        "river",
                        "stream",
                        "disputed_canal",
                        "disputed_river",
                        "disputed_stream"
                    ],
                    [ "match", [ "get", "worldview" ], [ "all", "US" ], true, false ],
                    false
                ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 45 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 0 ]
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "text-font": [ "DIN Pro Italic", "Arial Unicode MS Regular" ],
                "text-max-angle": 30,
                "symbol-spacing": [
                    "interpolate",
                    [ "linear", 1 ],
                    [ "zoom" ],
                    15,
                    250,
                    17,
                    400
                ],
                "text-size": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    13,
                    12,
                    18,
                    18
                ],
                "symbol-placement": "line",
                "text-pitch-alignment": "viewport",
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ]
            },
            "paint": {
                "text-color": 
                [
                    "interpolate",
                    [
                      "linear"
                    ],
                    [
                      "measure-light",
                      "brightness"
                    ],
                    0.3,
                    "hsl(200, 12%, 44%)",
                    0.4,
                    "hsl(200, 68%, 42%)"
                ]
            }
        },
        {
            "id": "natural-line-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Natural features, natural-labels" },
            "source": "composite",
            "source-layer": "natural_label",
            "minzoom": 4,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [
                        "glacier",
                        "landform",
                        "disputed_glacier",
                        "disputed_landform"
                    ],
                    [ "match", [ "get", "worldview" ], [ "all", "US" ], true, false ],
                    false
                ],
                [ "<=", [ "get", "filterrank" ], 2 ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 45 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 0 ]
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "text-size": [
                    "step",
                    [ "zoom" ],
                    [ "step", [ "get", "sizerank" ], 18, 5, 12 ],
                    17,
                    [ "step", [ "get", "sizerank" ], 18, 13, 12 ]
                ],
                "text-max-angle": 30,
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                "text-font": [ "DIN Pro Medium", "Arial Unicode MS Regular" ],
                "symbol-placement": "line-center",
                "text-pitch-alignment": "viewport"
            },
            "paint": {
                "text-halo-width": 0.5,
                "text-halo-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    "hsl(0, 0%, 0%)",
                    0.3,
                    "hsl(0, 0%, 100%)"
                ],
                "text-halo-blur": 0.5,
                "text-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.28,
                    "hsl(210, 20%, 80%)",
                    0.3,
                    "hsl(210, 20%, 46%)"
                ]
            }
        },
        {
            "id": "natural-point-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Natural features, natural-labels" },
            "source": "composite",
            "source-layer": "natural_label",
            "minzoom": 4,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [
                        "dock",
                        "glacier",
                        "landform",
                        "water_feature",
                        "wetland",
                        "disputed_dock",
                        "disputed_glacier",
                        "disputed_landform",
                        "disputed_water_feature",
                        "disputed_wetland"
                    ],
                    [ "match", [ "get", "worldview" ], [ "all", "US" ], true, false ],
                    false
                ],
                [ "<=", [ "get", "filterrank" ], 2 ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 45 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 0 ]
                ],
                [ "==", [ "geometry-type" ], "Point" ]
            ],
            "layout": {
                "text-size": [
                    "step",
                    [ "zoom" ],
                    [ "step", [ "get", "sizerank" ], 18, 5, 12 ],
                    17,
                    [ "step", [ "get", "sizerank" ], 18, 13, 12 ]
                ],
                "icon-image": [ "image", [ "string", [ "get", "maki" ] ] ],
                "text-font": [ "DIN Pro Medium", "Arial Unicode MS Regular" ],
                "text-offset": [
                    "step",
                    [ "zoom" ],
                    [
                        "step",
                        [ "get", "sizerank" ],
                        [ "literal", [ 0, 0 ] ],
                        5,
                        [ "literal", [ 0, 0.75 ] ]
                    ],
                    17,
                    [
                        "step",
                        [ "get", "sizerank" ],
                        [ "literal", [ 0, 0 ] ],
                        13,
                        [ "literal", [ 0, 0.75 ] ]
                    ]
                ],
                "text-anchor": [
                    "step",
                    [ "zoom" ],
                    [ "step", [ "get", "sizerank" ], "center", 5, "top" ],
                    17,
                    [ "step", [ "get", "sizerank" ], "center", 13, "top" ]
                ],
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ]
            },
            "paint": {
                "icon-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.7,
                    0.5,
                    1.0
                ],
                "icon-opacity": [
                    "step",
                    [ "zoom" ],
                    [ "step", [ "get", "sizerank" ], 0, 5, 1 ],
                    17,
                    [ "step", [ "get", "sizerank" ], 0, 13, 1 ]
                ],
                "text-halo-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    "hsl(0, 0%, 0%)",
                    0.3,
                    "hsl(20, 20%, 100%)"
                ],
                "text-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.28,
                    "hsl(210, 20%, 80%)",
                    0.3,
                    "hsl(210, 20%, 46%)"
                ],
                "text-halo-width": 0.5,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "water-line-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Natural features, natural-labels" },
            "source": "composite",
            "source-layer": "natural_label",
            "minzoom": 1,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [
                        "bay",
                        "ocean",
                        "reservoir",
                        "sea",
                        "water",
                        "disputed_bay",
                        "disputed_ocean",
                        "disputed_reservoir",
                        "disputed_sea",
                        "disputed_water"
                    ],
                    [ "match", [ "get", "worldview" ], [ "all", "US" ], true, false ],
                    false
                ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 45 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 0 ]
                ],
                [ "==", [ "geometry-type" ], "LineString" ]
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    0,
                    [ "*", [ "-", 16, [ "sqrt", [ "get", "sizerank" ] ] ], 1 ],
                    22,
                    [ "*", [ "-", 22, [ "sqrt", [ "get", "sizerank" ] ] ], 1 ]
                ],
                "text-max-angle": 30,
                "text-letter-spacing": [
                    "match",
                    [ "get", "class" ],
                    "ocean",
                    0.25,
                    [ "sea", "bay" ],
                    0.15,
                    0
                ],
                "text-font": [ "DIN Pro Italic", "Arial Unicode MS Regular" ],
                "symbol-placement": "line-center",
                "text-pitch-alignment": "viewport",
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ]
            },
            "paint": {
                "text-color": 
                [
                    "interpolate",
                    [
                      "linear"
                    ],
                    [
                      "measure-light",
                      "brightness"
                    ],
                    0.3,
                    [
                        "match",
                        [ "get", "class" ],
                        [ "bay", "ocean", "sea" ],
                            "hsl(200, 40%, 44%)",
                            "hsl(200, 32%, 44%)"
                    ],
                    0.4,
                    [
                        "match",
                        [ "get", "class" ],
                        [ "bay", "ocean", "sea" ],
                            "hsl(200, 96%, 42%)",
                            "hsl(200, 88%, 42%)"
                    ]
                ]
            }
        },
        {
            "id": "water-point-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Natural features, natural-labels" },
            "source": "composite",
            "source-layer": "natural_label",
            "minzoom": 1,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [
                        "bay",
                        "ocean",
                        "reservoir",
                        "sea",
                        "water",
                        "disputed_bay",
                        "disputed_ocean",
                        "disputed_reservoir",
                        "disputed_sea",
                        "disputed_water"
                    ],
                    [ "match", [ "get", "worldview" ], [ "all", "US" ], true, false ],
                    false
                ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 45 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 0 ]
                ],
                [ "==", [ "geometry-type" ], "Point" ]
            ],
            "layout": {
                "text-line-height": 1.3,
                "text-size": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    0,
                    [ "*", [ "-", 16, [ "sqrt", [ "get", "sizerank" ] ] ], 1 ],
                    22,
                    [ "*", [ "-", 22, [ "sqrt", [ "get", "sizerank" ] ] ], 1 ]
                ],
                "text-font": [ "DIN Pro Italic", "Arial Unicode MS Regular" ],
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                "text-letter-spacing": [
                    "match",
                    [ "get", "class" ],
                    "ocean",
                    0.25,
                    [ "bay", "sea" ],
                    0.15,
                    0.01
                ],
                "text-max-width": [
                    "match",
                    [ "get", "class" ],
                    "ocean",
                    4,
                    "sea",
                    5,
                    [ "bay", "water" ],
                    7,
                    10
                ]
            },
            "paint": {
                "text-color": 
                [
                    "interpolate",
                    [
                      "linear"
                    ],
                    [
                      "measure-light",
                      "brightness"
                    ],
                    0.3,
                    [
                        "match",
                        [ "get", "class" ],
                        [ "bay", "ocean", "sea" ],
                            "hsl(200, 40%, 44%)",
                            "hsl(200, 32%, 44%)"
                    ],
                    0.4,
                    [
                        "match",
                        [ "get", "class" ],
                        [ "bay", "ocean", "sea" ],
                            "hsl(200, 96%, 44%)",
                            "hsl(200, 88%, 44%)"
                    ]
                ]
            }
        },
        {
            "id": "road-intersection",
            "type": "symbol",
            "metadata": { "mapbox:group": "Road network, road-labels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all",
                [ "==", [ "get", "class" ], "intersection" ],
                [ "has", "name" ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 45 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 1 ]
                ]
            ],
            "layout": {
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                "icon-image": "intersection",
                "icon-text-fit": "both",
                "icon-text-fit-padding": [ 1, 2, 1, 2 ],
                "text-size": [
                    "interpolate",
                    [ "exponential", 1.2 ],
                    [ "zoom" ],
                    15,
                    9,
                    18,
                    12
                ],
                "text-font": [ "DIN Pro Bold", "Arial Unicode MS Bold" ]
            },
            "paint": {
                "icon-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.75,
                    0.3,
                    1.0
                ],
                "text-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.75,
                    0.3,
                    1.0
                ],
                "text-color": "hsl(230, 57%, 64%)"
            }
        },
        {
            "id": "road-number-shield",
            "type": "symbol",
            "metadata": { "mapbox:group": "Road network, road-labels" },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 6,
            "filter": [
                "all",
                [ "has", "reflen" ],
                [ "<=", [ "get", "reflen" ], 6 ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "pedestrian", "service" ],
                    false,
                    true
                ],
                [
                    "step",
                    [ "zoom" ],
                    [ "==", [ "geometry-type" ], "Point" ],
                    11,
                    [ ">", [ "get", "len" ], 5000 ],
                    12,
                    [ ">", [ "get", "len" ], 2500 ],
                    13,
                    [ ">", [ "get", "len" ], 1000 ],
                    14,
                    true
                ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 45 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 1 ]
                ]
            ],
            "layout": {
                "text-size": 9,
                "icon-image": [
                    "case",
                    [ "has", "shield_beta" ],
                    [
                        "coalesce",
                        [
                            "image",
                            [
                                "concat",
                                [
                                    "get",
                                    "shield_beta"
                                ],
                                "-",
                                [
                                    "to-string",
                                    [ "get", "reflen" ]
                                ]
                            ]
                        ],
                        [
                            "image",
                            [
                                "concat",
                                [ "get", "shield" ],
                                "-",
                                [
                                    "to-string",
                                    [ "get", "reflen" ]
                                ]
                            ]
                        ],
                        [
                            "image",
                            [
                                "concat",
                                "default-",
                                [
                                    "to-string",
                                    [ "get", "reflen" ]
                                ]
                            ]
                        ]
                    ],
                    [
                        "concat",
                        [ "get", "shield" ],
                        "-",
                        [
                            "to-string",
                            [ "get", "reflen" ]
                        ]
                    ]
                ],
                "icon-rotation-alignment": "viewport",
                "text-max-angle": 38,
                "symbol-spacing": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    11,
                    400,
                    14,
                    600
                ],
                "text-font": [ "DIN Pro Bold", "Arial Unicode MS Bold" ],
                "symbol-placement": [ "step", [ "zoom" ], "point", 11, "line" ],
                "text-rotation-alignment": "viewport",
                "text-field": [ "get", "ref" ],
                "text-letter-spacing": 0.05
            },
            "paint": {
                "icon-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.75,
                    0.3,
                    1.0
                ],
                "text-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.75,
                    0.3,
                    1.0
                ],
                "text-color": [
                    "case",
                    [ "has", "shield_beta" ],
                    [
                        "case",
                        [
                            "all",
                            [
                                "has",
                                "shield_text_color_beta"
                            ],
                            [
                                "to-boolean",
                                [
                                    "coalesce",
                                    [
                                        "image",
                                        [
                                            "concat",
                                            [
                                                "get",
                                                "shield_beta"
                                            ],
                                            "-",
                                            [
                                                "to-string",
                                                [
                                                    "get",
                                                    "reflen"
                                                ]
                                            ]
                                        ]
                                    ],
                                    ""
                                ]
                            ]
                        ],
                        [
                            "match",
                            [
                                "get",
                                "shield_text_color_beta"
                            ],
                            "white",
                            "hsl(0, 0%, 100%)",
                            "yellow",
                            "hsl(50, 100%, 70%)",
                            "orange",
                            "hsl(25, 100%, 75%)",
                            "blue",
                            "hsl(230, 57%, 44%)",
                            "red",
                            "hsl(0, 87%, 59%)",
                            "green",
                            "hsl(140, 74%, 37%)",
                            "hsl(230, 18%, 13%)"
                        ],
                        "hsl(230, 18%, 13%)"
                    ],
                    [
                        "match",
                        [
                            "get",
                            "shield_text_color"
                        ],
                        "white",
                        "hsl(0, 0%, 100%)",
                        "yellow",
                        "hsl(50, 100%, 70%)",
                        "orange",
                        "hsl(25, 100%, 75%)",
                        "blue",
                        "hsl(230, 57%, 44%)",
                        "red",
                        "hsl(0, 87%, 59%)",
                        "green",
                        "hsl(140, 74%, 37%)",
                        "hsl(230, 18%, 13%)"
                    ]
                ]
            }
        },
        {
            "id": "road-exit-shield",
            "type": "symbol",
            "metadata": { "mapbox:group": "Road network, road-labels" },
            "source": "composite",
            "source-layer": "motorway_junction",
            "minzoom": 14,
            "filter": [
                "all",
                [ "has", "reflen" ],
                [ "<=", [ "get", "reflen" ], 9 ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 45 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 1 ]
                ]
            ],
            "layout": {
                "text-field": [ "get", "ref" ],
                "text-size": 9,
                "icon-image": [
                    "concat",
                    "motorway-exit-",
                    [ "to-string", [ "get", "reflen" ] ]
                ],
                "text-font": [ "DIN Pro Bold", "Arial Unicode MS Bold" ]
            },
            "paint": {
                "icon-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.75,
                    0.3,
                    1.0
                ],
                "text-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.75,
                    0.3,
                    1.0
                ],
                "text-color": "hsl(0, 0%, 100%)",
                "text-translate": [ 0, 0 ]
            }
        },
        {
            "id": "gate-label",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "structure",
            "minzoom": 17,
            "filter": [
                "all",
                [ "==", [ "get", "class" ], "gate" ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 40 ],
                    true,
                    [
                        "step",
                        [ "pitch" ],
                        true,
                        40,
                        [ "<=", [ "distance-from-center" ], 0.4 ],
                        50,
                        [ "<", [ "distance-from-center" ], 0.2 ],
                        55,
                        [ "<", [ "distance-from-center" ], 0 ],
                        60,
                        [ "<", [ "distance-from-center" ], -0.05 ]
                    ]
                ]
            ],
            "layout": {
                "icon-image": [
                    "match",
                    [ "get", "type" ],
                    "gate",
                    "gate",
                    "lift_gate",
                    "lift-gate",
                    ""
                ]
            },
            "paint": {
                "icon-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.5,
                    0.3,
                    1.0
                ]
            }
        },
        {
            "id": "building-entrance",
            "type": "symbol",
            "metadata": { "mapbox:group": "Buildings, building-labels" },
            "source": "composite",
            "source-layer": "structure",
            "minzoom": 18,
            "filter": [
                "all",
                [
                    "==",
                    [
                        "get",
                        "class"
                    ],
                    "entrance"
                ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 40 ],
                    true,
                    false
                ]
            ],
            "layout": {
                "icon-image": "marker",
                "text-field": [ "get", "ref" ],
                "text-size": 10,
                "text-offset": [ 0, -0.5 ],
                "text-font": [ "DIN Pro Regular", "Arial Unicode MS Regular" ]
            },
            "paint": {
                "text-color": "hsl(20, 0%, 60%)",
                "text-halo-color": "hsl(20, 17%, 100%)",
                "icon-opacity": 0.4
            }
        },
        {
            "id": "building-number-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Buildings, building-labels" },
            "source": "composite",
            "source-layer": "housenum_label",
            "minzoom": 17,
            "filter": [
                "case",
                [ "<=", [ "pitch" ], 40 ],
                true,
                [
                    "step",
                    [ "pitch" ],
                    true,
                    40,
                    [ "<", [ "distance-from-center" ], 0.4 ],
                    50,
                    [ "<", [ "distance-from-center" ], 0.2 ],
                    55,
                    [ "<", [ "distance-from-center" ], 0 ],
                    60,
                    [ "<=", [ "distance-from-center" ], -0.4 ]
                ]
            ],
            "layout": {
                "text-field": [ "get", "house_num" ],
                "text-font": [ "DIN Pro Medium", "Arial Unicode MS Regular" ],
                "text-max-width": 10,
                "text-size": 10,
                "text-padding": 10
            },
            "paint": {
                "text-color": "hsl(20, 0%, 60%)",
                "text-halo-color": "hsl(20, 17%, 100%)"
            }
        },
        {
            "id": "block-number-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Buildings, building-labels" },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 16,
            "filter": [
                "all",
                [ "==", [ "get", "class" ], "settlement_subdivision" ],
                [ "==", [ "get", "type" ], "block" ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 60 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 0.5 ]
                ]
            ],
            "layout": {
                "text-field": [ "get", "name" ],
                "text-font": [ "DIN Pro Medium", "Arial Unicode MS Regular" ],
                "text-max-width": 7,
                "text-size": 11
            },
            "paint": {
                "text-color": "hsl(20, 0%, 60%)",
                "text-halo-color": "hsl(20, 17%, 100%)"
            }
        },
        {
            "id": "poi-label",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "Point of interest labels, poi-labels"
            },
            "source": "composite",
            "source-layer": "poi_label",
            "minzoom": 6,
            "filter": [
                "all",
                [
                    "<=",
                    [ "number", [ "get", "filterrank" ] ],
                    ["+", ["step", ["zoom"], 1, 16, 2, 17, 3],
                    [
                        "match",
                        ["get", "class"],
                        "park_like",
                        4,
                        "visitor_amenities",
                        4,
                        "store_like",
                        3,
                        "lodging",
                        1,
                        2
                    ]
                ]
                ],
                [
                    "case",
                    [
                        "<=",
                        [
                            "pitch"
                        ],
                        40.0
                    ],
                    true,
                    [
                        "step",
                        [ "pitch" ],
                        true,
                        40,
                        [ "<", [ "distance-from-center" ], 1.2 ],
                        50,
                        [ "<", [ "distance-from-center" ], 1 ],
                        55,
                        [ "<", [ "distance-from-center" ], 0.8 ],
                        60,
                        [ "<=", [ "distance-from-center" ], 0.6 ]
                    ]
                ]
            ],
            "layout": {
                "symbol-z-elevate": true,
                "text-size": [
                    "step",
                    [ "zoom" ],
                    [ "step", [ "number", [ "get", "sizerank" ] ], 18, 5, 12 ],
                    17,
                    [ "step", [ "number", [ "get", "sizerank" ] ], 18, 13, 12 ]
                ],
                "text-field": [
                    "format",
                    [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                    { }
                ],
                "text-font": [ "DIN Pro Medium", "Arial Unicode MS Regular" ],
                "text-padding": 4,
                "icon-image": [
                    "case",
                    [ "has", "maki_beta" ],
                    [
                        "coalesce",
                        [ "image",
                            [ "concat", [ "string", [ "get", "maki_beta" ] ], "-dark" ],
                            [ "string", [ "get", "maki_beta" ] ]
                        ],
                        [ "image",
                            [ "concat", [ "string", [ "get", "maki" ] ], "-dark" ],
                            [ "string", [ "get", "maki" ] ]
                        ]
                    ],
                    [ "image",
                        [ "concat", [ "string", [ "get", "maki" ] ], "-dark" ],
                        [ "string", [ "get", "maki" ] ]
                    ]
                ],
                "text-offset": [
                    "step",
                    [ "zoom" ],
                    [
                        "step",
                        [ "number", [ "get", "sizerank" ] ],
                        [ "literal", [ 0, 0 ] ],
                        5,
                        [ "literal", [ 0, 1 ] ]
                    ],
                    17,
                    [
                        "step",
                        [ "number", [ "get", "sizerank" ] ],
                        [ "literal", [ 0, 0 ] ],
                        13,
                        [ "literal", [ 0, 1 ] ]
                    ]
                ],
                "text-anchor": [
                    "step",
                    [ "zoom" ],
                    [
                        "step",
                        [ "number", [ "get", "sizerank" ] ],
                        "center",
                        5,
                        "top"
                    ],
                    17,
                    [
                        "step",
                        [ "number", [ "get", "sizerank" ] ],
                        "center",
                        13,
                        "top"
                    ]
                ]
            },
            "paint": {
                "icon-image-cross-fade": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.0,
                    0.3,
                    1.0
                ],
                "icon-opacity": [
                    "step",
                    [ "zoom" ],
                    [ "step", [ "number", [ "get", "sizerank" ] ], 0, 5, 1 ],
                    17,
                    [ "step", [ "number", [ "get", "sizerank" ] ], 0, 13, 1 ]
                ],
                "text-halo-width": 1,
                "text-halo-blur": 0,
                "text-halo-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    "hsl(0, 0%, 10%)",
                    0.3,
                    "hsl(0, 0%, 100%)"
                ],
                "text-color": [
                    "match",
                    [ "get", "class" ],
                    "food_and_drink",
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.25,
                        "hsl(40, 95%, 70%)",
                        0.3,
                        "hsl(30, 100%, 48%)"
                    ],
                    "park_like",
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.25,
                        "hsl(110, 55%, 65%)",
                        0.3,
                        "hsl(110, 70%, 28%)"
                    ],
                    "education",
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.25,
                        "hsl(30, 50%, 70%)",
                        0.3,
                        "hsl(30, 50%, 38%)"
                    ],
                    "medical",
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.25,
                        "hsl(0, 70%, 70%)",
                        0.3,
                        "hsl(0, 90%, 60%)"
                    ],
                    "sport_and_leisure",
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.25,
                        "hsl(190, 60%, 70%)",
                        0.3,
                        "hsl(190, 75%, 38%)"
                    ],
                    [ "store_like", "food_and_drink_stores" ],
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.25,
                        "hsl(210, 70%, 75%)",
                        0.3,
                        "hsl(210, 75%, 53%)"
                    ],
                    [ "commercial_services", "motorist", "lodging" ],
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.25,
                        "hsl(260, 70%, 75%)",
                        0.3,
                        "hsl(250, 75%, 60%)"
                    ],
                    [ "arts_and_entertainment", "historic", "landmark" ],
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.25,
                        "hsl(320, 70%, 75%)",
                        0.3,
                        "hsl(320, 85%, 60%)"
                    ],
                    [
                        "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.25,
                        "hsl(210, 20%, 70%)",
                        0.3,
                        "hsl(210, 20%, 43%)"
                    ]
                ]
            }
        },
        {
            "id": "transit-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Transit, transit-labels" },
            "source": "composite",
            "source-layer": "transit_stop_label",
            "minzoom": 12,
            "filter": [
                "all",
                [
                    "step",
                    [ "zoom" ],
                    [
                        "all",
                        [
                            "<=",
                            [ "get", "filterrank" ],
                            4
                        ],
                        [
                            "match",
                            [ "get", "mode" ],
                            "rail",
                            true,
                            "metro_rail",
                            true,
                            false
                        ],
                        [
                            "!=",
                            [ "get", "stop_type" ],
                            "entrance"
                        ]
                    ],
                    14,
                    [
                        "all",
                        [
                            "match",
                            [ "get", "mode" ],
                            "rail",
                            true,
                            "metro_rail",
                            true,
                            false
                        ],
                        [
                            "!=",
                            [ "get", "stop_type" ],
                            "entrance"
                        ]
                    ],
                    15,
                    [
                        "all",
                        [
                            "match",
                            [ "get", "mode" ],
                            "rail",
                            true,
                            "metro_rail",
                            true,
                            "ferry",
                            true,
                            "light_rail",
                            true,
                            false
                        ],
                        [
                            "!=",
                            [ "get", "stop_type" ],
                            "entrance"
                        ]
                    ],
                    16,
                    [
                        "all",
                        [
                            "match",
                            [ "get", "mode" ],
                            "bus",
                            false,
                            true
                        ],
                        [
                            "!=",
                            [ "get", "stop_type" ],
                            "entrance"
                        ]
                    ],
                    17,
                    [
                        "!=",
                        [ "get", "stop_type" ],
                        "entrance"
                    ],
                    19,
                    true
                ],
                [
                    "case",
                    [
                        "<=",
                        [
                            "pitch"
                        ],
                        40.0
                    ],
                    true,
                    [
                        "step",
                        [ "pitch" ],
                        true,
                        40,
                        [ "<", [ "distance-from-center" ], 1 ],
                        50,
                        [ "<", [ "distance-from-center" ], 0.8 ],
                        55,
                        [ "<", [ "distance-from-center" ], 0.4 ],
                        60,
                        [ "<=", [ "distance-from-center" ], -0.1 ]
                    ]
                ]
            ],
            "layout": {
                "text-size": 12,
                "icon-image": [
                    "case",
                    [
                        "to-boolean",
                        [
                            "coalesce",
                            [
                                "image", [ "concat", [ "string", [ "get", "network" ] ], "-dark" ]
                            ],
                            ""
                        ]
                    ],
                    [
                        "image",
                        [ "concat", [ "string", [ "get", "network" ] ], "-dark" ],
                        [ "string", [ "get", "network" ] ]
                    ],
                    [
                        "image",
                        [ "string", [ "get", "network" ] ],
                        [ "string", [ "get", "network" ] ]
                    ]
                ],
                "text-font": [ "DIN Pro Medium", "Arial Unicode MS Regular" ],
                "text-justify": [
                    "match",
                    [ "get", "stop_type" ],
                    "entrance",
                    "left",
                    "center"
                ],
                "text-offset": [
                    "match",
                    [ "get", "stop_type" ],
                    "entrance",
                    [ "literal", [ 1, 0 ] ],
                    [ "literal", [ 0, 0.8 ] ]
                ],
                "text-anchor": [
                    "match",
                    [ "get", "stop_type" ],
                    "entrance",
                    "left",
                    "top"
                ],
                "text-field": [
                    "step",
                    [ "zoom" ],
                    [ "format", "", { } ],
                    13,
                    [
                        "match",
                        [ "get", "mode" ],
                        [ "metro_rail", "rail" ],
                        [
                            "format",
                            [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                            { }
                        ],
                        [ "format", "", { } ]
                    ],
                    14,
                    [
                        "match",
                        [ "get", "mode" ],
                        [ "bicycle", "bus" ],
                        [ "format", "", { } ],
                        [
                            "format",
                            [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                            { }
                        ]
                    ],
                    18,
                    [
                        "format",
                        [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                        { }
                    ]
                ],
                "text-letter-spacing": 0.01,
                "text-max-width": [
                    "match",
                    [ "get", "stop_type" ],
                    "entrance",
                    15,
                    9
                ]
            },
            "paint": {
                "icon-image-cross-fade": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.0,
                    0.3,
                    1.0
                ],
                "text-emissive-strength": 1.5,
                "text-halo-width": 1,
                "text-halo-blur": 0,
                "text-halo-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    "hsl(0, 0%, 0%)",
                    0.3,
                    "hsl(0, 0%, 100%)"
                ],
                "text-color": [
                    "match",
                    [ "get", "network" ],
                    "tokyo-metro",
                    [ "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.25,
                        "hsl(180, 50%, 80%)",
                        0.3,
                        "hsl(180, 50%, 30%)" ],
                    "mexico-city-metro",
                    [ "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.25,
                        "hsl(25, 100%, 80%)",
                        0.3,
                        "hsl(25, 100%, 63%)" ],
                    [
                        "barcelona-metro",
                        "delhi-metro",
                        "hong-kong-mtr",
                        "milan-metro",
                        "osaka-subway"
                    ],
                    [ "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.25,
                        "hsl(0, 90%, 65%)",
                        0.3,
                        "hsl(0, 90%, 47%)" ],
                    [
                        "boston-t",
                        "washington-metro"
                    ],
                    [ "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.25,
                        "hsl(230, 18%, 80%)",
                        0.3,
                        "hsl(230, 18%, 20%)" ],
                    [
                        "chongqing-rail-transit",
                        "kiev-metro",
                        "singapore-mrt",
                        "taipei-metro"
                    ],
                    [ "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.25,
                        "hsl(140, 90%, 85%)",
                        0.3,
                        "hsl(140, 90%, 25%)" ],
                    [ "interpolate",
                        [ "linear" ],
                        [ "measure-light", "brightness" ],
                        0.25,
                        "hsl(225, 60%, 60%)",
                        0.3,
                        "hsl(225, 60%, 58%)" ]
                ]
            }
        },
        {
            "id": "airport-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Transit, transit-labels" },
            "source": "composite",
            "source-layer": "airport_label",
            "minzoom": 8,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [
                        "military",
                        "civil",
                        "disputed_military",
                        "disputed_civil"
                    ],
                    [ "match", [ "get", "worldview" ], [ "all", "US" ], true, false ],
                    false
                ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 45 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 2 ]
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [ "step", [ "get", "sizerank" ], 18, 9, 12 ],
                "icon-image": [ "image",
                    [ "concat", [ "string", [ "get", "maki" ] ], "-dark" ],
                    [ "string", [ "get", "maki" ] ]
                ],
                "text-font": [ "DIN Pro Medium", "Arial Unicode MS Regular" ],
                "text-offset": [ 0, 0.8 ],
                "text-rotation-alignment": "viewport",
                "text-anchor": "top",
                "text-field": [
                    "step",
                    [ "get", "sizerank" ],
                    [
                        "case",
                        [ "has", "ref" ],
                        [
                            "concat",
                            [ "get", "ref" ],
                            " -\n",
                            [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ]
                        ],
                        [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ]
                    ],
                    15,
                    [ "get", "ref" ]
                ],
                "text-letter-spacing": 0.01,
                "text-max-width": 9
            },
            "paint": {
                "icon-image-cross-fade": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.0,
                    0.3,
                    1.0
                ],
                "text-color": "hsl(225, 60%, 58%)",
                "text-halo-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    "hsl(0, 0%, 0%)",
                    0.3,
                    "hsl(0, 0%, 100%)"
                ],
                "text-halo-width": 1
            }
        },
        {
            "id": "settlement-subdivision-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Place labels, place-labels" },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 10,
            "maxzoom": 15,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [
                        "disputed_settlement_subdivision",
                        "settlement_subdivision"
                    ],
                    [ "match", [ "get", "worldview" ], [ "US", "all" ], true, false ],
                    false
                ],
                [ "<=", [ "number", [ "get", "filterrank" ] ], 3 ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 45 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 1.5 ]
                ]
            ],
            "layout": {
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                "text-transform": "uppercase",
                "text-font": [ "DIN Pro Medium", "Arial Unicode MS Regular" ],
                "text-letter-spacing": [
                    "match",
                    [ "get", "type" ],
                    "suburb",
                    0.15,
                    0.05
                ],
                "text-max-width": 7,
                "text-padding": 3,
                "text-size": [
                    "interpolate",
                    [ "cubic-bezier", 0.5, 0, 1, 1 ],
                    [ "zoom" ],
                    11,
                    [ "match", [ "get", "type" ], "suburb", 12, 11.5 ],
                    15,
                    [ "match", [ "get", "type" ], "suburb", 16, 15 ]
                ]
            },
            "paint": {
                "text-emissive-strength": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.28,
                    1.0,
                    0.3,
                    1.5
                ],
                "text-halo-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    "hsla(0, 0%, 0%, 0.5)",
                    0.3,
                    "hsl(0, 0%, 100%)"
                ],
                "text-halo-width": 1.3,
                "text-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.28,
                    "hsl(220, 30%, 85%)",
                    0.3,
                    "hsl(234, 21%, 25%)"
                ]
            }
        },
        {
            "id": "settlement-minor-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Place labels, place-labels" },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 2,
            "maxzoom": 13,
            "filter": [
                "all",
                [ "<=", [ "get", "filterrank" ], 3 ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "settlement", "disputed_settlement" ],
                    [ "match", [ "get", "worldview" ], [ "all", "US" ], true, false ],
                    false
                ],
                [
                    "step",
                    [ "zoom" ],
                    [ ">", [ "get", "symbolrank" ], 6 ],
                    4,
                    [ ">=", [ "get", "symbolrank" ], 7 ],
                    6,
                    [ ">=", [ "get", "symbolrank" ], 8 ],
                    7,
                    [ ">=", [ "get", "symbolrank" ], 10 ],
                    10,
                    [ ">=", [ "get", "symbolrank" ], 11 ],
                    11,
                    [ ">=", [ "get", "symbolrank" ], 13 ],
                    12,
                    [ ">=", [ "get", "symbolrank" ], 15 ]
                ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 45 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 2 ]
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    [ "cubic-bezier", 0.2, 0, 0.9, 1 ],
                    [ "zoom" ],
                    3,
                    [ "step", [ "get", "symbolrank" ], 11, 9, 10 ],
                    6,
                    [ "step", [ "get", "symbolrank" ], 14, 9, 12, 12, 10 ],
                    8,
                    [ "step", [ "get", "symbolrank" ], 16, 9, 14, 12, 12, 15, 10 ],
                    13,
                    [ "step", [ "get", "symbolrank" ], 22, 9, 20, 12, 16, 15, 14 ]
                ],
                "text-radial-offset": [
                    "step",
                    [ "zoom" ],
                    [ "match", [ "get", "capital" ], 2, 0.6, 0.55 ],
                    8,
                    0
                ],
                "symbol-sort-key": [ "get", "symbolrank" ],
                "icon-image": [
                    "step",
                    [ "zoom" ],
                    [
                        "case",
                        [ "==", [ "get", "capital" ], 2 ],
                        [ "image",
                            [ "string", "border-dot-13-dark" ],
                            [ "string", "border-dot-13" ]
                        ],
                        [
                            "step",
                            [ "get", "symbolrank" ],
                            [ "image",
                                [ "string", "dot-11-dark" ],
                                [ "string", "dot-11" ]
                            ],
                            9,
                            [ "image",
                                [ "string", "dot-10-dark" ],
                                [ "string", "dot-10" ]
                            ],
                            11,
                            [ "image",
                                [ "string", "dot-9-dark" ],
                                [ "string", "dot-9" ]
                            ]
                        ]
                    ],
                    8,
                    ""
                ],
                "text-font": [ "DIN Pro Regular", "Arial Unicode MS Regular" ],
                "text-justify": "auto",
                "text-anchor": [
                    "step",
                    [ "zoom" ],
                    [ "get", "text_anchor" ],
                    8,
                    "center"
                ],
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                "text-max-width": 7
            },
            "paint": {
                "icon-image-cross-fade": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.0,
                    0.3,
                    1.0
                ],
                "text-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.28,
                    "hsl(0, 0%, 100%)",
                    0.3,
                    "hsl(0, 0%, 0%)"
                ],
                "text-halo-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    "hsl(0, 0%, 0%)",
                    0.3,
                    "hsl(0, 0%, 100%)"
                ],
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "settlement-major-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Place labels, place-labels" },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 2,
            "maxzoom": 15,
            "filter": [
                "all",
                [ "<=", [ "get", "filterrank" ], 3 ],
                [
                    "match",
                    [ "get", "class" ],
                    [ "settlement", "disputed_settlement" ],
                    [ "match", [ "get", "worldview" ], [ "all", "US" ], true, false ],
                    false
                ],
                [
                    "step",
                    [ "zoom" ],
                    false,
                    2,
                    [ "<=", [ "get", "symbolrank" ], 6 ],
                    4,
                    [ "<", [ "get", "symbolrank" ], 7 ],
                    6,
                    [ "<", [ "get", "symbolrank" ], 8 ],
                    7,
                    [ "<", [ "get", "symbolrank" ], 10 ],
                    10,
                    [ "<", [ "get", "symbolrank" ], 11 ],
                    11,
                    [ "<", [ "get", "symbolrank" ], 13 ],
                    12,
                    [ "<", [ "get", "symbolrank" ], 15 ],
                    13,
                    [ ">=", [ "get", "symbolrank" ], 11 ],
                    14,
                    [ ">=", [ "get", "symbolrank" ], 15 ]
                ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 45 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 2 ]
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate",
                    [ "cubic-bezier", 0.2, 0, 0.9, 1 ],
                    [ "zoom" ],
                    3,
                    [ "step", [ "get", "symbolrank" ], 13, 6, 11 ],
                    6,
                    [ "step", [ "get", "symbolrank" ], 18, 6, 16, 7, 14 ],
                    8,
                    [ "step", [ "get", "symbolrank" ], 20, 9, 16, 10, 14 ],
                    15,
                    [ "step", [ "get", "symbolrank" ], 24, 9, 20, 12, 16, 15, 14 ]
                ],
                "text-radial-offset": [
                    "step",
                    [ "zoom" ],
                    [ "match", [ "get", "capital" ], 2, 0.6, 0.55 ],
                    8,
                    0
                ],
                "symbol-sort-key": [ "get", "symbolrank" ],
                "icon-image": [
                    "step",
                    [ "zoom" ],
                    [
                        "case",
                        [ "==", [ "get", "capital" ], 2 ],
                        [ "image",
                            [ "string", "border-dot-13-dark" ],
                            [ "string", "border-dot-13" ]
                        ],
                        [
                            "step",
                            [ "get", "symbolrank" ],
                            [ "image",
                                [ "string", "dot-11-dark" ],
                                [ "string", "dot-11" ]
                            ],
                            9,
                            [ "image",
                                [ "string", "dot-10-dark" ],
                                [ "string", "dot-10" ]
                            ],
                            11,
                            [ "image",
                                [ "string", "dot-9-dark" ],
                                [ "string", "dot-9" ]
                            ]
                        ]
                    ],
                    8,
                    ""
                ],
                "text-font": [ "DIN Pro Medium", "Arial Unicode MS Regular" ],
                "text-justify": [
                    "step",
                    [ "zoom" ],
                    [
                        "match",
                        [ "get", "text_anchor" ],
                        [ "left", "bottom-left", "top-left" ],
                        "left",
                        [ "right", "bottom-right", "top-right" ],
                        "right",
                        "center"
                    ],
                    8,
                    "center"
                ],
                "text-anchor": [
                    "step",
                    [ "zoom" ],
                    [ "get", "text_anchor" ],
                    8,
                    "center"
                ],
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                "text-max-width": 7
            },
            "paint": {
                "icon-image-cross-fade": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    0.0,
                    0.3,
                    1.0
                ],
                "text-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.28,
                    "hsl(0, 0%, 100%)",
                    0.3,
                    "hsl(0, 0%, 0%)"
                ],
                "text-halo-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    "hsl(0, 0%, 0%)",
                    0.3,
                    "hsl(0, 0%, 100%)"
                ],
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "state-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Place labels, place-labels" },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 3,
            "maxzoom": 9,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "state", "disputed_state" ],
                    [ "match", [ "get", "worldview" ], [ "all", "US" ], true, false ],
                    false
                ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 45 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 2 ]
                ]
            ],
            "layout": {
                "text-size": [
                    "interpolate",
                    [ "cubic-bezier", 0.85, 0.7, 0.65, 1 ],
                    [ "zoom" ],
                    4,
                    [ "step", [ "get", "symbolrank" ], 9, 6, 8, 7, 7 ],
                    9,
                    [ "step", [ "get", "symbolrank" ], 21, 6, 16, 7, 14 ]
                ],
                "text-transform": "uppercase",
                "text-font": [ "DIN Pro Bold", "Arial Unicode MS Bold" ],
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                "text-letter-spacing": 0.15,
                "text-max-width": 6
            },
            "paint": {
                "text-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.28,
                    "hsl(0, 0%, 100%)",
                    0.3,
                    "hsl(0, 0%, 0%)"
                ],
                "text-halo-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    "hsl(0, 0%, 0%)",
                    0.3,
                    "hsl(0, 0%, 100%)"
                ],
                "text-halo-width": 1,
                "text-opacity": 0.5
            }
        },
        {
            "id": "country-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Place labels, place-labels" },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 1,
            "maxzoom": 10,
            "filter": [
                "all",
                [
                    "match",
                    [ "get", "class" ],
                    [ "country", "disputed_country" ],
                    [ "match", [ "get", "worldview" ], [ "all", "US" ], true, false ],
                    false
                ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 45 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 2 ]
                ]
            ],
            "layout": {
                "icon-image": "",
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                "text-line-height": 1.1,
                "text-max-width": 6,
                "text-font": [ "DIN Pro Medium", "Arial Unicode MS Regular" ],
                "text-radial-offset": [ "step", [ "zoom" ], 0.6, 8, 0 ],
                "text-justify": [
                    "step",
                    [ "zoom" ],
                    [
                        "match",
                        [ "get", "text_anchor" ],
                        [ "left", "bottom-left", "top-left" ],
                        "left",
                        [ "right", "bottom-right", "top-right" ],
                        "right",
                        "center"
                    ],
                    7,
                    "auto"
                ],
                "text-size": [
                    "interpolate",
                    [ "cubic-bezier", 0.2, 0, 0.7, 1 ],
                    [ "zoom" ],
                    1,
                    [ "step", [ "get", "symbolrank" ], 11, 4, 9, 5, 8 ],
                    9,
                    [ "step", [ "get", "symbolrank" ], 22, 4, 19, 5, 17 ]
                ]
            },
            "paint": {
                "icon-opacity": [
                    "step",
                    [ "zoom" ],
                    [ "case", [ "has", "text_anchor" ], 1, 0 ],
                    7,
                    0
                ],
                "text-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.28,
                    "hsl(0, 0%, 100%)",
                    0.3,
                    "hsl(0, 0%, 0%)"
                ],
                "text-halo-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    "hsl(0, 0%, 0%)",
                    0.3,
                    "hsl(0, 0%, 100%)"
                ],
                "text-halo-width": 1.25
            }
        },
        {
            "id": "continent-label",
            "type": "symbol",
            "metadata": { "mapbox:group": "Place labels, place-labels" },
            "source": "composite",
            "source-layer": "natural_label",
            "minzoom": 0.75,
            "maxzoom": 3,
            "filter": [
                "all",
                [ "==", [ "get", "class" ], "continent" ],
                [
                    "case",
                    [ "<=", [ "pitch" ], 45 ],
                    true,
                    [ "<=", [ "distance-from-center" ], 2 ]
                ]
            ],
            "layout": {
                "text-field": [ "coalesce", [ "get", "name_en" ], [ "get", "name" ] ],
                "text-line-height": 1.1,
                "text-max-width": 6,
                "text-font": [ "DIN Pro Medium", "Arial Unicode MS Regular" ],
                "text-size": [
                    "interpolate",
                    [ "exponential", 0.5 ],
                    [ "zoom" ],
                    0,
                    10,
                    2.5,
                    15
                ],
                "text-transform": "uppercase",
                "text-letter-spacing": 0.05
            },
            "paint": {
                "text-emissive-strength": 1,
                "text-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.28,
                    "hsl(0, 0%, 100%)",
                    0.3,
                    "hsl(0, 0%, 0%)"
                ],
                "text-halo-color": [
                    "interpolate",
                    [ "linear" ],
                    [ "measure-light", "brightness" ],
                    0.25,
                    "hsl(0, 0%, 0%)",
                    0.3,
                    "hsl(0, 0%, 100%)"
                ],
                "text-halo-width": 1.5,
                "text-opacity": [
                    "interpolate",
                    [ "linear" ],
                    [ "zoom" ],
                    0,
                    0.8,
                    1.5,
                    0.5,
                    2.5,
                    0
                ]
            }
        }
    ],
    "created": "2023-06-20T17:31:18.306Z",
    "modified": "2023-06-28T10:59:54.682Z",
    "id": "standard-beta",
    "owner": "mapbox",
    "visibility": "public",
    "protected": true,
    "draft": false,
    "fog": {
        "range": [
            "interpolate",
            [ "linear" ],
            [ "measure-light", "brightness" ],
            0,
            [ "literal", [ 0, 5 ] ],
            0.2,
            [ "literal", [ 0, 12 ] ]
        ],
        "color": [
            "interpolate",
            [
                "exponential",
                1.2
            ],
            [
                "zoom"
            ],
            5.0,
            [
                "interpolate",
                [ "linear" ],
                [ "measure-light", "brightness" ],
                0.1,
                "hsl(240, 9%, 55%)",
                0.4,
                "hsl(0, 0%, 100%)"
            ],
            7.0,
            [
                "interpolate",
                [ "linear" ],
                [ "measure-light", "brightness" ],
                0.0,
                "hsla(213, 63%, 20%, 0.9)",
                0.3,
                "hsla(30, 75%, 77%, 0.8)",
                0.4,
                "hsla(0, 0%, 100%, 1.0)"
            ]
        ],
        "high-color": [
            "interpolate",
            [
                "exponential",
                1.2
            ],
            [
                "zoom"
            ],
            5.0,
            [
                "interpolate",
                [ "linear" ],
                [ "measure-light", "brightness" ],
                0.1,
                "hsl(215, 100%, 20%)",
                0.4,
                "hsl(215, 100%, 51%)"
            ],
            7.0,
            [
                "interpolate",
                [ "linear" ],
                [ "measure-light", "brightness" ],
                0.0,
                "hsl(228, 38%, 20%)",
                0.05,
                "hsl(360, 100%, 85%)",
                0.2,
                "hsl(205, 88%, 86%)",
                0.4,
                "hsl(0, 0%, 100%)"
            ]
        ],
        "space-color": [
            "interpolate",
            [
                "exponential",
                1.2
            ],
            [
                "zoom"
            ],
            5.0,
            "hsl(211, 84%, 9%)",
            7.0,
            [
                "interpolate",
                [ "linear" ],
                [ "measure-light", "brightness" ],
                0.0,
                "hsl(211, 84%, 17%)",
                0.2,
                "hsl(210, 40%, 30%)",
                0.4,
                "hsl(210, 100%, 80%)"
            ]
        ],
        "horizon-blend": [
            "interpolate",
            [ "exponential", 1.2 ],
            [ "zoom" ],
            5,
            0.01,
            7,
            0.03
        ],
        "star-intensity": [
            "interpolate",
            [
                "exponential",
                1.2
            ],
            [
                "zoom"
            ],
            5.0,
            0.2,
            7.0,
            [
                "interpolate",
                [ "exponential", 1.2 ],
                [ "measure-light", "brightness" ],
                0.1,
                0.1,
                0.3,
                0
            ]
        ]
    },
    "lights": [
        {
            "id": "ambient",
            "type": "ambient",
            "properties": {
                "color":  "hsl(0, 0%, 100%)",
                "intensity": 0.8
            }
        },
        {
            "id": "directional",
            "type": "directional",
            "properties": {
                "direction": [
                    180,
                    20
                ],
                "color": "hsl(0, 0%, 100%)",
                "intensity": 0.2,
                "cast-shadows": true,
                "shadow-intensity": 1
            }
        }
    ]
}