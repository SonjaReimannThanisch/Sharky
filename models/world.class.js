class world {
    mainCharacter;
    enemies;
    waves;
    lights;
    background;
    canvas;
    ctx;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.mainCharacter = new character();

        this.enemies = [
            new pufferfisch(),
            new pufferfisch(),
            new pufferfisch()
        ];

        this.waves = [
            new Wave(canvas.width, canvas.height)
        ];

        this.lights = [
            new Light(canvas.width, canvas.height)
        ];

        this.background = new BackgroundObject(
            'img/3. Background/Layers/2. Floor/D1.png',
            canvas.width,
            canvas.height
        );


        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // ZUERST Water (Hintergrund)
        this.waves.forEach(w => this.addToMap(w));

        // DANN Floor (soll sichtbar oben auf dem Water liegen)
        this.addToMap(this.background);

        // Lichter, Gegner, Charakter oben drauf
        this.lights.forEach(l => this.addToMap(l));
        this.enemies.forEach(e => this.addToMap(e));
        this.addToMap(this.mainCharacter);

        requestAnimationFrame(() => this.draw());
    }

    addToMap(mo) {
        this.ctx.strokeStyle = 'red';
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}
