import {CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
/**
 * MyTrangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers(scene);
	}

	initBuffers(scene) {
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);
    }

    display(){
        var angle45 = Math.PI*45/180;
        var angle90 = Math.PI/2;
        var angle180 = Math.PI;

        this.scene.pushMatrix(); //blue big triangle

        this.scene.rotate(angle45,0,0,1);
        this.scene.translate(0,-2,0);
        this.triangleBig.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //orange big triangle

        this.scene.translate(-0.5,1.415,0);
        this.scene.rotate(angle45+angle90,0,0,1);
        this.triangleBig.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //purple small triangle

        this.scene.translate(3.2,0,0);
        this.triangleSmall.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //pink triangle

        this.scene.translate(Math.sqrt(2),-2*Math.sqrt(2),0);
        this.scene.rotate(angle45+angle180,0,0,1);
        this.triangle.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //red small triangle

        this.scene.translate(3,-3,0);
        this.scene.rotate(-angle45,0,0,1);
        this.triangleSmall.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //green diamond
        
        this.scene.translate(-1.7,2*Math.sqrt(2)+0.79,0)
        this.diamond.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //yellow parallelogram

        this.scene.translate(-1.915,0.8,0)
        this.scene.scale(-1,1,1);
        this.scene.rotate(angle45,0,0,1);
        this.parallelogram.display();
        
        this.scene.popMatrix();
	}

}