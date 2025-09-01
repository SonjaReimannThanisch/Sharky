class BackgroundObject extends movableObject {
  constructor(imagePath, canvasWidth, canvasHeight) {
    super().loadImage(imagePath);
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.x = 0;
    this.y = canvasHeight - this.height;
  }
}


