import { CGFobject } from '../../lib/CGF.js';

/**
 * @class MyCylinder 
 */
export class MyCylinder extends CGFobject {
    /**
     * @constructor
     * @param scene - reference to MyScene object
     * @param {integer} slices - number of divisions around Y axis
     */
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2 * Math.PI / this.slices;

        for (var i = 0; i < this.slices; i++) {

            this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
            this.indices.push(i, i + 1, this.slices + i + 1);
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            this.texCoords.push(i / this.slices, 1);
            ang += alphaAng;
        }

        this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
        this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
        this.texCoords.push(1, 1);

        for (var i = this.slices + 1; i < 2 * this.slices + 1; i++) {

            this.vertices.push(Math.cos(ang), 1, -Math.sin(ang));
            this.indices.push(i, (i + 1) % (this.slices + 1), (i + 1));
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            this.texCoords.push(((i - 1) % this.slices) / (this.slices + 1), 0);
            ang += alphaAng;
        }

        this.vertices.push(Math.cos(ang), 1, -Math.sin(ang));
        this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
        this.texCoords.push(1, 0);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    /**
     * Called when user interacts with GUI to change object's complexity.
     * @param {integer} complexity - changes number of slices
     */
    updateBuffers(complexity) {
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


