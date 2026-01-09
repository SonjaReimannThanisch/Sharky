class character extends movableObject {

    height = 280;
    width = 200;
    y = 80;
    speed = 10;
    minY = -130;
    maxY;
    lastAttack = 0;
    attackCooldown = 300; // ms


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

    IMAGES_POISENED = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];

    IMAGES_POIHURT = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    ]

    world;

        // offset = {
    //     top: 120,
    //     left: 30,
    //     right: 40,
    //     bottom: 30,
    // }

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIN);
        this.loadImages(this.IMAGES_POISENED);
        this.loadImages(this.IMAGES_POIHURT);
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
            }
            if (this.world.keyboard.DOWN && this.y < this.maxY) {
                this.y += this.speed;
            }

            if (this.world.keyboard.D && Date.now() - this.lastAttack > this.attackCooldown) {
                this.lastAttack = Date.now();
                this.world.attacks.push(new FinSlapAttack(this));
                this.world.keyboard.D = false;
            }


            this.world.camera_x = -this.x;
        }, 1000 / 60);

        setInterval(() => {

            if(this.isDead()) {
                this.playAnimation(this.IMAGES_POISENED);
            } else if(this.isHurt()) {
                this.playAnimation(this.IMAGES_POIHURT);
            } else if (
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