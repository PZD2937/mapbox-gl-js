// @flow
import LngLat, {LngLatBounds} from "../lng_lat";
import {CanonicalTileID} from "../../source/tile_id.js";
import {clamp} from "../../util/util.js";

import type {ProjectedPoint} from "./projection.js";
import type {RasterProjection} from "../../style-spec/types";

// const delta = 1E-7;
// web-Mercator 投影切片使用的地球半径为6378137
// @see https://zh.wikipedia.org/wiki/Web%E5%A2%A8%E5%8D%A1%E6%89%98%E6%8A%95%E5%BD%B1
/*const earthCircumference = 2 * 6378137 * Math.PI;*/

interface ProjectionSystem {
    // 方向
    direction: { x: number, y: number },
    // 需要变化的范围
    transformExtent?: [number, number, number, number],
    // 边界范围
    fullExtent?: [number, number, number, number],
    lngLatToPixel?: (lngLat: LngLat, z: number) => { x: number, y: number },
    lngLatToTile: (lngLat: LngLat, z: number) => CanonicalTileID,
}

// see https://cntchen.github.io/2016/05/09/%E5%9B%BD%E5%86%85%E4%B8%BB%E8%A6%81%E5%9C%B0%E5%9B%BE%E7%93%A6%E7%89%87%E5%9D%90%E6%A0%87%E7%B3%BB%E5%AE%9A%E4%B9%89%E5%8F%8A%E8%AE%A1%E7%AE%97%E5%8E%9F%E7%90%86/

const GCJ02 = {
    transformExtent: [73.66, 3.86, 135.05, 53.55],
    direction: {x: 1, y: 1},
    lngLatToTile(lngLat: LngLat, z: number): CanonicalTileID {
        const wordSize = (1 << z);
        const x = Math.floor((lngLat.lng + 180) / 360 * wordSize) % wordSize;

        const latRad = lngLat.lat * Math.PI / 180;
        const temp = (1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2;
        const y = clamp(Math.floor(temp * wordSize), 0, wordSize - 1);
        return new CanonicalTileID(z, x, y);
    }
} as ProjectionSystem;

const EPSG4326 = {
    direction: {x: 1, y: 1},
    lngLatToTile(lngLat: LngLat, z: number): CanonicalTileID {
        const delta = 1E-7;
        const worldSize = 1 << z;
        const resolution = 180 / (worldSize * 128);
        const s = 256 * resolution;
        const x = Math.floor((lngLat.lng + 180 + delta) / s);
        const y = -Math.ceil((lngLat.lat - 90 - delta) / s);
        return new CanonicalTileID(z, Math.min(x, worldSize - 1), Math.min(y, worldSize - 1));
    }
};

const BAIDU = {
    fullExtent: [0, 0, 180, 90],
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

    project(lng: number, lat: number): ProjectedPoint {
        return this.convertLL2MC(lng, lat);
    },

    unproject(x: number, y: number): LngLat {
        return this.convertMC2LL(x, y);
    },

    convertMC2LL(x, y) {
        let matrix;
        for (let i = 0, len = this.MCBAND.length; i < len; i++) {
            if (Math.abs(y) >= this.MCBAND[i]) {
                matrix = this.MC2LL[i];
                break;
            }
        }
        const coords = this.convertor(x, y, matrix);
        return new LngLat(coords.x, coords.y);
    },
    convertLL2MC(lng, lat) {
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
            for (let i = 0; i < this.LLBAND.length; i++) {
                if (point.y <= -this.LLBAND[i]) {
                    matrix = this.LL2MC[i];
                    break;
                }
            }
        }
        return this.convertor(lng, lat, matrix);
    },
    convertor(lng, lat, matrix) {
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
    getRange(num: number, min: number, max: number) {
        if (min != null) {
            num = Math.max(num, min);
        }
        if (max != null) {
            num = Math.min(num, max);
        }
        return num;
    },
    getLoop(num: number, min: number, max: number) {
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

    // 图层分辨率  m/pixel
    getResolution(zoom: number, lat: number): number {
        return Math.pow(2, 18 - zoom) * Math.cos(lat);
    },

    // 像素密度 pixel/m
    getPixelDensity(zoom: number): number {
        return Math.pow(2, zoom - 18); // * Math.cos(lat)
    },

    lngLatToTile(lngLat: LngLat, zoom: number): CanonicalTileID {
        const point = this.project(lngLat.lng, lngLat.lat);
        const s = this.getPixelDensity(zoom);
        const x = Math.floor(point.x * s / 256);
        const y = Math.floor(point.y * s / 256);
        const worldSize = (1 << zoom) - 1;
        return new CanonicalTileID(zoom, clamp(x, 0, worldSize), clamp(y, 0, worldSize));
    },

    tileToLngLat(tileID: CanonicalTileID): LngLat {
        const s = this.getPixelDensity(tileID.z);
        const x = (tileID.x * 256) / s;
        const y = (tileID.y * 256) / s;
        return this.unproject(x, y);
    },

    lngLatToPixel(lngLat: LngLat, zoom: number): { x: number, y: number } {
        const s = this.getPixelDensity(zoom, lngLat.lat);
        const point = this.project(lngLat.lng, lngLat.lat);
        const x = Math.floor(Math.ceil((point.x * s) % 256));
        const y = Math.floor(256 - (point.y * s) % 256);
        return {x, y};
    }

} as ProjectionSystem;

export function getSpatialReference(projection: RasterProjection) {
    switch (projection) {
    case 'BAIDU':
        return BAIDU;
    case "GCJ02":
        return GCJ02;
    default:
        throw Error(`不支持的投影类型 ${projection}`);
    }
}

export function getTileSystem(projection: RasterProjection) {
    const sr = getSpatialReference(projection);
    return {
        direction: sr.direction,
        fullExtent: sr.fullExtent ? new LngLatBounds(sr.fullExtent) : null,
        transformExtent: sr.transformExtent ? new LngLatBounds(sr.transformExtent) : null
    };
}

export function lngLatToTile(lngLat: LngLat, z: number, projection: RasterProjection): CanonicalTileID {
    const sr = getSpatialReference(projection);
    return sr.lngLatToTile(lngLat, z);
}

/**
 * 计算经纬度在z层级瓦片上的坐标
 * @param {LngLat} lngLat
 * @param {number} zoom
 * @param {string} projection
 * @return {{x: number, y: number}}
 */
export function lngLatToPixel(lngLat: LngLat, zoom: number, projection: RasterProjection): { x: number, y: number } {
    const spatialReference = getSpatialReference(projection);
    if (spatialReference && spatialReference.lngLatToPixel) {
        return spatialReference.lngLatToPixel(lngLat, zoom);
    }
    const wordSize = 1 << zoom;
    let sinLat = Math.sin(lngLat.lat * Math.PI / 180);

    // Truncating to 0.9999 effectively limits latitude to 89.189. This is
    // about a third of a tile past the edge of the world tile.
    sinLat = clamp(sinLat, -0.9999, 0.9999);

    const x = 256 * ((lngLat.lng + 180) / 360) * wordSize;
    const y = 256 * (0.5 - Math.log((1 + sinLat) / (1 - sinLat)) / (4 * Math.PI)) * wordSize;
    return {
        x: Math.floor(x % 256),
        y: Math.floor(y % 256)
    };
}

