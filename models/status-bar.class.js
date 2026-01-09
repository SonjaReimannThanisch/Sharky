class statusBar extends drawableObject {

    IMAGES_STATUS_LIFE = [
        'img/4.Marcadores/green/Life/0_copia.png',
        'img/4.Marcadores/green/Life/20_copia.png',
        'img/4.Marcadores/green/Life/40_copia.png',
        'img/4.Marcadores/green/Life/60_copia.png',
        'img/4.Marcadores/green/Life/80_copia.png',
        'img/4.Marcadores/green/Life/100_copia.png',
    ];

    IMAGES_STATUS_COINS = [
        'img/4.Marcadores/green/Coin/0_copia4.png',
        'img/4.Marcadores/green/Coin/20_copia2.png',
        'img/4.Marcadores/green/Coin/40_copia4.png',
        'img/4.Marcadores/green/Coin/60_copia4.png',
        'img/4.Marcadores/green/Coin/80_copia4.png',
        'img/4.Marcadores/green/Coin/100_copia4.png',
    ];

    IMAGES_STATUS_POISON = [
        'img/4.Marcadores/green/poisoned bubbles/0_copia2.png',
        'img/4.Marcadores/green/poisoned bubbles/20_copia3.png',
        'img/4.Marcadores/green/poisoned bubbles/40_copia2.png',
        'img/4.Marcadores/green/poisoned bubbles/60_copia2.png',
        'img/4.Marcadores/green/poisoned bubbles/80_copia2.png',
        'img/4.Marcadores/green/poisoned bubbles/100_copia3.png',
    ];

    //     IMAGES_STATUS_POISON = [
    //     'img/4.Marcadores/green/poisoned bubbles/100_copia3.png',
    //     'img/4.Marcadores/green/poisoned bubbles/80_copia2.png',
    //     'img/4.Marcadores/green/poisoned bubbles/60_copia2.png',
    //     'img/4.Marcadores/green/poisoned bubbles/40_copia2.png',
    //     'img/4.Marcadores/green/poisoned bubbles/20_copia3.png',
    //     'img/4.Marcadores/green/poisoned bubbles/0_copia2.png',
    // ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUS_LIFE);
        this.loadImages(this.IMAGES_STATUS_COINS);
        this.loadImages(this.IMAGES_STATUS_POISON);
        this.x = 40;
        this.y = 0;
        this.width = 180;
        this.height = 50;
        this.setPercentage(100);
        let pathLife = this.IMAGES_STATUS_LIFE[this.resolveImageIndex()];
        let pathCoins = this.IMAGES_STATUS_COINS[this.resolveImageIndex()];
        let pathPoison = this.IMAGES_STATUS_POISON[this.resolveImageIndex()];
        this.img = this.imageCache[pathLife, pathCoins, pathPoison];
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let pathLife = this.IMAGES_STATUS_LIFE[this.resolveImageIndex()];
        let pathCoins = this.IMAGES_STATUS_COINS[this.resolveImageIndex()];
        let pathPoison = this.IMAGES_STATUS_POISON[this.resolveImageIndex()];
        this.img = this.imageCache[pathLife, pathCoins];
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
