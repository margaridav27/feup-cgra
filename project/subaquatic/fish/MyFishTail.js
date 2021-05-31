import { CGFshader } from '../../../lib/CGF.js';
import { MyTriangle } from '../../primitives/MyTriangle.js';

const ANIMATION_RATE = 0.5

export class MyFishTail {
    constructor(scene, skinColorVec) {
        this.scene = scene;

        this.animationFrame = 0;
        this.skinColorVec = skinColorVec;

        this.initObjects();
        this.initShaders();
    }

    initObjects() { this.tail = new MyTriangle(this.scene); }

    initShaders() {
        this.skinColorShader = new CGFshader(this.scene.gl, "shaders/fishSkinColor.vert", "shaders/fishSkinColor.frag");
        this.skinColorShader.setUniformsValues({ fishSkinColor: this.skinColorVec });

        this.scene.setActiveShader(this.skinColorShader);
    }

    display(speed) {
        this.scene.pushMatrix();

        this.scene.translate(0, 3, -0.25);
        this.scene.rotate(Math.sin(this.animationFrame * (speed + 0.5) / 2) / 2, 0, 1, 0)
        this.scene.translate(0, 0, -0.2);
        this.scene.scale(0.15, 0.15, 0.15);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.tail.display();

        this.scene.popMatrix();

        this.animationFrame += ANIMATION_RATE;
    }
}

