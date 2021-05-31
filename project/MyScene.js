import { CGFscene, CGFcamera, CGFaxis, CGFappearance } from "../lib/CGF.js";

import { MyCubeMap } from "./primitives/MyCubeMap.js";

import { MySphere } from "./primitives/MySphere.js";
import { MyCylinder } from "./primitives/MyCylinder.js";

import { MyMovingFish } from "./subaquatic/fish/MyMovingFish.js";
import { MyMovingPyramid } from "./primitives/MyMovingPyramid.js";

import { MySandTerrain } from "./subaquatic/MySandTerrain.js";
import { MyWaterSurface } from "./subaquatic/MyWaterSurface.js";
import { MyWoodPillars } from "./subaquatic/MyWoodPillars.js";
import { MyRockSet } from "./subaquatic/MyRockSet.js";
import { MySeaweedSet } from "./subaquatic/MySeaweedSet.js";
import { MyAnimatedFish } from "./subaquatic/fish/MyAnimatedFish.js";

const TURN_INCREMENT = 0.1;
const UP_DOWN_INCREMENT = 0.05;

/**
* MyScene
* @constructor
*/
export class MyScene extends CGFscene {
    constructor() {
        super();
    }

    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);

        this.enableTextures(true);

        this.initUIControlVariables();
        this.initMaterials();
        this.initObjects();
    }

    initUIControlVariables() {
        // axis 
        this.displayAxis = false;

        // variables related to objects checkboxes
        this.displayMovingPyramid = false;
        this.displayCubeMap = true;
        this.displayCylinder = false;
        this.displaySphere = false;
        this.displayFish = true;
        this.displayAnimatedFishes = true;
        this.displayWaterSurface = true;
        this.displaySandTerrain = true;
        this.displayRocks = true;
        this.displayWoodPillars = true;
        this.displaySeaweed = true;

        // variables related to environment textures list
        this.selectedTexture = 0;
        this.textureList = { 'Subaquatic': 0, 'Hills': 1, 'Space': 2 }

        // variable related to objects scaleFactor slider
        this.scaleFactor = 1;

        // variable related to objects speedFactor slider
        this.speedFactor = 1;
    }

    initMaterials() {
        this.defaultAppearance = new CGFappearance(this);
        this.defaultAppearance.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setEmission(0, 0, 0, 1);
        this.defaultAppearance.setShininess(120);

        this.worldTexture = new CGFappearance(this);
        this.worldTexture.setAmbient(0, 0, 0, 0);
        this.worldTexture.setDiffuse(0, 0, 0, 0);
        this.worldTexture.setSpecular(0, 0, 0, 0);
        this.worldTexture.setEmission(1, 1, 1, 1);
        this.worldTexture.loadTexture('images/earth.jpg');
        this.worldTexture.setTextureWrap('REPEAT', 'REPEAT');
    }

    initObjects() {
        this.axis = new CGFaxis(this);

        this.cubeMap = new MyCubeMap(this);
        this.movingPyramid = new MyMovingPyramid(this);
        this.cylinder = new MyCylinder(this, 16);
        this.sphere = new MySphere(this, 16, 8);

        this.sandTerrain = new MySandTerrain(this);
        this.waterSurface = new MyWaterSurface(this);
        this.woodPillars = new MyWoodPillars(this);
        this.rockSet = new MyRockSet(this, 15);
        this.seaweedSet = new MySeaweedSet(this, 15);
        this.movingFish = new MyMovingFish(this);
        this.animatedFishes = [];
        for (var i = 0; i < 5; i++) this.animatedFishes.push(new MyAnimatedFish(this));
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initCameras() { this.camera = new CGFcamera(1.8, 0.1, 500, vec3.fromValues(-2, 4, 3), vec3.fromValues(0, 3, 0)); }

    updateSelectedTexture(texture) { this.selectedTexture = texture; }

    updateScaleFactor(value) { this.scaleFactor = value; }

    updateSpeedFactor(value) { this.speedFactor = value; }

    setDefaultShader() { this.setActiveShader(this.defaultShader); }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setEmission(0, 0, 0, 1);
        this.setShininess(10.0);
    }

    update(t) { // called periodically (as per setUpdatePeriod() in init())

        this.checkKeys();

        this.waterSurface.waterSurfaceShader.setUniformsValues({ timeFactor: t / 1000 % 100 });

        this.seaweedSet.update(t)
    }

    display() {
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();

        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        this.setDefaultAppearance();

        if (this.displayAxis) this.axis.display();

        if (this.displayCubeMap) this.cubeMap.display();

        if (this.displaySandTerrain) this.sandTerrain.display();

        if (this.displayWaterSurface) this.waterSurface.display();

        if (this.displayRocks) this.rockSet.display();

        if (this.displaySphere) { this.worldTexture.apply(); this.sphere.display(); }

        if (this.displayCylinder) { this.worldTexture.apply(); this.cylinder.display(); }

        if (this.displayMovingPyramid) { this.movingPyramid.update(); this.movingPyramid.display(); }

        if (this.displayWoodPillars) this.woodPillars.display();

        if (this.displaySeaweed) this.seaweedSet.display();

        if (this.displayFish) { this.movingFish.update(); this.movingFish.display(); }

        if (this.displayAnimatedFishes) this.animatedFishes.forEach(animatedFish => animatedFish.display());
    }

    checkKeys() {
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            this.movingPyramid.accelerate(this.speedFactor);
            this.movingFish.accelerate(this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyS")) {
            this.movingPyramid.accelerate(-this.speedFactor);
            this.movingFish.accelerate(-this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyA")) {
            this.movingPyramid.turn(-TURN_INCREMENT);
            this.movingFish.turn(-TURN_INCREMENT);
        }

        if (this.gui.isKeyPressed("KeyD")) {
            this.movingPyramid.turn(TURN_INCREMENT);
            this.movingFish.turn(TURN_INCREMENT);
        }

        if (this.gui.isKeyPressed("KeyP")) {
            this.movingFish.climb(UP_DOWN_INCREMENT);
        }

        if (this.gui.isKeyPressed("KeyL")) {
            this.movingFish.climb(-UP_DOWN_INCREMENT);
        }

        if (this.gui.isKeyPressed("KeyR")) {
            this.movingPyramid.reset();
            this.movingFish.reset();
        }

        if (this.gui.isKeyPressed("KeyC")) {
            if (this.movingFish.haveRock()) this.movingFish.dropRock();
            else this.movingFish.pickRock();
        }
    }
}
