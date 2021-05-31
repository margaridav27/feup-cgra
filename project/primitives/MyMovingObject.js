/**
 * @class MyMovingObject
 */
export class MyMovingObject {
    constructor(scene) {
        this.scene = scene;
        this.angle = 0;
        this.speed = 0;
        this.deltaPos = [0, 0, 0];
    }

    updateScaleFactor() { this.scaleFactor = this.scene.scaleFactor; }

    updateSpeedFactor() { this.speedFactor = this.scene.speedFactor; }

    update() { this.move(); }

    accelerate(val) { this.speed += val; }

    turn(val) {
        this.angle += val;
        val > 0 ? this.turningRight = true : this.turningLeft = true;
    }

    move() {
        this.deltaPos[0] += Math.sin(this.angle) * this.speed * 0.1; //x
        this.deltaPos[2] += Math.cos(this.angle) * this.speed * 0.1; //z
    }

    resetTurning() {
        this.turningRight = false;
        this.turningLeft = false;
    }

    reset() {
        this.angle = 0;
        this.speed = 0;
        this.deltaPos = [0, 0, 0];
    }
}
