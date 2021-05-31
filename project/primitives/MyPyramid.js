import { CGFobject } from '../../lib/CGF.js';

/**
* MyPyramid
* @constructor
 * @param scene - Reference to MyScene object
 * @param slices - number of divisions around the Y axis
 * @param stacks - number of divisions along the Y axis
*/
export class MyPyramid extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var alphaAng = 2 * Math.PI / this.slices;

        for (var i = 0; i < this.slices; i++) {
            var sa = Math.sin(ang);
            var saa = Math.sin(ang + alphaAng);
            var ca = Math.cos(ang);
            var caa = Math.cos(ang + alphaAng);
            var offset = 1 / this.stacks;
            var y = 2 / this.stacks;

            let l1 = ca;
            let l2 = sa;
            let l3 = caa;
            let l4 = saa;

            var normal = [
                saa - sa,
                ca * saa - sa * caa,
                caa - ca
            ];

            // normalization
            var nsize = Math.sqrt(
                normal[0] * normal[0] +
                normal[1] * normal[1] +
                normal[2] * normal[2]
            );

            normal[0] /= nsize;
            normal[1] /= nsize;
            normal[2] /= nsize;

            let jj = (2 * this.stacks + 1) * i
            for (var j = 1; j <= this.stacks; j++) {
                this.vertices.push(l1, y * (j - 1), -l2);
                this.vertices.push(l3, y * (j - 1), -l4);
                this.normals.push(...normal);
                this.normals.push(...normal);


                l1 = ca * (1 - j * offset);
                l2 = sa * (1 - j * offset);
                l3 = caa * (1 - j * offset);
                l4 = saa * (1 - j * offset);

                if (j == this.stacks) break;
                this.indices.push(jj, jj + 1, jj + 3)
                this.indices.push(jj, jj + 3, jj + 2)

                jj += 2

            }
            this.vertices.push(0, 2, 0);
            this.normals.push(...normal);

            this.indices.push(jj, jj + 1, jj + 2);

            // push normal once for each vertex of this triangle

            ang += alphaAng;
        }

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


