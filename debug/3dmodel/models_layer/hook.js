import {degToRadian, projectedUnitsPerMeter, projectToWorld, unprojectFromWorld} from "./utils.js";

export function addMethod(obj) {
    obj.userData.scale = 1;
    Object.assign(obj, {
        coordinates: [0, 0, 0],

        get unitsPerMeter() {
            return Number(projectedUnitsPerMeter(this.coordinates[1]).toFixed(7))
        },

        setLngLat(lngLat, altitude) {
            if (typeof altitude === 'number') lngLat[2] = altitude;
            this.coordinates = lngLat;
            projectToWorld(lngLat, this.position);
            this.userData.position = this.position.clone();

            this.setOffset(this.userData.offset);
            this.setScale(this.userData.scale);
        },

        setOffset(offset) {
            if(!Array.isArray(offset)) return;
            const unitPerMeter = this.unitsPerMeter;
            const position = this.userData.position || this.position;

            this.position.x = position.x + (offset[0] ? unitPerMeter * offset[0] : 0);
            this.position.y = position.y + (offset[1] ? unitPerMeter * offset[1] : 0);
            this.position.z = position.z + (offset[2] ? unitPerMeter * offset[2] : 0);
            this.userData.offset = offset.slice(0, Infinity)
        },

        setRotation(r) {
            if (typeof r === 'number') r = [0, 0, r];
            this.rotation.fromArray(r.map(deg => degToRadian(deg || 0)));
        },

        setScale(s) {
            if (typeof s === 'number') s = [s, s, s];
            const unitPerMeter = this.unitsPerMeter
            this.scale.fromArray(s.map(si => si * unitPerMeter));
            this.userData.scale = s;
        },

        updateObject(options) {
            this.setScale(1);
            let p = options.position; // lnglat
            let r = options.rotation; // radians
            let s = options.scale; // custom scale
            let w = options.worldCoordinates; //Vector3
            let q = options.quaternion; // [axis, angle in rads]
            let t = options.translate; // [jscastro] lnglat + height for 3D objects
            let wt = options.worldTranslate; // [jscastro] Vector3 translation

            if (p) {
                this.coordinates = p;
                projectToWorld(p, this.position);
                console.log(this.position)
            }

            if (t) {
                this.coordinates[0] += t[0];
                this.coordinates[1] += t[1];
                this.coordinates[2] += t[2];
                projectToWorld(t, this.position);
                // options.position = this.coordinates;
            }

            if (wt) {
                this.translateX(wt.x);
                this.translateY(wt.y);
                this.translateZ(wt.z);
                unprojectFromWorld(this.position, this.coordinates);
                // options.position = this.coordinates;
            }

            if (r) {
                this.rotation.set(r[0], r[1], r[2]);
                // options.rotation = new Vector3(r[0], r[1], r[2]);
            }

            if (s) {
                this.scale.set(s[0], s[1], s[2]);
                // options.scale = this.scale;
            }

            if (q) {
                this.quaternion.setFromAxisAngle(q[0], q[1]);
                options.rotation = q[0].multiplyScalar(q[1]);
            }

            if (w) {
                this.position.copy(w);
                unprojectFromWorld(w, this.coordinates);
            }

        }
    })
}
