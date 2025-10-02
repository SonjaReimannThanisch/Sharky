class pufferfisch extends movableObject {

    height = 80;
    width = 80;

    IMAGES_MOVE = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
    ];
    currentImage = 0; 

    constructor(x, y) {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png');
        this.x = 200 + Math.random()*500;

        this.animate();
    }

    animate(){
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_MOVE.length;
            let path = this.IMAGES_MOVE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 2000);
    }
}