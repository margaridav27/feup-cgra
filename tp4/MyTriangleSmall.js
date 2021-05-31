import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleSmall extends CGFobject {
	constructor(scene, texture_id) {
		super(scene);
		this.initBuffers(texture_id);
	}
	
	initBuffers(texture_id) {
		this.vertices = [
			-1, 0, 0,	//0
			0, 1, 0,	//1
			1, 0, 0,	//2

			-1, 0, 0,	//0
			0, 1, 0,	//1
			1, 0, 0,	//2
		];

		this.normals = [
			0 ,0 , 1,
			0 ,0 , 1,
			0 ,0 , 1,

			0 ,0 , -1,
			0 ,0 , -1,
			0 ,0 , -1,
		]

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 1, //face 1 - turned to the positive side of z axis
            3, 4, 5 //face 2 - turned to the negative side of z axis
		];

		if (texture_id == 1) { // to identify the purple triangle
			this.texCoords = [
				0, 0,
				0.25, 0.25,
				0, 0.5,
			
				0, 0,
				0.25, 0.25,
				0, 0.5
			]
		} else { // to identify the red triangle
			this.texCoords = [
				0.5, 0.5,
				0.25, 0.75,
				0.75, 0.75,
			
				0.5, 0.5,
				0.25, 0.75,
				0.75, 0.75,
			]
		}


		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}