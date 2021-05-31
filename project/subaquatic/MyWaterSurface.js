import { CGFappearance, CGFtexture, CGFshader } from "../../lib/CGF.js";
import { MyPlane } from "../primitives/MyPlane.js";

export class MyWaterSurface {
    constructor(scene) {
        this.scene = scene;

        this.initObjects();
        this.initAppearances();
        this.initShaders();
    }

    initObjects() { this.waterSurface = new MyPlane(this.scene, 50, 0, 1, 0, 1); }

    initAppearances() {
        this.waterSurfaceAppearance = new CGFappearance(this.scene);
        this.waterSurfaceAppearance.loadTexture('images/waterSurface/pier.jpg');
        this.waterSurfaceAppearance.setTextureWrap('REPEAT', 'REPEAT');
    }

    initShaders() {
        this.waterSurfaceShader = new CGFshader(this.scene.gl, "shaders/waterSurfaceShader.vert", "shaders/waterSurfaceShader.frag");
        this.waterSurfaceDistortionMap = new CGFtexture(this.scene, "images/waterSurface/distortionmap.png");
        this.waterSurfaceShader.setUniformsValues({ timeFactor: 0, waterSurfaceDistortionMap: 1 });
    }

    display() {
        this.waterSurfaceAppearance.apply();
        this.scene.setActiveShader(this.waterSurfaceShader);
        this.waterSurfaceDistortionMap.bind(1);

        this.scene.pushMatrix();

        this.scene.translate(0, 10, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(50, 50, 1);
        this.waterSurface.display();

        this.scene.popMatrix();

        this.scene.setDefaultShader();
    }
}
