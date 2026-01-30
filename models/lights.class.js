class Light extends movableObject {
    // x = 20;
    // height = 250;
    // width = 250;


    constructor(imagePath, x = 0) {
        super();
        this.loadImage(imagePath);
        this.x = x;
        this.y = 0;
        this.width = 720;
        this.height = 480;
        // this.animate();
    }

    // animate() {
    //     this.moveLeft();
    // }

}
