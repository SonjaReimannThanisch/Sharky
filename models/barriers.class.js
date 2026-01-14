class barriers extends drawableObject {
    width = 200;
    height = 200;

  constructor(imagePath, x, y, width, height) {
    super();
    this.loadImage(imagePath);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}