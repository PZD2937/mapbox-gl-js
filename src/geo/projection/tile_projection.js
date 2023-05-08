// @flow
import LngLat from "../lng_lat.js";
import {ProjectedPoint} from "./projection.js";
import {CanonicalTileID} from "../../source/tile_id.js";
// import transformLngLat from "./coordinates_transform.js";

// const delta = 1E-7;
// web-Mercator 投影切片使用的地球半径为6378137
// @see https://zh.wikipedia.org/wiki/Web%E5%A2%A8%E5%8D%A1%E6%89%98%E6%8A%95%E5%BD%B1
/*const earthCircumference = 2 * 6378137 * Math.PI;

function getResolution(zoom: number, projection: string): number {
    let resolution;
    switch (projection) {
        case 'EPSG:4326':
            resolution = 180 / (Math.pow(2, zoom) * 128)
            break;
        case 'BAIDU':
            resolution = Math.pow(2, 18 - zoom)
            break;
        default:
            resolution = earthCircumference / (256 * Math.pow(2, zoom))
    }
    return resolution
}*/

const Common = {}

const EPSG3857 = {
    direction: {x: 1, y: 1},
    lngLatToTile(lngLat: LngLat, z: number): CanonicalTileID {
        let sin = Math.sin(lngLat.lat * Math.PI / 180),
            z2 = Math.pow(2, z),
            x = z2 * (lngLat.lng / 360 + 0.5),
            y = z2 * (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);
        // Wrap Tile X
        x = x % z2;
        if (x < 0) x = x + z2;
        return new CanonicalTileID(z, Math.floor(x), Math.floor(y))
    }
}

const EPSG4326 = {
    direction: {x: 1, y: 1},
    lngLatToTile(lngLat: LngLat, z: number): CanonicalTileID {
        const delta = 1E-7;
        const resolution = 180 / (Math.pow(2, z) * 128);
        const s = 256 * resolution;
        const x = Math.floor((lngLat.lng + 180 + delta) / s);
        const y = -Math.ceil((lngLat.lat - 90 - delta) / s);
        return new CanonicalTileID(z, x, y)
    }
}


