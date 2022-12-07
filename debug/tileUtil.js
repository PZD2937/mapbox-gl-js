import {md5} from "@/util/md5_ch";

export function formatNow() {
    let re = '';
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    re += year + (month > 10 ? month : '0' + month) + (day > 10 ? day : '0' + day);
    return re
}

/**
 * 腾讯 计算y偏移
 * @param data
 * @param x
 * @param y
 * @param z
 * @return {number}
 */
export function getTXDy(data, x, y, z) {
    y = y || data.y;
    z = z || data.z;
    return Math.pow(2, z) - 1 - y;
}

/**
 * 腾讯 计算x16
 * @param data
 * @param x
 * @param y
 * @param z
 * @return {number}
 */
export function getTXX16(data, x, y, z) {
    x = x || data.x
    return Math.floor(x / 16)
}

/**
 * 腾讯 计算Y16
 * @param data
 * @param x
 * @param y
 * @param z
 * @return {number}
 */
export function getTXY16(data, x, y, z) {
    y = y || data.y;
    z = z || data.z;
    const dy = Math.pow(2, z) - 1 - y;
    return Math.floor(dy / 16);
}


/**
 * 加密
 * @return {string}
 */
export function encrypt() {
    const date = Math.floor(Date.now() / 1000);
    const md5Str = md5(date + 'EfAvGE#aR@bC@VvdC223$xC23sWXR$vf').toUpperCase();
    return `${date}/${md5Str}`
}

