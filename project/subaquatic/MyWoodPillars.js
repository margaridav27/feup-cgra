import { CGFappearance } from "../../lib/CGF.js";
import { MyCylinder } from "../primitives/MyCylinder.js";

export class MyWoodPillars {
    constructor(scene) {
        this.scene = scene;

        this.initObjects();
        this.initAppearances();
    }

    initObjects() { this.woodPillar = new MyCylinder(this.scene, 16); }

    initAppearances() {
        this.woodAppearance = new CGFappearance(this.scene);
        this.woodAppearance.setAmbient(0.4, 0.6, 0.7, 1);
        this.woodAppearance.setDiffuse(0.5, 0.7, 0.7, 1);
        this.woodAppearance.setSpecular(0.7, 0.7, 0.7, 1);
        this.woodAppearance.setShininess(300);
        this.woodAppearance.loadTexture('images/wood.jpg');
        this.woodAppearance.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.woodAppearance.apply();

        this.scene.pushMatrix();

        this.scene.translate(15, 0, -3.6);
        this.scene.scale(0.4, 11, 0.4);
        this.woodPillar.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(15, 0, 0);
        this.scene.scale(0.4, 11, 0.4);
        this.woodPillar.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(4, 0, -3.6);
        this.scene.scale(0.4, 11, 0.4);
        this.woodPillar.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.translate(4, 0, 0);
        this.scene.scale(0.4, 11, 0.4);
        this.woodPillar.display();

        this.scene.popMatrix();

        this.scene.setDefaultAppearance();
    }
}
