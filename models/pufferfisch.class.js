class pufferfisch extends movableObject {

    height = 80;
    width = 80;

    IMAGES_MOVE = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
    ];


    constructor(x, y) {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.loadImages(this.IMAGES_MOVE);
        this.x = 200 + Math.random() * 500;
        this.y = 40 + Math.random() * 200;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    animate(){
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_MOVE.length;
            let path = this.IMAGES_MOVE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200);
    }
}