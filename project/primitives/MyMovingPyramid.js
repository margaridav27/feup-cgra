import { MyMovingObject } from "./MyMovingObject.js";
import { MyPyramid } from "./MyPyramid.js";

export class MyMovingPyramid extends MyMovingObject {
    constructor(scene) {
        super(scene);
        this.initObjects()
    }

    initObjects() { this.movingPyramid = new MyPyramid(this.scene, 3, 1); }

    display() {
        this.updateScaleFactor();

        this.scene.pushMatrix();

        this.scene.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        this.scene.translate(this.deltaPos[0], 0, this.deltaPos[2]);
        this.scene.rotate(this.angle, 0, 1, 0);
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.movingPyramid.display();

        this.scene.popMatrix();
    }

}
