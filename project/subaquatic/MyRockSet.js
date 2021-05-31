import { CGFappearance } from "../../lib/CGF.js";
import { MyRock } from "./MyRock.js";
import { Utilities } from "../Utilities.js";

export class MyRockSet {
    constructor(scene, numberOfRocks) {
        this.scene = scene;
        this.numberOfRocks = numberOfRocks;
        this.rockSet = [];

        this.initAppearances();
        this.createRocks();
    }

    initAppearances() {
        this.rockAppearance = new CGFappearance(this.scene);
        this.rockAppearance.setAmbient(0.35, 0.35, 0.35, 1);
        this.rockAppearance.setDiffuse(0.5, 0.5, 0.5, 1);
        this.rockAppearance.setSpecular(0.5, 0.5, 0.5, 1);
        this.rockAppearance.setShininess(300);
    }

    createRocks() {
        let shellCenterPosition = [10, -0.4, -1.5];
        let shellRadius = 2.5;
        let averageRockRadius = 0.2;
        let numberOfInnerCircles = shellRadius / (averageRockRadius * 2);
        let currentAng = 0;
        let rockCounter = 0;
        let currentInnerCircle = 0;
        let currentRadius;
        let rocksThatFitInCurrentCircle;
        let currentAngularIncrement;


        for (let i = 0; i < this.numberOfRocks; i++) {
            this.rockSet.push(new MyRock(this.scene, 32, 32));

            this.rockSet[i].scaleFactor = Utilities.generateRandomNumber(10, 20, 0.009);
            this.rockSet[i].translationFactor = [
                Utilities.generateRandomNumber(-20, 20, 1),
                0.4,
                Utilities.generateRandomNumber(-20, 20, 1)
            ];

            if (i == 0) {
                this.rockSet[i].shellPosition = shellCenterPosition;
                this.rockSet[i].shellPosition[1] = 0;

                currentInnerCircle++;
                currentRadius = (shellRadius / numberOfInnerCircles) * currentInnerCircle;
                rocksThatFitInCurrentCircle = (2 * Math.PI * currentRadius) / (averageRockRadius * 2);
                currentAngularIncrement = (2 * Math.PI) / rocksThatFitInCurrentCircle;
            }
            else {
                this.rockSet[i].shellPosition = [shellCenterPosition[0] + currentRadius * Math.cos(currentAng),
                shellCenterPosition[1] + 0.15 * currentInnerCircle,
                shellCenterPosition[2] + currentRadius * Math.sin(currentAng)];

                currentAng += currentAngularIncrement;
                rockCounter++;

                if (rockCounter >= rocksThatFitInCurrentCircle) {
                    currentInnerCircle++;
                    currentAng = 0;
                    rockCounter = 0;
                    currentRadius = (shellRadius / numberOfInnerCircles) * currentInnerCircle;
                    rocksThatFitInCurrentCircle = (2 * Math.PI * currentRadius) / (averageRockRadius * 2);
                    currentAngularIncrement = (2 * Math.PI) / rocksThatFitInCurrentCircle;
                }
            }
        }
    }

    display() {
        this.rockAppearance.apply();

        for (let i = 0; i < this.numberOfRocks; i++) {
            this.scene.pushMatrix();

            this.scene.translate(this.rockSet[i].translationFactor[0], this.rockSet[i].translationFactor[1], this.rockSet[i].translationFactor[2]);
            this.scene.scale(this.rockSet[i].scaleFactor, this.rockSet[i].scaleFactor, this.rockSet[i].scaleFactor);
            this.rockSet[i].display();

            this.scene.popMatrix();
        }

        this.scene.setDefaultAppearance();
    }

    generateNewPos() {
        this.rockSet = [];
        this.createRocks();
    }
}
