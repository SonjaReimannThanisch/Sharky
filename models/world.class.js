class world {
    mainCharacter = new character();
    enemies = [
        new pufferfisch(200, 350),
        new pufferfisch(350, 350),
        new pufferfisch(500, 350),
    ];

    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.mainCharacter = new character();


        const drawInterval = setInterval(() => {
            if (this.mainCharacter.img.complete) {
                this.draw(); // Nur zeichnen, wenn Bild geladen
                clearInterval(drawInterval); // Dann aufhören
            }
        }, 100);
    }

    draw() {
        this.ctx.drawImage(
            this.mainCharacter.img,
            this.mainCharacter.x,
            this.mainCharacter.y,
            this.mainCharacter.width,
            this.mainCharacter.height
        );

        this.enemies.forEach(enemy => {
            this.ctx.drawImage(
                enemy.img,
                enemy.x,
                enemy.y,
                enemy.width,
                enemy.height
            );
        });
    }

}
