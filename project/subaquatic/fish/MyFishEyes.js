import { CGFappearance } from '../../../lib/CGF.js';
import { MySphere } from '../../primitives/MySphere.js';

export class MyFishEyes {
    constructor(scene) {
        this.scene = scene;

        this.initObjects();
        this.initAppearances();
    }

    initObjects() { this.eye = new MySphere(this.scene, 25, 25); }

    initAppearances() {
        this.eyeAppearance = new CGFappearance(this.scene);
        this.eyeAppearance.setAmbient(0, 0, 0, 0);
        this.eyeAppearance.setDiffuse(0, 0, 0, 0);
        this.eyeAppearance.setSpecular(0, 0, 0, 0);
        this.eyeAppearance.setEmission(1, 1, 1, 1);
        this.eyeAppearance.loadTexture('images/fish/eye.png');
        this.eyeAppearance.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        // right eye 
        this.scene.pushMatrix();

        this.scene.translate(0.08, 3.03, 0.13);
        this.scene.scale(0.035, 0.035, 0.035);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.eyeAppearance.apply();
        this.eye.display();

        this.scene.popMatrix();

        // left eye 
        this.scene.pushMatrix();

        this.scene.translate(-0.08, 3.03, 0.13);
        this.scene.scale(0.035, 0.035, 0.035);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.eyeAppearance.apply();
        this.eye.display();

        this.scene.popMatrix();
    }
}

