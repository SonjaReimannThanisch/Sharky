class BackgroundObject extends movableObject {
    constructor(imagePath, canvasWidth, canvasHeight) {
        super();
        this.loadImage(imagePath);

        this.img.onload = () => {
            const aspectRatio = this.img.naturalWidth / this.img.naturalHeight;
            this.width = canvasWidth;
            this.height = this.width / aspectRatio;
            this.x = 0;
            this.y = canvasHeight - this.height;
        };
    }
}

