class statusBar extends drawableObject {

    IMAGES_STATUS = [
        'img/4.Marcadores/green/Life/0_copia.png',
        'img/4.Marcadores/green/Life/20_copia.png',
        'img/4.Marcadores/green/Life/40_copia.png',
        'img/4.Marcadores/green/Life/60_copia.png',
        'img/4.Marcadores/green/Life/80_copia.png',
        'img/4.Marcadores/green/Life/100_copia.png',
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUS);
        this.x = 40;
        this.y = 0;
        this.width = 180;
        this.height = 50;
        this.setPercentage(100);
        let path = this.IMAGES_STATUS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_STATUS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage == 80) {
            return 4;
        } else if (this.percentage == 60) {
            return 3;
        } else if (this.percentage == 40) {
            return 2;
        } else if (this.percentage == 20) {
            return 1;
        } else {
            return 0;
        }
    }
}
