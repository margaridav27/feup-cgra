import { CGFappearance, CGFtexture, CGFshader } from "../../lib/CGF.js";
import { MyPlane } from "../primitives/MyPlane.js";

export class MySandTerrain {
    constructor(scene) {
        this.scene = scene;

        this.initObjects();
        this.initAppearances();
        this.initShaders();
    }

    initObjects() { this.sandTerrain = new MyPlane(this.scene, 50, 0, 1, 0, 1); }

    initAppearances() {
        this.sandTerrainAppearance = new CGFappearance(this.scene);
        this.sandTerrainAppearance.loadTexture("./images/sandTerrain/sand.jpg");
        this.sandTerrainAppearance.setTextureWrap('REPEAT', 'REPEAT');
    }

    initShaders() {
        this.sandTerrainShader = new CGFshader(this.scene.gl, "shaders/sandShader.vert", "shaders/sandShader.frag");
        this.sandTerrainHeightMap = new CGFtexture(this.scene, "./images/sandTerrain/sandMap.png");
        this.sandTerrainShader.setUniformsValues({ sandHeightMap: 1 });
    }

    display() {
        this.sandTerrainAppearance.apply();
        this.scene.setActiveShader(this.sandTerrainShader);
        this.sandTerrainHeightMap.bind(1);

        this.scene.pushMatrix();

        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.scale(50, 50, 1);
        this.sandTerrain.display();

        this.scene.popMatrix();

        this.scene.setDefaultShader();
    }
}
