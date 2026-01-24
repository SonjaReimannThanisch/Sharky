class coin extends drawableObject {
    height = 60;
    width = 60;

    IMAGES = [
        'img/4.Marcadores/1. Coins/1.png',
        'img/4.Marcadores/1. Coins/2.png',
        'img/4.Marcadores/1. Coins/3.png',
        'img/4.Marcadores/1. Coins/4.png',
    ]

    constructor(x, y) {
        super();
        this.loadImage(this.IMAGES[3]);
        this.x = x;
        this.y = y;
    }
}