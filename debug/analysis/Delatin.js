
// 比较相同坐标
function equalCoords(a, b) {
    if (!a || !b) return false;
    return a[0] === b[0] && a[1] === b[1];
}

// 避免多边形边长3点一线
function filterCoords(coords) {
    let i = coords.length;
    while (i--) {
        // 相邻重复坐标
        if (equalCoords(coords[i], coords[i + 1])) {
            // 删除
            coords.splice(i, 1);
        } else if (equalCoords(coords[i], coords[i + 2])) {
            // 三点一线，删除这两条边
            coords.splice(i, 2);
        }
    }
    return coords;
}

function getBbox(coords) {
    let xmin = Infinity, ymin = Infinity, xmax = -Infinity, ymax = -Infinity;
    for (let i = 0; i < coords.length; i++) {
        xmin = Math.min(coords[i][0], xmin);
        ymin = Math.min(coords[i][1], ymin);
        xmax = Math.max(coords[i][0], xmax);
        ymax = Math.max(coords[i][1], ymax);
    }
    return {xmin, ymin, xmax, ymax}
}

// 点在面内, 不支持有孔多边形
function booleanPointInPolygon(point, coords) {
    if (equalCoords(coords[0], coords[coords.length - 1])) coords.pop();
    const x = point[0], y = point[1];
    let inside = false;
    for (let i = 0, j = coords.length - 1; i < coords.length; j = i++) {
        const xi = coords[i][0], yi = coords[i][1];
        const xj = coords[j][0], yj = coords[j][1];
        if (((yi > y) !== (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) inside = !inside;
    }

    return inside;
}

function computeDistance(point1, point2) {
    const x1 = point1[0] * Math.PI / 180
    const y1 = point1[1] * Math.PI / 180
    const x2 = point2[0] * Math.PI / 180
    const y2 = point2[1] * Math.PI / 180
    const a = y1 - y2
    const b = x1 - x2
    const s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(y1) * Math.cos(y2) * Math.pow(Math.sin(b / 2), 2)))
    return s * 6378137.0
}


// 1.在多边形中所在的bbox范围均匀生成控制点
// 2.剔除不在多边形中的点
function generatePointsFromPolygon(coords, count = 100) {
    const bbox = getBbox(coords);
    const xRange = bbox.xmax - bbox.xmin;
    const yRange = bbox.ymax - bbox.ymin;
    // const xCount = Math.floor(count * xRange / (xRange + yRange));
    // const yCount = 100 - xCount;
    // const xStep = xRange / xCount;
    // const yStep = yRange / yCount;
    // let offset = 0;

    // 去重
    const node = {};

    const points = []
    // todo 分布均匀的点
    for (let i = 0; i < count; i++) {
        const x = Math.random() * xRange + bbox.xmin;
        const y = Math.random() * yRange + bbox.ymin;
        const point = [x, y];
        if (booleanPointInPolygon(point, coords) && !node[`${x},${y}`]) {
            points.push({x, y})
            node[`${x},${y}`] = true;
        }
    }

    let distance = 0;

    // 多边形边长也需添加一定的控制点
    // todo 线上添加一些点
    // todo 根据周长控制添加合理的数量
    for (let i = 1; i < coords.length; i++) {
        distance += computeDistance(coords[i - 1], coords[1]);
        const x = coords[i][0], y = coords[i][1];
        if (distance > 10 && !node[`${x},${y}`]) {
            points.push({x, y});
            distance = 0;
        }
    }
    points.push({x: coords[0][0], y: coords[0][1]});
    return points;
}

function getElevation(coords, callback) {
    const xhr = new XMLHttpRequest();
    coords = coords.map(coord => `${coord.y},${coord.x}`);
    xhr.open('get', `https://api.opentopodata.org/v1/aster30m?locations=${coords.join('|')}`);
    xhr.responseType = 'text';
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onload = () => {
        const elevations = [];
        const data = JSON.parse(xhr.response);
        data.results.forEach(d => elevations.push(d.elevation));
        callback(elevations)
    }
    xhr.onerror = () => {
        const elevations = [];
        // data.results.forEach(d => elevations.push(d.elevation));
        callback(elevations)
    }
    xhr.send();
}

// 粗略求三棱柱体积
// 1/3 x (h1 + h2 + h3) * s
function triangularPrismVolume(coords, datum) {
    // 底面积-海伦公式
    // p = (a + b + c) / 2
    // s = sqrt[p x (p - a) x (p - b) x (p - c)]
    const a = computeDistance(coords[0], coords[1]);
    const b = computeDistance(coords[1], coords[2]);
    const c = computeDistance(coords[2], coords[0]);
    const h1 = coords[0][2];
    const h2 = coords[1][2];
    const h3 = coords[2][2];

    const p = (a + b + c) / 2;
    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return ((h1 + h2 + h3) / 3 - datum) * s;
}

// 多边形生成三角网，无孔、不自交
// todo 凹多边形
function generateTinFromPolygon(coords, callback) {
    filterCoords(coords);
    const points = generatePointsFromPolygon(coords);
    // let triangulation = ;
    let highestAltitude = -Infinity, minimumAltitude = Infinity;
    getElevation(points, (elevation) => {
        for (let i = 0; i < elevation.length; i++) {
            highestAltitude = Math.max(highestAltitude, elevation[i]);
            minimumAltitude = Math.min(minimumAltitude, elevation[i]);
            points[i].z = elevation[i]
        }
        callback({highestAltitude, minimumAltitude, triangulation: tin(points)});
    });
}

function calculate(tin, datum) {
    let excavationVolume = 0, fillVolume = 0;
    for (let i = 0; i < tin.length; i++) {
        const v = triangularPrismVolume(tin[i], datum);
        if (v > 0) {// 挖方
            excavationVolume += v;
        } else { // 填方
            fillVolume += -v;
        }
    }
    return {excavationVolume, fillVolume}
}

/**
 * 第一步 generateTinFromPolygon； 计算出三角网 和 最高、最低海拔
 * 第二步 calculate 计算 挖方 填方
 *
 * generateTinFromPolygon(feature.geometry.coordinates[0], result => {
 *                 // console.log(result)
 *                 const {highestAltitude, minimumAltitude, triangulation} = result;
 *                 const data = calculate(triangulation, 200);
 *                 // console.log(n)
 *             });
 *
 *
 */
