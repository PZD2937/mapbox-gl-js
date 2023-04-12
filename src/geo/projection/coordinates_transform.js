// @flow
import LngLat from "../lng_lat.js";

/// Krasovsky 1940 ellipsoid
/// @const
const GCJ_A = 6378245
const GCJ_EE = 0.00669342162296594323 // f = 1/298.3; e^2 = 2*f - f**2

/// Epsilon to use for "exact" iterations.
/// Wanna troll? Use Number.EPSILON. 1e-13 in 15 calls for gcj.
/// @const
const PRC_EPS = 1e-5

/// Baidu's artificial deviations
/// @const
const BD_DLAT = 0.0060
const BD_DLON = 0.0065

/// Mean Earth Radius
/// @const
// const EARTH_R = 6371000
function pointInChina(lngLat: LngLat) {
    return lngLat.lat >= 0.8293 && lngLat.lat <= 55.8271 &&
        lngLat.lng >= 72.004 && lngLat.lng <= 137.8347
}

function coordDiff(a: LngLat, b: LngLat): LngLat {
    return new LngLat(a.lng - b.lng, a.lat - b.lat)
}

function factory(input, verify) {

}

/**
 * 计算wgs84到gcj02 的偏移量，单位m
 * @param {LngLat} lngLat
 * @return {number[]}
 */
function calculateWGSToGCJOffset(lngLat: LngLat) {
    if (!pointInChina(lngLat)) return [0, 0];
    const x = lngLat.lng - 105, y = lngLat.lat - 35;
    const dLat_m = -100 + 2 * x + 3 * y + 0.2 * y * y + 0.1 * x * y +
        0.2 * Math.sqrt(Math.abs(x)) + (
            2 * Math.sin(x * 6 * Math.PI) + 2 * Math.sin(x * 2 * Math.PI) +
            2 * Math.sin(y * Math.PI) + 4 * Math.sin(y / 3 * Math.PI) +
            16 * Math.sin(y / 12 * Math.PI) + 32 * Math.sin(y / 30 * Math.PI)
        ) * 20 / 3

    const dLon_m = 300 + x + 2 * y + 0.1 * x * x + 0.1 * x * y +
        0.1 * Math.sqrt(Math.abs(x)) + (
            2 * Math.sin(x * 6 * Math.PI) + 2 * Math.sin(x * 2 * Math.PI) +
            2 * Math.sin(x * Math.PI) + 4 * Math.sin(x / 3 * Math.PI) +
            15 * Math.sin(x / 12 * Math.PI) + 30 * Math.sin(x / 30 * Math.PI)
        ) * 20 / 3
    return [dLon_m, dLat_m]
}


function wgsToGcj(lngLat: LngLat, offset?: number[]): LngLat {
    offset = offset || calculateWGSToGCJOffset(lngLat);
    if (offset[0] === 0 && offset[1] === 0) return lngLat;
    const radLat = lngLat.lat / 180 * Math.PI;
    const magic = 1 - GCJ_EE * Math.pow(Math.sin(radLat), 2) // just a common expr
    const lat_deg_arclen = (Math.PI / 180) * (GCJ_A * (1 - GCJ_EE)) / Math.pow(magic, 1.5);
    const lon_deg_arclen = (Math.PI / 180) * (GCJ_A * Math.cos(radLat) / Math.sqrt(magic));
    const lng = lngLat.lng + (offset[0] / lon_deg_arclen);
    const lat = lngLat.lat + (offset[1] / lat_deg_arclen)
    return new LngLat(lng, lat);
}

export function gcjToWgs(lngLat: LngLat): LngLat {
    return coordDiff(lngLat, coordDiff(wgsToGcj(lngLat), lngLat))
}

function gcjToBd(lngLat: LngLat): LngLat {
    const x = lngLat.lng, y = lngLat.lat;
    const r = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * Math.PI * 3000 / 180)
    const θ = Math.atan2(y, x) + 0.000003 * Math.cos(x * Math.PI * 3000 / 180);
    return new LngLat(r * Math.cos(θ) + BD_DLON, r * Math.sin(θ) + BD_DLAT)
}

function bdToGcj(lngLat: LngLat): LngLat {
    const x = lngLat.lng - BD_DLON, y = lngLat.lat - BD_DLAT;
    const r = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * Math.PI * 3000 / 180);
    const θ = Math.atan2(y, x) - 0.000003 * Math.cos(x * Math.PI * 3000 / 180);
    return new LngLat(r * Math.cos(θ), r * Math.sin(θ))
}


function wgsToBd(lngLat: LngLat): LngLat {
    return gcjToBd(wgsToGcj(lngLat))
}

function bdToWgs(lngLat: LngLat): LngLat {
    return gcjToWgs(bdToGcj(lngLat))
}

const base = {
    'wgs84->gcj02': wgsToGcj,
    'gcj02->wgs84': gcjToWgs,
    'wgs84->baidu': wgsToBd,
    'baidu->wgs84': bdToWgs,
    'gcj02->baidu': gcjToBd,
    'baidu->gcj02': bdToGcj
}

export default function transformLngLat(lngLat: LngLat, current: string, target: string): LngLat {
    const key = `${current.toLowerCase()}->${target.toLowerCase()}`;
    const transform = base[key];
    if(!transform){
        throw new Error(`未实现${key}的转换`)
    }
    return transform(lngLat)
}
