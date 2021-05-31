import { CGFappearance } from "../../lib/CGF.js";
import { MyPyramid } from "../primitives/MyPyramid.js";

export class MySeaweed {
    constructor(scene) {
        this.scene = scene;

        this.initObjects();
        this.initAppearances();

        this.scaleFactor = 1;
        this.xTranslationFactor = 0;
        this.zTranslationFactor = 0;
    }

    initObjects() { this.pyramid = new MyPyramid(this.scene, 5, 6); }

    initAppearances() {
        this.seaweedAppearance = new CGFappearance(this.scene);
        this.seaweedAppearance.setAmbient(0.184, 0.298, 0.110, 1);
        this.seaweedAppearance.setDiffuse(0.239, 0.387, 0.143, 1);
        this.seaweedAppearance.setSpecular(0.184, 0.298, 0.110, 1);
        this.seaweedAppearance.setShininess(300);
    }

    display() {
        this.seaweedAppearance.apply();

        this.scene.pushMatrix();

        this.scene.scale(0.2, 1, 0.2);
        this.pyramid.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(0.3, 0, 0.4);
        this.scene.scale(0.2, 0.7, 0.2);
        this.pyramid.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(0.4, 0, 0.1);
        this.scene.scale(0.2, 0.7, 0.2);
        this.pyramid.display();

        this.scene.popMatrix();

        this.scene.setDefaultAppearance();
    }
}
