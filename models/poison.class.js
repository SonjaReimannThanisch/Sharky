class poison extends drawableObject {
    height = 80;
    width = 80;

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