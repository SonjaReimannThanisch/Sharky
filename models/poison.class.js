class poison extends drawableObject {
    height = 100;
    width = 60;

    IMAGES = [
        'img/4.Marcadores/Posión/Dark - Right.png',
    ]

    constructor(x, y) {
        super();
        this.loadImage(this.IMAGES[0]);
        this.x = x;
        this.y = y;
    }
}