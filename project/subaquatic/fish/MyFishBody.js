import { CGFappearance, CGFshader } from '../../../lib/CGF.js';
import { MySphere } from '../../primitives/MySphere.js';

export class MyFishBody {
    constructor(scene, skinTexturePath, skinColorVec) {
        this.scene = scene;

        this.skinTexturePath = skinTexturePath;
        this.skinColorVec = skinColorVec;

        this.initObjects();
        this.initAppearances();
        this.initShaders();
    }

    initObjects() { this.body = new MySphere(this.scene, 25, 25); }

    initAppearances() {
        this.skinAppearance = new CGFappearance(this.scene);
        this.skinAppearance.loadTexture(this.skinTexturePath);
        this.skinAppearance.setTextureWrap('REPEAT', 'REPEAT');
    }

    initShaders() {
        this.skinShader = new CGFshader(this.scene.gl, "shaders/fishSkin.vert", "shaders/fishSkin.frag");
        this.skinShader.setUniformsValues({ fishSkinColor: this.skinColorVec });
    }

    display() {
        this.scene.setActiveShader(this.skinShader);
        this.skinAppearance.apply();

        this.scene.pushMatrix();

        this.scene.translate(0, 3, 0);
        this.scene.scale(0.125, 0.175, 0.25);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.body.display();

        this.scene.popMatrix();
    }
}

