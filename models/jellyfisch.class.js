class jellyfisch extends movableObject {

    height = 80;
    width = 80;

    IMAGES_MOVE_LILA = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila4.png',
    ];

    IMAGES_MOVE_YELLOW = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow_1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow_2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow_3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow_4.png',
    ];

    constructor(color = 'lila') {
        super()
        this.images = (color === 'yellow') ? this.IMAGES_MOVE_YELLOW : this.IMAGES_MOVE_LILA;
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