const BAIDU = {
    direction: {x: 1, y: -1},
    EARTHRADIUS: 6370996.81,
    MCBAND: [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
    LLBAND: [75, 60, 45, 30, 15, 0],
    MC2LL: [
        [1.410526172116255e-8, 0.00000898305509648872, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 17337981.2],
        [-7.435856389565537e-9, 0.000008983055097726239, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86],
        [-3.030883460898826e-8, 0.00000898305509983578, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
        [-1.981981304930552e-8, 0.000008983055099779535, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
        [3.09191371068437e-9, 0.000008983055096812155, 0.00006995724062, 23.10934304144901, -0.00023663490511, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
        [2.890871144776878e-9, 0.000008983055095805407, -3.068298e-8, 7.47137025468032, -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 826088.5]
    ],
    LL2MC: [
        [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
        [0.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5],
        [0.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5],
        [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
        [-0.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
        [-0.0003218135878613132, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
    ],

    project: function (lng: number, lat: number): ProjectedPoint {
        return this.convertLL2MC(lng, lat);
    },

    unproject: function (x: number, y: number): LngLat {
        return this.convertMC2LL(x, y);
    },

    convertMC2LL: function (x, y) {
        let matrix;
        for (let i = 0, len = this.MCBAND.length; i < len; i++) {
            if (Math.abs(y) >= this.MCBAND[i]) {
                matrix = this.MC2LL[i];
                break;
            }
        }
        const coords = this.convertor(x, y);
        return new LngLat(coords.x, coords.y, matrix);
    },
    convertLL2MC: function (lng, lat) {
        let matrix;
        lng = this.getLoop(lng, -180, 180);
        lat = this.getRange(lat, -74, 74);

        const point = {x: lng, y: lat, z: 0};
        for (let i = 0, len = this.LLBAND.length; i < len; i++) {
            if (point.y >= this.LLBAND[i]) {
                matrix = this.LL2MC[i];
                break;
            }
        }
        if (!matrix) {
            for (let i = this.LLBAND.length - 1; i >= 0; i--) {
                if (point.y <= -this.LLBAND[i]) {
                    matrix = this.LL2MC[i];
                    break;
                }
            }
        }
        return this.convertor(lng, lat, matrix);
    },
    convertor: function (lng, lat, matrix) {
        if (!matrix) {
            return {x: 0, y: 0, z: 0};
        }
        let x = matrix[0] + matrix[1] * Math.abs(lng);
        const n = Math.abs(lat) / matrix[9];
        let y = matrix[2] + matrix[3] * n + matrix[4] * n * n +
            matrix[5] * n * n * n + matrix[6] * n * n * n * n +
            matrix[7] * n * n * n * n * n +
            matrix[8] * n * n * n * n * n * n;
        x *= (lng < 0 ? -1 : 1);
        y *= (lat < 0 ? -1 : 1);
        return {x, y, z: 0};
    },
    getRange: function (num: number, min: number, max: number) {
        if (min != null) {
            num = Math.max(num, min);
        }
        if (max != null) {
            num = Math.min(num, max);
        }
        return num;
    },
    getLoop: function (num: number, min: number, max: number) {
        if (num === Infinity) {
            return max;
        } else if (num === -Infinity) {
            return min;
        }
        while (num > max) {
            num -= max - min;
        }
        while (num < min) {
            num += max - min;
        }
        return num;
    },

    getResolution(zoom) {
        return Math.pow(2, zoom - 18)
    },

    lngLatToTile(lngLat: LngLat, zoom: number): CanonicalTileID {
        const point = this.project(lngLat.lng, lngLat.lat);
        const resolution = this.getResolution(zoom);
        // const s = resolution / 256;
        const x = Math.floor(point.x * resolution / 256);
        const y = Math.floor(point.y * resolution / 256);
        // console.log({x, y})
        return new CanonicalTileID(zoom, x, y)
    },

    tileToLngLat(tileID: CanonicalTileID): LngLat {
        const resolution = this.getResolution(tileID.z);
        const x = tileID.x / resolution;
        const y = tileID.y / resolution;
        return this.unproject(x, y)
    },

    lngLatToPixel(lngLat: LngLat, zoom: number): { x: number, y: number } {
        const resolution = this.getResolution(zoom);
        const tile = lngLatToTile(lngLat, zoom);
        const point = this.project(lngLat.lng, lngLat.lat);
        const x = Math.floor(point.x * resolution - tile.x * 256);
        const y = Math.floor(point.y * resolution - tile.y * 256);
        return {x, y}
    }

}
// self.BAIDU = BAIDU

export function getSpatialReference(projection: string) {
    projection = typeof projection === 'string' ? projection.toUpperCase() : '';
    let spatialReference;
    switch (projection) {
        case 'EPSG:4326':
            spatialReference = EPSG4326;
            break;
        case 'BAIDU':
            spatialReference = BAIDU;
            break;
        default:
            spatialReference = EPSG3857
    }
    return spatialReference
}


export function getTileSystem(projection) {
    const sr = getSpatialReference(projection);
    return {direction: sr.direction, fullExtent: sr.fullExtent}
}

export function lngLatToTile(lngLat: LngLat, z: number, projection: string): CanonicalTileID {
    const sr = getSpatialReference(projection);
    return sr.lngLatToTile(lngLat, z)
}

export function lngLatToPixel(lngLat: LngLat, zoom: number, imgSize: number): { x: number, y: number } {
    if (!imgSize) imgSize = 256;
    const wordSize = 1 << zoom;
    let sinLat = Math.sin(lngLat.lat * Math.PI / 180);

    // Truncating to 0.9999 effectively limits latitude to 89.189. This is
    // about a third of a tile past the edge of the world tile.
    sinLat = Math.min(Math.max(sinLat, -0.9999), 0.9999);

    const x = imgSize * ((lngLat.lng + 180) / 360) * wordSize;
    const y = imgSize * (0.5 - Math.log((1 + sinLat) / (1 - sinLat)) / (4 * Math.PI)) * wordSize;
    return {
        x: Math.floor(x) % imgSize,
        y: Math.floor(y) % imgSize
    }
}

// console.log(lngLatToTile({lng: 106.505334, lat: 29.618177}, 17))
// console.log(lngLatToTile(transformLngLat({lng: 106.505334, lat: 29.618177}, 'WGS84', 'BAIDU'), 17, 'BAIDU'))
