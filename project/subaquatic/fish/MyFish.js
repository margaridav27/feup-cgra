import { CGFobject } from '../../../lib/CGF.js';
import { MyFishBody } from './MyFishBody.js';
import { MyFishEyes } from './MyFishEyes.js';
import { MyFishFins } from './MyFishFins.js';
import { MyFishTail } from './MyFishTail.js';

export class MyFish extends CGFobject {
    constructor(scene, skinTexturePath, skinColorVec) {
        super(scene);

        this.skinTexturePath = skinTexturePath;
        this.skinColorVec = skinColorVec;

        this.initObjects();
    }

    initObjects() {
        this.body = new MyFishBody(this.scene, this.skinTexturePath, this.skinColorVec);
        this.eyes = new MyFishEyes(this.scene);
        this.fins = new MyFishFins(this.scene, this.skinColorVec);
        this.tail = new MyFishTail(this.scene, this.skinColorVec);
    }

    display(speed, right, left) {
        this.body.display();
        this.tail.display(speed);
        this.fins.display(speed, right, left);
        this.eyes.display();
    }
}
