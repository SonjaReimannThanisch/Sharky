class BackgroundObject extends movableObject {
    constructor(imagePath, canvasWidth, canvasHeight) {
        super();
        this.loadImage(imagePath);
        this.x = 0;
        this.y = 480;         // oder teste mit 400, 420…
        this.height = 480;    // Bildhöhe anpassen
        this.width = canvasWidth;
    }
}
