import CONSTANTS from './constants.js'

export function makePerspectiveMatrix(fovy, aspect, near, far, out) {
    const f = 1.0 / Math.tan(fovy / 2), nf = 1 / (near - far);

    out.elements = [
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (far + near) * nf, -1,
        0, 0, (2 * far * near) * nf, 0
    ];
    return out;
}

export function makeOrthographicMatrix(left, right, top, bottom, near, far, out) {

    const w = 1.0 / (right - left);
    const h = 1.0 / (top - bottom);
    const p = 1.0 / (far - near);

    const x = (right + left) * w;
    const y = (top + bottom) * h;
    const z = near * p;

    out.elements = [
        2 * w, 0, 0, 0,
        0, 2 * h, 0, 0,
        0, 0, -1 * p, 0,
        -x, -y, -z, 1
    ]
    return out;
}

export function projectedUnitsPerMeter(latitude) {
    return Math.abs(CONSTANTS.WORLD_SIZE / Math.cos(CONSTANTS.DEG2RAD * latitude) / CONSTANTS.EARTH_CIRCUMFERENCE);
}

export function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
}


export function projectToWorld(coords, out) {
    out.x = -CONSTANTS.MERCATOR_A * CONSTANTS.DEG2RAD * coords[0] * CONSTANTS.PROJECTION_WORLD_SIZE;
    out.y = -CONSTANTS.MERCATOR_A * Math.log(Math.tan((Math.PI * 0.25) + (0.5 * CONSTANTS.DEG2RAD * coords[1]))) * CONSTANTS.PROJECTION_WORLD_SIZE;
    out.z = coords[2] ? coords[2] * projectedUnitsPerMeter(coords[1]) : 0;
    return out
}

export function unprojectFromWorld(worldUnits, out) {
    out[0] = -worldUnits.x / (CONSTANTS.MERCATOR_A * CONSTANTS.DEG2RAD * CONSTANTS.PROJECTION_WORLD_SIZE);
    out[1] = 2 * (Math.atan(Math.exp(worldUnits.y / (CONSTANTS.PROJECTION_WORLD_SIZE * (-CONSTANTS.MERCATOR_A)))) - Math.PI / 4) / CONSTANTS.DEG2RAD;
    out[2] = (worldUnits.z || 0) / projectedUnitsPerMeter(out[1]);
    return out
}

export function degToRadian(deg) {
    return deg * CONSTANTS.DEG2RAD
}

export function radianToDeg(radian) {
    return radian * CONSTANTS.RAD2DEG
}
