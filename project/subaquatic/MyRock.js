import { CGFobject } from '../../lib/CGF.js';
import { Utilities } from "../Utilities.js";

export class MyRock extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.latDivs = stacks * 2;
        this.longDivs = slices;

        //to use in MyRockSet
        this.scaleFactor = 1;
        this.translationFactor = [0, 0, 0];

        //holds the default position to drop the rock to
        this.shellPosition = [0, 0, 0];

        this.inShell = false;

        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var phi = 0;
        var theta = 0;
        var phiInc = Math.PI / this.latDivs;
        var thetaInc = (2 * Math.PI) / this.longDivs;
        var latVertices = this.longDivs + 1;

        for (let latitude = 0; latitude <= this.latDivs; latitude++) {
            var sinPhi = Math.sin(phi);
            var cosPhi = Math.cos(phi);

            theta = 0;
            for (let longitude = 0; longitude <= this.longDivs; longitude++) {
                var x = Math.cos(theta) * sinPhi + Utilities.generateRandomNumber(0, 2, 0.3);
                var y = cosPhi + Utilities.generateRandomNumber(0, 2, 0.1);
                var z = Math.sin(-theta) * sinPhi + Utilities.generateRandomNumber(0, 2, 0.3);

                this.vertices.push(x, y, z);

                if (latitude < this.latDivs && longitude < this.longDivs) {
                    var current = latitude * latVertices + longitude;
                    var next = current + latVertices;

                    this.indices.push(current + 1, current, next);
                    this.indices.push(current + 1, next, next + 1);
                }

                this.normals.push(x, y, z);
                theta += thetaInc;
            }
            phi += phiInc;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}
