import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-1, 1, 0,	//0
			-1, -1, 0,	//1
			1, -1, 0,	//2

			-1, 1, 0,	//3
			-1, -1, 0,	//4
			1, -1, 0,	//5
		];

		this.indices = [
			0, 1, 2, //face 1 - turned to the positive side of z axis

			3, 5, 4, //face 2 - turned to the negative side of z axis
		];

		this.normals = [
			0, 0, 1, //normals to the face 1
			0, 0, 1,
			0, 0, 1,
			
			0, 0, -1, //normals to the face 2
			0, 0, -1,
			0, 0, -1,
		]

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}