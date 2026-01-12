class barriers extends drawableObject {
    width = 200;
    height = 200;

  constructor(imgPath, x, y, width, height) {
    super();
    this.loadImage(imgPath);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}