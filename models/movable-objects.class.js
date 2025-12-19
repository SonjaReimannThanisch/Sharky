class movableObject {
    x = 10;
    y = 280;
    width = 150;
    height = 150;
    img;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    // speedY = 0;
    // accerleration = -2.5;

    // applyGravity(){
    //     setInterval(() => {
    //         if(this.isAboveGround() || this.speedY > 0) {
    //         this.y += this.speedY;
    //         this.speedY -= this.accerleration;
    //         }
    //     }, 1000 / 25);
    // }

    isAboveGround() {
        return this.y < 80
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;

    }

    /**
     * Lädt Bilder.
     * @param {Array} arr - [
     * 'img/1.Sharkie/1.IDLE/2.png', 
     * 'img/1.Sharkie/1.IDLE/3.png', 
     * 'img/1.Sharkie/1.IDLE/4.png', 
     * 'img/1.Sharkie/1.IDLE/5.png',
     * 'img/1.Sharkie/1.IDLE/6.png',
     * 'img/1.Sharkie/1.IDLE/7.png',
     * 'img/1.Sharkie/1.IDLE/8.png',
     * 'img/1.Sharkie/1.IDLE/9.png',
     * 'img/1.Sharkie/1.IDLE/10.png',
     * 'img/1.Sharkie/1.IDLE/11.png',
     * 'img/1.Sharkie/1.IDLE/12.png',
     * 'img/1.Sharkie/1.IDLE/13.png',
     * 'img/1.Sharkie/1.IDLE/14.png',
     * 'img/1.Sharkie/1.IDLE/15.png',
     * 'img/1.Sharkie/1.IDLE/16.png',
     * 'img/1.Sharkie/1.IDLE/17.png',
     * 'img/1.Sharkie/1.IDLE/18.png',
     * ]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_MOVE.length; // Let i = 5 % 6; 0, rest 5
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}



