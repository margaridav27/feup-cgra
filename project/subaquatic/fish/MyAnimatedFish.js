import { Utilities } from "../../Utilities.js";
import { MyFish } from "./MyFish.js";

const TRAJECTORY_RADIUS = 5;
const FRAME_RATE = 200;

export class MyAnimatedFish {
    constructor(scene) {
        this.scene = scene;

        this.angle = 0;
        this.deltaPos = [0, 0, 0];

        this.trajectoryCenter = [
            Utilities.generateRandomNumber(-10, 10, 1),
            Utilities.generateRandomNumber(1, 5, 1),
            Utilities.generateRandomNumber(-10, 10, 1)
        ];
        this.trajectoryDeltaT = Utilities.generateRandomNumber(2, 10, 1);
        this.trajectoryPerimeter = Math.PI * 2 * TRAJECTORY_RADIUS;

        this.turnValue = this.trajectoryPerimeter / (this.trajectoryDeltaT * FRAME_RATE);

        this.randomScaleFactor = Utilities.generateRandomNumber(4, 8, 0.1);

        this.initObjects();
    }

    initObjects() {
        let skinTexturePath = 'images/fish/fishSkinTexture'
            + Math.floor(Utilities.generateRandomNumber(1, 7, 1))
            + '.jpg';

        let skinColorVec = [
            Utilities.generateRandomNumber(0, 1, 1),
            Utilities.generateRandomNumber(0, 1, 1),
            Utilities.generateRandomNumber(0, 1, 1),
            1.0
        ];

        this.animatedFish = new MyFish(this.scene, skinTexturePath, skinColorVec);
    }

    turn() { this.angle += this.turnValue; }

    move() {
        this.deltaPos[0] = this.deltaPos[0] * Math.cos(this.angle)
            - this.deltaPos[1] * Math.sin(this.angle);

        this.deltaPos[2] = this.deltaPos[0] * Math.sin(this.angle)
            - this.deltaPos[1] * Math.cos(this.angle);
    }

    update() {
        this.turn();
        this.move();
    }

    display() {
        this.update();

        this.scene.pushMatrix();

        this.scene.translate(this.trajectoryCenter[0], this.trajectoryCenter[1], this.trajectoryCenter[2]);
        this.scene.rotate(-this.angle, 0, 1, 0);
        this.scene.translate(5, 0, 0);
        this.scene.scale(this.randomScaleFactor, this.randomScaleFactor, this.randomScaleFactor);
        this.animatedFish.display(1, 1, 1);

        this.scene.popMatrix();
    }
}
