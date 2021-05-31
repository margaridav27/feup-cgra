import { CGFobject, CGFappearance } from '../../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";

/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCubeMap extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initObjects();
        this.initTextures();
    }

    initObjects() {
        this.quad = new MyQuad(this.scene);
    }

    initUnderWaterTexture() {
        //BACK
        this.underWaterBack = new CGFappearance(this.scene);
        this.underWaterBack.setAmbient(0, 0, 0, 0);
        this.underWaterBack.setDiffuse(0, 0, 0, 0);
        this.underWaterBack.setSpecular(0, 0, 0, 0);
        this.underWaterBack.setEmission(1, 1, 1, 1);
        this.underWaterBack.loadTexture('./images/cubemapTextures/underwaterCubemap/back.jpg');
        this.underWaterBack.setTextureWrap('REPEAT', 'REPEAT');

        //FRONT
        this.underWaterFront = new CGFappearance(this.scene);
        this.underWaterFront.setAmbient(0, 0, 0, 0);
        this.underWaterFront.setDiffuse(0, 0, 0, 0);
        this.underWaterFront.setSpecular(0, 0, 0, 0);
        this.underWaterFront.setEmission(1, 1, 1, 1);
        this.underWaterFront.loadTexture('./images/cubemapTextures/underwaterCubemap/front.jpg');
        this.underWaterFront.setTextureWrap('REPEAT', 'REPEAT');

        //LEFT
        this.underWaterLeft = new CGFappearance(this.scene);
        this.underWaterLeft.setAmbient(0, 0, 0, 0);
        this.underWaterLeft.setDiffuse(0, 0, 0, 0);
        this.underWaterLeft.setSpecular(0, 0, 0, 0);
        this.underWaterLeft.setEmission(1, 1, 1, 1);
        this.underWaterLeft.loadTexture('./images/cubemapTextures/underwaterCubemap/left.jpg');
        this.underWaterLeft.setTextureWrap('REPEAT', 'REPEAT');

        //RIGHT
        this.underWaterRight = new CGFappearance(this.scene);
        this.underWaterRight.setAmbient(0, 0, 0, 0);
        this.underWaterRight.setDiffuse(0, 0, 0, 0);
        this.underWaterRight.setSpecular(0, 0, 0, 0);
        this.underWaterRight.setEmission(1, 1, 1, 1);
        this.underWaterRight.loadTexture('./images/cubemapTextures/underwaterCubemap/right.jpg');
        this.underWaterRight.setTextureWrap('REPEAT', 'REPEAT');

        //TOP
        this.underWaterTop = new CGFappearance(this.scene);
        this.underWaterTop.setAmbient(0, 0, 0, 0);
        this.underWaterTop.setDiffuse(0, 0, 0, 0);
        this.underWaterTop.setSpecular(0, 0, 0, 0);
        this.underWaterTop.setEmission(1, 1, 1, 1);
        this.underWaterTop.loadTexture('./images/cubemapTextures/underwaterCubemap/top.jpg');
        this.underWaterTop.setTextureWrap('REPEAT', 'REPEAT');

        //BOTTOM
        this.underWaterBottom = new CGFappearance(this.scene);
        this.underWaterBottom.setAmbient(0, 0, 0, 0);
        this.underWaterBottom.setDiffuse(0, 0, 0, 0);
        this.underWaterBottom.setSpecular(0, 0, 0, 0);
        this.underWaterBottom.setEmission(1, 1, 1, 1);
        this.underWaterBottom.loadTexture('./images/cubemapTextures/underwaterCubemap/bottom.jpg');
        this.underWaterBottom.setTextureWrap('REPEAT', 'REPEAT');
    }

    initHillsTexture() {
        //BACK
        this.hillsBack = new CGFappearance(this.scene);
        this.hillsBack.setAmbient(0, 0, 0, 0);
        this.hillsBack.setDiffuse(0, 0, 0, 0);
        this.hillsBack.setSpecular(0, 0, 0, 0);
        this.hillsBack.setEmission(1, 1, 1, 1);
        this.hillsBack.loadTexture('./images/cubemapTextures/hillsCubemap/back.png');
        this.hillsBack.setTextureWrap('REPEAT', 'REPEAT');

        //FRONT
        this.hillsFront = new CGFappearance(this.scene);
        this.hillsFront.setAmbient(0, 0, 0, 0);
        this.hillsFront.setDiffuse(0, 0, 0, 0);
        this.hillsFront.setSpecular(0, 0, 0, 0);
        this.hillsFront.setEmission(1, 1, 1, 1);
        this.hillsFront.loadTexture('./images/cubemapTextures/hillsCubemap/front.png');
        this.hillsFront.setTextureWrap('REPEAT', 'REPEAT');

        //LEFT
        this.hillsLeft = new CGFappearance(this.scene);
        this.hillsLeft.setAmbient(0, 0, 0, 0);
        this.hillsLeft.setDiffuse(0, 0, 0, 0);
        this.hillsLeft.setSpecular(0, 0, 0, 0);
        this.hillsLeft.setEmission(1, 1, 1, 1);
        this.hillsLeft.loadTexture('./images/cubemapTextures/hillsCubemap/left.png');
        this.hillsLeft.setTextureWrap('REPEAT', 'REPEAT');

        //RIGHT
        this.hillsRight = new CGFappearance(this.scene);
        this.hillsRight.setAmbient(0, 0, 0, 0);
        this.hillsRight.setDiffuse(0, 0, 0, 0);
        this.hillsRight.setSpecular(0, 0, 0, 0);
        this.hillsRight.setEmission(1, 1, 1, 1);
        this.hillsRight.loadTexture('./images/cubemapTextures/hillsCubemap/right.png');
        this.hillsRight.setTextureWrap('REPEAT', 'REPEAT');

        //TOP
        this.hillsTop = new CGFappearance(this.scene);
        this.hillsTop.setAmbient(0, 0, 0, 0);
        this.hillsTop.setDiffuse(0, 0, 0, 0);
        this.hillsTop.setSpecular(0, 0, 0, 0);
        this.hillsTop.setEmission(1, 1, 1, 1);
        this.hillsTop.loadTexture('./images/cubemapTextures/hillsCubemap/top.png');
        this.hillsTop.setTextureWrap('REPEAT', 'REPEAT');

        //BOTTOM
        this.hillsBottom = new CGFappearance(this.scene);
        this.hillsBottom.setAmbient(0, 0, 0, 0);
        this.hillsBottom.setDiffuse(0, 0, 0, 0);
        this.hillsBottom.setSpecular(0, 0, 0, 0);
        this.hillsBottom.setEmission(1, 1, 1, 1);
        this.hillsBottom.loadTexture('./images/cubemapTextures/hillsCubemap/bottom.png');
        this.hillsBottom.setTextureWrap('REPEAT', 'REPEAT');
    }

    initSpaceTexture() {
        //BACK
        this.spaceBack = new CGFappearance(this.scene);
        this.spaceBack.setAmbient(0, 0, 0, 0);
        this.spaceBack.setDiffuse(0, 0, 0, 0);
        this.spaceBack.setSpecular(0, 0, 0, 0);
        this.spaceBack.setEmission(1, 1, 1, 1);
        this.spaceBack.loadTexture('./images/cubemapTextures/spaceCubemap/back.png');
        this.spaceBack.setTextureWrap('REPEAT', 'REPEAT');

        //FRONT
        this.spaceFront = new CGFappearance(this.scene);
        this.spaceFront.setAmbient(0, 0, 0, 0);
        this.spaceFront.setDiffuse(0, 0, 0, 0);
        this.spaceFront.setSpecular(0, 0, 0, 0);
        this.spaceFront.setEmission(1, 1, 1, 1);
        this.spaceFront.loadTexture('./images/cubemapTextures/spaceCubemap/front.png');
        this.spaceFront.setTextureWrap('REPEAT', 'REPEAT');

        //LEFT
        this.spaceLeft = new CGFappearance(this.scene);
        this.spaceLeft.setAmbient(0, 0, 0, 0);
        this.spaceLeft.setDiffuse(0, 0, 0, 0);
        this.spaceLeft.setSpecular(0, 0, 0, 0);
        this.spaceLeft.setEmission(1, 1, 1, 1);
        this.spaceLeft.loadTexture('./images/cubemapTextures/spaceCubemap/left.png');
        this.spaceLeft.setTextureWrap('REPEAT', 'REPEAT');

        //RIGHT
        this.spaceRight = new CGFappearance(this.scene);
        this.spaceRight.setAmbient(0, 0, 0, 0);
        this.spaceRight.setDiffuse(0, 0, 0, 0);
        this.spaceRight.setSpecular(0, 0, 0, 0);
        this.spaceRight.setEmission(1, 1, 1, 1);
        this.spaceRight.loadTexture('./images/cubemapTextures/spaceCubemap/right.png');
        this.spaceRight.setTextureWrap('REPEAT', 'REPEAT');

        //TOP
        this.spaceTop = new CGFappearance(this.scene);
        this.spaceTop.setAmbient(0, 0, 0, 0);
        this.spaceTop.setDiffuse(0, 0, 0, 0);
        this.spaceTop.setSpecular(0, 0, 0, 0);
        this.spaceTop.setEmission(1, 1, 1, 1);
        this.spaceTop.loadTexture('./images/cubemapTextures/spaceCubemap/top.png');
        this.spaceTop.setTextureWrap('REPEAT', 'REPEAT');

        //BOTTOM
        this.spaceBottom = new CGFappearance(this.scene);
        this.spaceBottom.setAmbient(0, 0, 0, 0);
        this.spaceBottom.setDiffuse(0, 0, 0, 0);
        this.spaceBottom.setSpecular(0, 0, 0, 0);
        this.spaceBottom.setEmission(1, 1, 1, 1);
        this.spaceBottom.loadTexture('./images/cubemapTextures/spaceCubemap/bottom.png');
        this.spaceBottom.setTextureWrap('REPEAT', 'REPEAT');
    }

    initTextures() {
        this.initUnderWaterTexture();
        this.initHillsTexture();
        this.initSpaceTexture();
    }

    updateSelectedTexture() {
        if (this.scene.selectedTexture == 0) {
            this.selectedTextureFront = this.underWaterFront;
            this.selectedTextureBack = this.underWaterBack;
            this.selectedTextureRight = this.underWaterRight;
            this.selectedTextureLeft = this.underWaterLeft;
            this.selectedTextureTop = this.underWaterTop;
            this.selectedTextureBottom = this.underWaterBottom;
        }

        if (this.scene.selectedTexture == 1) {
            this.selectedTextureFront = this.hillsFront;
            this.selectedTextureBack = this.hillsBack;
            this.selectedTextureRight = this.hillsRight;
            this.selectedTextureLeft = this.hillsLeft;
            this.selectedTextureTop = this.hillsTop;
            this.selectedTextureBottom = this.hillsBottom;
        }

        if (this.scene.selectedTexture == 2) {
            this.selectedTextureFront = this.spaceFront;
            this.selectedTextureBack = this.spaceBack;
            this.selectedTextureRight = this.spaceRight;
            this.selectedTextureLeft = this.spaceLeft;
            this.selectedTextureTop = this.spaceTop;
            this.selectedTextureBottom = this.spaceBottom;
        }
    }

    display() {
        this.updateSelectedTexture();

        this.scene.pushMatrix();
        this.scene.scale(50, 50, 50);

        this.scene.pushMatrix(); //FRONT
        this.selectedTextureFront.apply();
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); //BACK
        this.selectedTextureBack.apply();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); //RIGHT
        this.selectedTextureRight.apply();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); //LEFT
        this.selectedTextureLeft.apply();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); //TOP
        this.selectedTextureTop.apply();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); //BOTTOM
        this.selectedTextureBottom.apply();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}
