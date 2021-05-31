import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			0, -1, 0,	//1
			0, 1, 0,	//2
			1, 0, 0,	//3

			-1, 0, 0,	//4
			0, -1, 0,	//5
			0, 1, 0,	//6
			1, 0, 0		//7
		];

		this.normals = [
			0 ,0 , 1, //normals to the face 1
			0 ,0 , 1,
			0 ,0 , 1,
			0 ,0 , 1,

			0 ,0 , -1, //normals to the face 2
			0 ,0 , -1,
			0 ,0 , -1,
			0 ,0 , -1,
		];
		
		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2, //face 1 - turned to the positive side of z axis
			1, 3, 2,

			4, 6, 5, //face 2 - turned to the negative side of z axis
			5, 6, 7
		];

		

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

