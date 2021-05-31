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
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);

        this.green = new CGFappearance(scene); //hexa decimal color #70ff33
        this.green.setAmbient(0.439, 1, 0.2, 1.0);
        this.green.setDiffuse(0.439, 1, 0.2, 1.0);
        this.green.setSpecular(1, 1, 1, 1.0);
        this.green.setShininess(200);
        
        this.yellow = new CGFappearance(scene); //hexa decimal color #fff833
        this.yellow.setAmbient(1, 0.972, 0.2, 1.0);
        this.yellow.setDiffuse(1, 0.972, 0.2, 1.0);
        this.yellow.setSpecular(1, 1, 1, 1.0);
        this.yellow.setShininess(200);

        this.orange = new CGFappearance(scene); //hexa decimal color #f89d15
        this.orange.setAmbient(0.972, 0.616, 0.082, 1.0);
        this.orange.setDiffuse(0.972, 0.616, 0.082, 1.0);
        this.orange.setSpecular(1, 1, 1, 1.0);
        this.orange.setShininess(200);

        this.blue = new CGFappearance(scene); //hexa decimal color #15a7f8
        this.blue.setAmbient(0.082, 0.655, 0.972, 1.0);
        this.blue.setDiffuse(0.082, 0.655, 0.972, 1.0);
        this.blue.setSpecular(1, 1, 1, 1.0);
        this.blue.setShininess(200);

        this.pink = new CGFappearance(scene); //hexa decimal color #f8a2e0
        this.pink.setAmbient(0.972, 0.635, 0.878, 1.0);
        this.pink.setDiffuse(0.972, 0.635, 0.878, 1.0);
        this.pink.setSpecular(1, 1, 1, 1.0);
        this.pink.setShininess(200);

        this.purple = new CGFappearance(scene); //hexa decimal color #b653d2
        this.purple.setAmbient(0.714, 0.325, 0.823, 1.0);
        this.purple.setDiffuse(0.714, 0.325, 0.823, 1.0);
        this.purple.setSpecular(1, 1, 1, 1.0);
        this.purple.setShininess(200);

        this.red = new CGFappearance(scene); //hexa decimal color #ff0000
        this.red.setAmbient(1, 0, 0, 1.0);
        this.red.setDiffuse(1, 0, 0, 1.0);
        this.red.setSpecular(1, 1, 1, 1.0);
        this.red.setShininess(200);
    }

    display(){

        var angle45 = Math.PI*45/180;
        var angle90 = Math.PI/2;
        var angle180 = Math.PI;

        this.scene.pushMatrix(); //blue big triangle

        this.blue.apply();
        this.scene.rotate(angle45,0,0,1);
        this.scene.translate(0,-2,0);
        this.triangleBig.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //orange big triangle

        this.orange.apply();
        this.scene.translate(-0.5,1.415,0);
        this.scene.rotate(angle45+angle90,0,0,1);
        this.triangleBig.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //purple small triangle

        this.purple.apply();
        this.scene.translate(3.2,0,0);
        this.triangleSmall.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //pink triangle

        this.pink.apply();
        this.scene.translate(Math.sqrt(2),-2*Math.sqrt(2),0);
        this.scene.rotate(angle45+angle180,0,0,1);
        this.triangle.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //red small triangle

        this.red.apply();
        this.scene.translate(3,-3,0);
        this.scene.rotate(-angle45,0,0,1);
        this.triangleSmall.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //green diamond
        
        if(this.scene.selectedMaterial === '3'){
            this.scene.customMaterial.apply();
        }
        else{
            this.green.apply();
        }

        this.scene.translate(-1.7,2*Math.sqrt(2)+0.79,0)
        this.diamond.display();

        this.scene.popMatrix();


        this.scene.pushMatrix(); //yellow parallelogram

        this.yellow.apply();
        this.scene.translate(-1.915,0.8,0)
        this.scene.scale(-1,1,1);
        this.scene.rotate(angle45,0,0,1);
        this.parallelogram.display();
        
        this.scene.popMatrix();
	}
}