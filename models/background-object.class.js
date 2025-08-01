class BackgroundObject extends movableObject {
    constructor(imagePath, canvasWidth, canvasHeight) {
        super();
        this.loadImage(imagePath);
        this.x = 0;
        this.y = 480;
        this.height = 480;
        this.width = canvasWidth;
    }
}
