class character extends movableObject {

    height = 280;
    width = 200;
    y = 80;
    speed = 10;
    minY = -130;
    maxY;

    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png', 
        'img/1.Sharkie/1.IDLE/3.png', 
        'img/1.Sharkie/1.IDLE/4.png', 
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_SWIN = [
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    world;

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIN);
        // this.animate();
    }

    animate() {
        this.maxY = this.world.canvas.height - this.height;

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
            }

            if (this.world.keyboard.UP && this.y > this.minY) {
                 this.y = Math.max(this.minY, this.y - this.speed);
                // this.y -= this.speed;
                console.log("AFTER", this.y);
            }
            if (this.world.keyboard.DOWN && this.y < this.maxY) {
                this.y += this.speed;
            }

            this.world.camera_x = -this.x;
        }, 1000 / 60);

        setInterval(() => {
            if (
                this.world.keyboard.RIGHT ||
                this.world.keyboard.LEFT  ||
                this.world.keyboard.UP    ||
                this.world.keyboard.DOWN
            ) {
                this.playAnimation(this.IMAGES_SWIN);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 200);


    }
}