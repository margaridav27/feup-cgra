import { CGFinterface, dat } from '../lib/CGF.js';

/**
* MyInterface
* @constructor
*/
export class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);

        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();

        var obj = this;

        this.gui.add(this.scene, 'displayAxis').name('Axis');

        // objects checkboxes
        var primitives = this.gui.addFolder("Primitive Objects");

        primitives.add(this.scene, 'displayMovingPyramid').name('Moving Pyramid');
        primitives.add(this.scene, 'displayCubeMap').name('Cube Map');
        primitives.add(this.scene, 'displayCylinder').name('Cylinder');
        primitives.add(this.scene, 'displaySphere').name('Sphere');

        var subaquatic = this.gui.addFolder("Subaquatic Objects");

        subaquatic.add(this.scene, 'displayWaterSurface').name('Water Surface');
        subaquatic.add(this.scene, 'displaySandTerrain').name('Sand Terrain');
        subaquatic.add(this.scene, 'displayFish').name('Fish');
        subaquatic.add(this.scene, 'displayAnimatedFishes').name('Animated Fishes');
        subaquatic.add(this.scene, 'displayRocks').name('Rocks');
        subaquatic.add(this.scene, 'displayWoodPillars').name('Wood Pillars');
        subaquatic.add(this.scene, 'displaySeaweed').name('Seaweed');

        // environment textures list
        this.gui.add(this.scene, 'selectedTexture', this.scene.textureList)
            .name('Textures')
            .onChange(this.scene.updateSelectedTexture
                .bind(this.scene));

        // scale factor slider
        this.gui.add(this.scene, 'scaleFactor', 0.5, 3)
            .onChange(this.scene.updateScaleFactor
                .bind(this.scene));

        // speed factor slider
        this.gui.add(this.scene, 'speedFactor', 0.1, 3)
            .onChange(this.scene.updateSpeedFactor
                .bind(this.scene));

        this.initKeys();

        return true;
    }

    initKeys() {
        // create reference from the scene to the GUI
        this.scene.gui = this;

        // disable the processKeyboard function
        this.processKeyboard = function () { };

        // create a named array to store which keys are being pressed
        this.activeKeys = {};
    }

    processKeyDown(event) {
        // called when a key is pressed down
        // mark it as active in the array
        this.activeKeys[event.code] = true;

    }

    processKeyUp(event) {
        // called when a key is released, mark it as inactive in the array
        this.activeKeys[event.code] = false;
    }

    isKeyPressed(keyCode) {
        if (this.activeKeys[keyCode] === true && (keyCode == "keyL" || keyCode == "keyP")) {
            this.activeKeys[keyCode] = false;
            return true;
        }

        return this.activeKeys[keyCode] || false;
    }
}
