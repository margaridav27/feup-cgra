import { MyMovingObject } from "../../primitives/MyMovingObject.js";
import { MyFish } from "./MyFish.js";


export class MyMovingFish extends MyMovingObject {
    constructor(scene) {
        super(scene);

        this.initObjects();

        this.height = 0;
        this.pickedRock = undefined;
    }

    initObjects() {
        this.movingFish = new MyFish(this.scene, 'images/fish/fishSkinTexture.jpg', [0.75, 0.95, 1.0, 1.0]);
        this.reset();
    }

    climb(val) {
        if (this.height != val && this.height != 0) this.height = 0;
        else this.height = val;
    }

    move() {
        this.deltaPos[0] += Math.sin(this.angle) * 0.1 * this.speed;

        if (this.deltaPos[1] + this.height < -2.5 || this.deltaPos[1] + this.height > 2) this.height = 0;
        else this.deltaPos[1] += this.height;

        this.deltaPos[2] += Math.cos(this.angle) * 0.1 * this.speed;
    }

    pickRock() {
        let currPickedRock = undefined;
        let minDistToRock = 10;

        let fishPosition = this.deltaPos;

        //the fish is at the lower vertical limit
        if (fishPosition[1] < -2) {
            for (let n = 0; n < this.scene.rockSet.numberOfRocks; n++) {
                let rockPosition = this.scene.rockSet.rockSet[n].translationFactor;

                const dist = Math.sqrt((rockPosition[0] - fishPosition[0]) ** 2 + (rockPosition[2] - fishPosition[2]) ** 2);

                //the fish is less than 1.5 units away from the nearest rock
                if (dist < 1 && dist < minDistToRock && !this.scene.rockSet.rockSet[n].inShell) {
                    minDistToRock = dist;
                    currPickedRock = n;
                }
            }
        }
        //if no rock matches the above conditions, this will equal to undefined 
        this.pickedRock = currPickedRock;
    }

    dropRock() {
        let fishPosition = this.deltaPos;
        let shellCenterPosition = [10, -0.4, -1.5];

        if (fishPosition[1] < -2) {
            const dist = Math.sqrt((shellCenterPosition[0] - fishPosition[0]) ** 2 + (shellCenterPosition[2] - fishPosition[2]) ** 2);

            if (dist <= 2.5) {
                this.scene.rockSet.rockSet[this.pickedRock].translationFactor = this.scene.rockSet.rockSet[this.pickedRock].shellPosition;
                console.log(this.scene.rockSet.rockSet[this.pickedRock].shellPosition);
                this.scene.rockSet.rockSet[this.pickedRock].inShell = true;
                this.pickedRock = undefined;
            }
        }
    }

    haveRock() { return (this.pickedRock !== undefined); }

    update() {
        this.move();
        //moving the rock
        if (this.haveRock()) {
            this.scene.rockSet.rockSet[this.pickedRock].translationFactor =
                [this.deltaPos[0] + Math.sin(this.angle) * 0.65, this.deltaPos[1] + 3, this.deltaPos[2] + Math.cos(this.angle) * 0.65];
        }
    }

    reset() {
        this.angle = 0;
        this.height = 0;
        this.speed = 0;
        this.deltaPos = [0, 2, 0];
        this.pickedRock = undefined;
        this.scene.rockSet.generateNewPos();
    }

    scaleObject() {
        const pos = this.deltaPos;
        this.scene.translate(pos[0], pos[1] + 3, pos[2]);
        this.scene.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        this.scene.translate(-pos[0], -pos[1] - 3, -pos[2]);
    }

    display() {
        this.updateScaleFactor();

        this.scene.pushMatrix();
        this.scaleObject();
        this.scene.translate(this.deltaPos[0], this.deltaPos[1], this.deltaPos[2]);
        this.scene.rotate(this.angle, 0, 1, 0);
        this.movingFish.display(this.speed, this.turningRight ? 0 : 1, this.turningLeft ? 0 : 1);
        this.scene.popMatrix();

        this.resetTurning();
    }
}
