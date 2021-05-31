import {CGFobject, CGFtexture} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene, top, side, bottom) {
		super(scene);
		this.quad = new MyQuad(scene);

        //defining textures
        this.quadTop = top;
        this.quadSide = side;
        this.quadBottom = bottom;
	}

    display() {
        // ------------- side faces
        this.scene.pushMatrix(); 
        this.scene.translate(0,0,0.5);
        this.quadSide.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); 
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI,0,1,0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); 
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.quad.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix(); 
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.quad.display();
        this.scene.popMatrix();
        
        // ------------- top face
        this.scene.pushMatrix();
        this.quadTop.apply();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.quad.display();
        this.scene.popMatrix();

        // ------------- bottom face
        this.scene.pushMatrix();
        this.quadBottom.apply();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.quad.display();
        this.scene.popMatrix();
    }
}