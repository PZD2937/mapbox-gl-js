// 定义一些常量
const x_PI = 3.14159265358979324 * 3000.0 / 180.0;
const PI = 3.1415926535897932384626;
const a = 6378245.0;
const ee = 0.00669342162296594323;

/**
 * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02) 的转换
 * 即 百度 转 谷歌、高德
 * @param bd_lng
 * @param bd_lat
 * @returns {*[]}
 */
export function bd09togcj02(bd_lng, bd_lat) {
    bd_lng = Number(bd_lng);
    bd_lat = Number(bd_lat);
    const x = bd_lng - 0.0065;
    const y = bd_lat - 0.006;
    const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_PI);
    const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_PI);
    const gg_lng = z * Math.cos(theta);
    const gg_lat = z * Math.sin(theta);
    return [gg_lng, gg_lat]
}

/**
 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
 * 即 谷歌、高德 转 百度
 * @param lng
 * @param lat
 * @returns {number[]}
 */
export function gcj02tobd09(lng, lat) {
    lat = Number(lat);
    lng = Number(lng);
    let z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_PI);
    let theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_PI);
    let bd_lng = z * Math.cos(theta) + 0.0065;
    let bd_lat = z * Math.sin(theta) + 0.006;
    return [bd_lng, bd_lat]
}

/**
 * WGS-84 转 GCJ-02
 * @param lng
 * @param lat
 * @returns {number[]}
 */
export function wgs84togcj02(lng, lat) {
    lat = Number(lat);
    lng = Number(lng);
    if (out_of_china(lng, lat)) {
        return [lng, lat]
    } else {
        let dlat = transformlat(lng - 105.0, lat - 35.0);
        let dlng = transformlng(lng - 105.0, lat - 35.0);
        const radlat = lat / 180.0 * PI;
        let magic = Math.sin(radlat);
        magic = 1 - ee * magic * magic;
        let sqrtmagic = Math.sqrt(magic);
        dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
        dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
        let mglat = lat + dlat;
        let mglng = lng + dlng;
        return [mglng, mglat]
    }
}

/**
 * GCJ-02 转换为 WGS-84
 * @param lng
 * @param lat
 * @returns {number[]}
 */
export function gcj02towgs84(lng, lat) {
    lat = Number(lat);
    lng = Number(lng);
    if (out_of_china(lng, lat)) {
        return [lng, lat]
    } else {
        let dlat = transformlat(lng - 105.0, lat - 35.0);
        let dlng = transformlng(lng - 105.0, lat - 35.0);
        const radlat = lat / 180.0 * PI;
        let magic = Math.sin(radlat);
        magic = 1 - ee * magic * magic;
        let sqrtmagic = Math.sqrt(magic);
        dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
        dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
        const mglat = lat + dlat;
        const mglng = lng + dlng;
        return [lng * 2 - mglng, lat * 2 - mglat]
    }
}

/**
 * 墨卡托投影（4326） 转 百度坐标系 (BD-09)
 * @param lng
 * @param lat
 * @returns {number[]}
 */
export function wgs84tobd09(lng, lat) {
    let res = wgs84togcj02(lng, lat)
    return gcj02tobd09(res[0], res[1])
}

/**
 * 百度坐标系 (BD-09) 转 墨卡托投影（4326）
 * @param bd_lon
 * @param bd_lat
 * @returns {(number)[]}
 */
export function bd09towgs84(bd_lon, bd_lat) {
    let res = bd09togcj02(bd_lon, bd_lat)
    return gcj02towgs84(res[0], res[1])
}

export function transformlat(lng, lat) {
    lat = Number(lat);
    lng = Number(lng);
    let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
    return ret
}

export function transformlng(lng, lat) {
    lat = Number(lat);
    lng = Number(lng);
    let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
    return ret
}

/**
 * 判断是否在国内，不在国内则不做偏移
 * @param lng
 * @param lat
 * @returns {boolean}
 */
function out_of_china(lng, lat) {
    lat = Number(lat);
    lng = Number(lng);
    // 纬度 3.86~53.55, 经度 73.66~135.05
    return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55);
}

const transformFunList = {
    'EPSG:3857': {
        'EPSG:4326': gcj02towgs84,
        'baidu': gcj02tobd09
    },
    'EPSG:4326': {
        'EPSG:3857': wgs84togcj02,
        'baidu': wgs84tobd09
    },
    'baidu': {
        'EPSG:3857': bd09togcj02,
        'EPSG:4326': bd09towgs84
    }
}

/**
 * 坐标转换
 * @param local {coordinate} 坐标
 * @param current {string} 当前坐标系
 * @param target {string} 目标坐标系
 * @param outType {'array' | 'object'} 输出类型
 * @return {(number)[]|{x: number, y: number}}
 */
export function transformCoordinate(local, current, target, outType = 'array') {
    const res = JSON.parse(JSON.stringify(local));
    if (!current) current = 'EPSG:3857';
    if (!target) target = 'EPSG:3857';
    current = current.replace(/EPSG:?/g, 'EPSG:');
    target = target.replace(/EPSG:?/g, 'EPSG:');
    if (current === 'CGCS2000') current = 'EPSG:4326';
    if (target === 'CGCS2000') target = 'EPSG:4326';
    const x = res[0] || res.x || res.lng || res.lon || 0;
    const y = res[1] || res.y || res.lat || 0;
    if (current === target) {
        return outType === 'array' ? [x, y] : {x, y};
    }
    if (!transformFunList[current]) Error(`${current} to ${target} 未支持的坐标转换`);
    const transformFn = transformFunList[current][target];
    if (!transformFn) Error(`${current} to ${target} 未支持的坐标转换`);
    const result = transformFn(x, y);
    return outType === 'array' ? result : {x: result[0], y: result[1]}
}
