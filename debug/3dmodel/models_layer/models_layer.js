import {
    AmbientLight,
    Color,
    DirectionalLight,
    Group,
    PerspectiveCamera,
    Raycaster,
    Scene,
    WebGLRenderer,
    Vector2
} from "three";
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {CameraSync} from "./camera_sync.js";
import {addMethod} from "./hook.js";

const TEMP_POINT = new Vector2();

export class ModelsLayer {
    constructor(models) {
        this.id = 'models_layer';
        this.type = 'custom';
        this.renderingMode = '3d';
        this._initThree();
        this._loadModels(models);

        this._update = this._update.bind(this);
    }

    _initThree() {
        this.camera = new PerspectiveCamera();
        this.scene = new Scene();
        this.loader = new GLTFLoader();
        this.raycaster = new Raycaster();

        this.world = new Group();
        this.world.name = 'world'
        this.scene.add(this.world);

        const ambientLight = new AmbientLight(new Color('hsl(0, 0%, 100%)'), 0.75);
        this.scene.add(ambientLight);

        const dirLightBack = new DirectionalLight(new Color('hsl(0, 0%, 100%)'), 0.25);
        dirLightBack.position.set(30, 100, 100);
        this.scene.add(dirLightBack);

        const dirLight = new DirectionalLight(new Color('hsl(0, 0%, 100%)'), 0.25);
        dirLight.position.set(-30, 100, -100);
        this.scene.add(dirLight);
    }

    onAdd(map, gl) {
        this.map = map;

        this.renderer = new WebGLRenderer({
            alpha: true,
            canvas: map.getCanvas(),
            context: gl,
            antialias: true
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.autoClear = false;
        this.cameraSysc = new CameraSync(map, this.camera, this.world);
        map.on('idle', this._update);
    }

    onRemove(){
        this.map.off('idle', this._update);
        this.cameraSysc.destroy();
        this.map = undefined;
    }


    _loadModels(models) {
        if (!this._needUpdateModels) {
            this._needUpdateModels = [];
        }
        models.forEach(model => {
            this.loader.load(model.url, gltf => {
                // console.log(gltf.scene)
                addMethod(gltf.scene);
                gltf.scene.setRotation(model.rotate);
                gltf.scene.setScale(model.scale);
                gltf.scene.setOffset(model.offset)

                this._needUpdateModels.push({model, object: gltf.scene});
                this.world.add(gltf.scene);

                if (this.map) {

                    gltf.scene.setLngLat(model.location);
                    this.map.triggerRepaint();
                }
            });
        });

    }

    _update() {
        if (this.map.getTerrain()) {
            this._updateModelAltitude();
        }
    }


    _updateModelAltitude() {
        if (!this._needUpdateModels || !this._needUpdateModels.length) return;
        this._needUpdateModels.forEach(value => {
            const {model, object} = value;
            object.setLngLat(model.location, this.map.queryTerrainElevation(model.location))
        });
        this._needUpdateModels.length = 0;
        this.map.triggerRepaint();
    }


    render() {
        // this.cameraSysc._updateCamera();
        this.renderer.resetState();
        this.renderer.render(this.scene, this.camera);
    }

    pickModelAtScreenPoint(point) {
        TEMP_POINT.x = (point.x / this.map.transform.width) * 2 - 1;
        TEMP_POINT.y = 1 - (point.y / this.map.transform.height) * 2;
        this.raycaster.setFromCamera(TEMP_POINT, this.camera);
        return this.raycaster.intersectObject(this.world, true)
    }

}

