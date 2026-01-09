class BubbleTrapAttack extends Attack {


    IMAGES_BubbleAttack = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ]

    constructor() {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png');
        this.x = 100;
        this.y = 100;
        this-this.loadImage(this.IMAGES_BubbleAttack);
        this.height = 100;
        this.width = 40;
        this.character = character;
        this.img = this.imageCache[this.IMAGES[0]];
        this.attack(100, 150);
        this.animate();
    }


    attack(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = 30;
        setInterval(() => {
            this.y += 10;
        }, 25);
    }

    updatePosition() {
        const offsetX = this.character.otherDirection ? -40 : this.character.width - 40;
        this.x = this.character.x + offsetX;
        this.y = this.character.y + (this.character.height / 2) - (this.height / 2);
    }

    animate() {
        const interval = setInterval(() => {
            this.updatePosition();
            this.playAnimation(this.IMAGES_BubbleAttack);

            if (this.isExpired()) {
                clearInterval(interval);
            }
        }, 1000 / 20);
    }

}