import { CGFshader } from '../../../lib/CGF.js';
import { MyTriangle } from '../../primitives/MyTriangle.js';

const ANIMATION_RATE = 0.5

export class MyFishFins {
    constructor(scene, skinColorVec) {
        this.scene = scene;

        this.animationFrame = 0;
        this.skinColorVec = skinColorVec;

        this.initObjects();
        this.initShaders();
    }

    initObjects() { this.fin = new MyTriangle(this.scene); }

    initShaders() {
        this.skinColorShader = new CGFshader(this.scene.gl, "shaders/fishSkinColor.vert", "shaders/fishSkinColor.frag");
        this.skinColorShader.setUniformsValues({ fishSkinColor: this.skinColorVec });

        this.scene.setActiveShader(this.skinColorShader);
    }

    display(speed, right, left) {
        // upper fin 
        this.scene.pushMatrix();

        this.scene.translate(0, 3.23, -0.02);
        this.scene.scale(0.08, 0.08, 0.08);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.fin.display();

        this.scene.popMatrix();

        // right fin 
        this.scene.pushMatrix();

        this.scene.translate(0, 3, 0);
        this.scene.rotate(Math.PI / 8, 0, 0, 1);
        this.scene.translate(0.1, -0.10, -0.05);
        if (right) this.scene.rotate(Math.sin(this.animationFrame * (speed + 0.5) / 3) / 4, 0, 0, 1)
        this.scene.translate(0, -0.075, 0);
        this.scene.scale(0.08, 0.08, 0.08);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.fin.display();

        this.scene.popMatrix();

        // left fin 
        this.scene.pushMatrix();

        this.scene.translate(0, 3, 0);
        this.scene.rotate(-Math.PI / 8, 0, 0, 1);
        this.scene.translate(-0.1, -0.10, -0.025);
        if (left) this.scene.rotate(-Math.sin(this.animationFrame * (speed + 0.5) / 3) / 4, 0, 0, 1)
        this.scene.translate(0, -0.075, 0);
        this.scene.scale(0.08, 0.08, 0.08);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.fin.display();

        this.scene.popMatrix();

        this.animationFrame += ANIMATION_RATE;
    }
}

