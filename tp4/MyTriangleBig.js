import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleBig extends CGFobject {
	constructor(scene, texture_id) {
		super(scene);
		this.initBuffers(texture_id);
	}
	
	initBuffers(texture_id) {
		this.vertices = [
			-2, 0, 0,	//0
			0, 2, 0,	//1
			2, 0, 0,	//2

			-2, 0, 0,	//3
			0, 2, 0,	//4
			2, 0, 0,	//5
		];

		this.indices = [
			0, 2, 1, //face 1 - turned to the positive side of z axis

			3, 4, 5, //face 2 - turned to the negative side of z axis
		];

		this.normals = [
			0, 0, 1, //normals to the face 1
			0, 0, 1,
			0, 0, 1,
			
			0, 0, -1, //normals to the face 2
			0, 0, -1,
			0, 0, -1,
		]


		if (texture_id == 1) { // to identify the orange triangle
			this.texCoords = [
				1, 0,
				1, 1,
				0.5, 0.5,
			
				1, 0,
				1, 1,
				0.5, 0.5
			]
		} else { // to identify the blue triangle
			this.texCoords = [
				0, 0,
				1, 0,
				0.5, 0.5,
			
				0, 0,
				1, 0,
				0.5, 0.5
			]
		}

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}