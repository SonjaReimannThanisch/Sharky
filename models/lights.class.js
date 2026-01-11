class Light extends movableObject {
    x = 20;
    height = 250;
    width = 250;


    constructor() {
        super();
        this.loadImage('img/3. Background/Legacy/Layers/1. Light/1.png');
        this.x = 0;
        this.y = 0;
        this.width = 720;
        this.height = 480;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }

}
