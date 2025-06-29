class movableObject {
    x = 10;
    y = 350;
    width = 150;
    height = 150;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    moveRight() {
        console.log('Move to the 1 Right');
        
    }

    moveLeft() {

    }
}