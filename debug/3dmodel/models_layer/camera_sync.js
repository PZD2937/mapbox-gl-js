import {Vector3, Matrix4, OrthographicCamera} from "three";
import CONSTANTS from './constants.js'
import {clamp, makeOrthographicMatrix, makePerspectiveMatrix} from "./utils.js";


export class CameraSync {
    constructor(map, camera, world) {
        this.map = map;
        this.camera = camera;

        this.camera.matrixAutoUpdate = false;

        this.world = world;
        this.world.position.x = this.world.position.y = CONSTANTS.WORLD_SIZE / 2;
        this.world.matrixAutoUpdate = false;


        this.state = {
            translateCenter: new Matrix4().makeTranslation(CONSTANTS.WORLD_SIZE / 2, -CONSTANTS.WORLD_SIZE / 2, 0),
            worldSizeRatio: CONSTANTS.TILE_SIZE / CONSTANTS.WORLD_SIZE,
            worldSize: CONSTANTS.TILE_SIZE * this.map.transform.scale
        };

        this._setupCamera()

        this._updateCamera = this._updateCamera.bind(this);
        this._setupCamera = this._setupCamera.bind(this);

        this.map.on('move', this._updateCamera);
        this.map.on('resize', this._setupCamera);
    }

    _setupCamera() {
        const t = this.map.transform;
        this.camera.fov = t.fov;
        this.camera.far = 4000
        this.camera.aspect = t.width / t.height;
        this.halfFov = t._fov / 2;
        this.cameraToCenterDistance = 0.5 / Math.tan(this.halfFov) * t.height;
        this._updateCamera();
    }

    _updateCamera() {
        if (!this.camera) {
            console.error('no camera')
            return;
        }
        const t = this.map.transform;
        const offset = t.centerOffset || new Vector3();
        this.halfFov = t._fov / 2;
        const groundAngle = Math.PI / 2 + t._pitch;
        // pitch seems to influence heavily the depth calculation and cannot be more than 60 = PI/3 < v1 and 85 > v2
        const pitchAngle = Math.cos((Math.PI / 2) - t._pitch);
        this.cameraToCenterDistance = 0.5 / Math.tan(this.halfFov) * t.height;

        const worldSize = t.worldSize;

        const fovAboveCenter = t._fov * (0.5 + t.centerOffset.y / t.height);
        // 通过屏幕上可见的最小可能高度调整到 MSL 的距离，
        // 这样，在负仰角的情况下，远平面会被推得更远。
        const minElevationInPixels = t.elevation ? t.elevation.getMinElevationBelowMSL() * t.pixelsPerMeter : 0;

        const cameraToSeaLevelDistance = ((t._camera.position[2] * worldSize) - minElevationInPixels) / Math.cos(t._pitch);
        const topHalfSurfaceDistance = Math.sin(fovAboveCenter) * cameraToSeaLevelDistance / Math.sin(clamp(Math.PI - groundAngle - fovAboveCenter, 0.01, Math.PI - 0.01));

        // 计算应渲染的最远片段的 z 距离。
        const furthestDistance = pitchAngle * topHalfSurfaceDistance + cameraToSeaLevelDistance;

        // 当片段的距离恰好是“最远距离”时，添加一点额外的内容以避免精度问题
        const horizonDistance = cameraToSeaLevelDistance * (1 / t._horizonShift);
        const farZ = Math.min(furthestDistance * 1.01, horizonDistance);

        this.cameraTranslateZ = new Matrix4().makeTranslation(0, 0, this.cameraToCenterDistance);

        const nz = (t.height / 50); //min near z as coded by
        const nearZ = Math.max(nz * pitchAngle, nz); //on changes in the pitch nz could be too low

        const h = t.height;
        const w = t.width;
        if (this.camera instanceof OrthographicCamera) {
            makeOrthographicMatrix(w / -2, w / 2, h / 2, h / -2, nearZ, farZ, this.camera.projectionMatrix)
        } else {
            makePerspectiveMatrix(t._fov, w / h, nearZ, farZ, this.camera.projectionMatrix);
        }
        this.camera.projectionMatrix.elements[8] = -offset.x * 2 / t.width;
        this.camera.projectionMatrix.elements[9] = offset.y * 2 / t.height;

        // 与 Mapbox GL JS 相机不同，将相机平移和旋转分离到其世界矩阵中
        // 如果这直接应用于投影矩阵，它会工作正常，但会破坏光线投射
        let cameraWorldMatrix = this.calcCameraMatrix(t._pitch, t.angle);
        // 当包含地形图层时，必须从 t_camera.z * worldSize 修改 3D 图层的高度
        if (t.elevation) cameraWorldMatrix.elements[14] = t._camera.position[2] * worldSize;
        //this.camera.matrixWorld.elements 相当于 t._camera._transform
        this.camera.matrixWorld.copy(cameraWorldMatrix);

        let zoomPow = t.scale * this.state.worldSizeRatio;

        let scale = new Matrix4();
        let translateMap = new Matrix4();
        let rotateMap = new Matrix4();
        scale.makeScale(zoomPow, zoomPow, zoomPow);

        let x = t.point.x;
        let y = t.point.y;
        translateMap.makeTranslation(-x, y, 0);
        rotateMap.makeRotationZ(Math.PI);

        this.world.matrix = new Matrix4()
            .premultiply(rotateMap)
            .premultiply(this.state.translateCenter)
            .premultiply(scale)
            .premultiply(translateMap)

    }

    calcCameraMatrix(pitch, angle, trz) {
        const t = this.map.transform;
        const _pitch = (pitch === undefined) ? t._pitch : pitch;
        const _angle = (angle === undefined) ? t.angle : angle;
        const _trz = (trz === undefined) ? this.cameraTranslateZ : trz;

        return new Matrix4()
            .premultiply(_trz)
            .premultiply(new Matrix4().makeRotationX(_pitch))
            .premultiply(new Matrix4().makeRotationZ(_angle));
    }

    destroy() {
        if(this._isDestroy) return;
        this._isDestroy = true;
        this.map.off('move', this._updateCamera);
        this.map.off('resize', this._setupCamera);
        this.map = undefined;
        this.camera = undefined;
        this.world = undefined
    }
}
