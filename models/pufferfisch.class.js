class pufferfisch extends movableObject {

    height = 80;
    width = 80;

    IMAGES_MOVE_PINK = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
    ];
    IMAGES_MOVE_ROSE = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png'
    ];
    IMAGES_MOVE_GREEN = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];


    constructor(color = 'pink') {
        super()
        this.images = 
        color === 'rose' ? this.IMAGES_MOVE_ROSE :
        color === 'green' ?  this.IMAGES_MOVE_GREEN :
        this.IMAGES_MOVE_PINK;

        this.loadImage(this.images[0]);
        this.loadImages(this.images);

        this.x = 200 + Math.random() * 500;
        this.y = 40 + Math.random() * 200;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    animate(){
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.images);
        }, 200);
    }
}