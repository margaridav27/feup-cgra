import { Utilities } from "../Utilities.js";
import { MySeaweed } from "./MySeaweed.js";
import { CGFshader } from "../../lib/CGF.js";

const SEAWEED_COLOR = [0.239, 0.387, 0.143, 1.0]

export class MySeaweedSet {
    constructor(scene, numberOfSeaweeds) {
        this.scene = scene;

        this.numberOfSeaweeds = numberOfSeaweeds;
        this.seaweedSet = [];

        this.initShaders();
        this.createSeaweed();
    }

    initShaders() {
        this.seaweedShader = new CGFshader(this.scene.gl, "shaders/seaweedShader.vert", "shaders/seaweedShader.frag");
        this.seaweedShader.setUniformsValues({ seaWeedColor: SEAWEED_COLOR, timeFactor: 0 });
    }

    createSeaweed() {
        for (let i = 0; i < this.numberOfSeaweeds; i++) {
            this.seaweedSet.push(new MySeaweed(this.scene));

            this.seaweedSet[i].scaleFactor = Utilities.generateRandomNumber(10, 15, 0.1);
            this.seaweedSet[i].xTranslationFactor = Utilities.generateRandomNumber(-20, 20, 1);
            this.seaweedSet[i].zTranslationFactor = Utilities.generateRandomNumber(-20, 20, 1);
        }
    }

    update(t) { this.seaweedShader.setUniformsValues({ timeFactor: t / 1000 % 100 }); }

    display() {
        this.scene.setActiveShader(this.seaweedShader);

        for (let i = 0; i < this.numberOfSeaweeds; i++) {
            this.scene.pushMatrix();

            this.scene.translate(this.seaweedSet[i].xTranslationFactor, 0, this.seaweedSet[i].zTranslationFactor);
            this.scene.scale(1, this.seaweedSet[i].scaleFactor, 1);
            this.seaweedSet[i].display();

            this.scene.popMatrix();
        }

        this.scene.setDefaultShader();
    }
}
