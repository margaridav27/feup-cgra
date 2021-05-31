import {CGFobject, CGFappearance} from '../lib/CGF.js';
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
        this.triangleSmallPurple = new MyTriangleSmall(scene, 1);
        this.triangleSmallRed = new MyTriangleSmall(scene, 2);
        this.triangleBigOrange = new MyTriangleBig(scene, 1);
        this.triangleBigBlue = new MyTriangleBig(scene, 2);

        //------ Applied Material to Tangram
        this.tangramMaterial = new CGFappearance(scene);
        this.tangramMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangramMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setShininess(10.0);
        this.tangramMaterial.loadTexture('images/tangram.png');
        this.tangramMaterial.setTextureWrap('REPEAT', 'REPEAT');
        //------
    }

    display(){
        var angle45 = Math.PI*45/180;
        var angle90 = Math.PI/2;
        var angle180 = Math.PI;

        this.scene.pushMatrix(); //blue big triangle

        this.tangramMaterial.apply();
        this.scene.rotate(angle45,0,0,1);
        this.scene.translate(0,-2,0);
        this.triangleBigBlue.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //orange big triangle

        this.tangramMaterial.apply();
        this.scene.translate(-0.5,1.415,0);
        this.scene.rotate(angle45+angle90,0,0,1);
        this.triangleBigOrange.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //purple small triangle

        this.tangramMaterial.apply();
        this.scene.translate(3.2,0,0);
        this.triangleSmallPurple.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //pink triangle

        this.tangramMaterial.apply();
        this.scene.translate(Math.sqrt(2),-2*Math.sqrt(2),0);
        this.scene.rotate(angle45+angle180,0,0,1);
        this.triangle.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //red small triangle

        this.tangramMaterial.apply();
        this.scene.translate(3,-3,0);
        this.scene.rotate(-angle45,0,0,1);
        this.triangleSmallRed.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //green diamond
        
        this.tangramMaterial.apply();
        this.scene.translate(-1.7,2*Math.sqrt(2)+0.79,0);
        this.diamond.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //yellow parallelogram

        this.tangramMaterial.apply();
        this.scene.translate(-1.915,0.8,0)
        this.scene.scale(-1,1,1);
        this.scene.rotate(angle45,0,0,1);
        this.parallelogram.display();
        
        this.scene.popMatrix();
	}
}