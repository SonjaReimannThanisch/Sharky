class FinSlapAttack extends Attack {

    // width = 120;
    // height = 120;
    // damage = 20;
    // lifetime = 180;

    IMAGES_SlapAttack = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png',
    ];

    constructor() {
        super();
        this.x = 100;
        this.y = 100;
        this.loadImage(this.IMAGES_SlapAttack);
        this.character = character;
        this.img = this.imageCache[this.IMAGES[0]];
        // this.updatePosition();
        this.attack(100, 150);
        this.animate();
    }

    attack(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = 30;
    }

    updatePosition() {
        const offsetX = this.character.otherDirection ? -40 : this.character.width - 40;
        this.x = this.character.x + offsetX;
        this.y = this.character.y + (this.character.height / 2) - (this.height / 2);
    }

    animate() {
        const interval = setInterval(() => {
            this.updatePosition();
            this.playAnimation(this.IMAGES_SlapAttack);

            if (this.isExpired()) {
                clearInterval(interval);
            }
        }, 1000 / 20);
    }
}
