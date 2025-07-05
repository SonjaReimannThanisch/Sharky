class Light extends movableObject {
    constructor(canvasWidth, canvasHeight) {
        super();
        this.loadImage('img/3. Background/Legacy/Layers/1. Light/1.png');
        this.x = 0;
        this.y = 0;
        this.width = canvasWidth;
        this.height = canvasHeight;
    }
}