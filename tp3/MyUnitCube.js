import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			0.5, 0.5, 0.5,	  //0
			-0.5, 0.5, 0.5,	  //1
			0.5, -0.5, 0.5,   //2
			-0.5, -0.5, 0.5,  //3

            0.5, 0.5, -0.5,	  //4
			-0.5, 0.5, -0.5,  //5
			0.5, -0.5, -0.5,  //6
			-0.5, -0.5, -0.5,  //7

			//y normal
			0.5, 0.5, 0.5,	  //0
			-0.5, 0.5, 0.5,	  //1
			0.5, -0.5, 0.5,   //2
			-0.5, -0.5, 0.5,  //3

            0.5, 0.5, -0.5,	  //4
			-0.5, 0.5, -0.5,  //5
			0.5, -0.5, -0.5,  //6
			-0.5, -0.5, -0.5,  //7

			//x normal
			0.5, 0.5, 0.5,	  //0
			-0.5, 0.5, 0.5,	  //1
			0.5, -0.5, 0.5,   //2
			-0.5, -0.5, 0.5,  //3

            0.5, 0.5, -0.5,	  //4
			-0.5, 0.5, -0.5,  //5
			0.5, -0.5, -0.5,  //6
			-0.5, -0.5, -0.5  //7

		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,

			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,

			0, 1, 0,
			0, 1, 0,
			0, -1, 0,
			0, -1, 0,

			0, 1, 0,
			0, 1, 0,
			0, -1, 0,
			0, -1, 0,

			1, 0, 0,
			-1, 0, 0,
			1, 0, 0,
			-1, 0, 0,

			1, 0, 0,
			-1, 0, 0,
			1, 0, 0,
			-1, 0, 0,
		] 

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 3, //faces perpendiculares a z
			0, 3, 2,
            
			4, 7, 5, 
			4, 6, 7,

            16, 18, 20, //faces perpendiculares a x
            18, 22, 20,

            17, 21, 23,
            17, 23, 19,

            8, 12, 13, //faces perpendiculares a y
            8, 13, 9,

            10, 15, 14,
            10, 11, 15
		];

		

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}