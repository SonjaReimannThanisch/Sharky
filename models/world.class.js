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


        this.backgrounds = [
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', canvas.width, canvas.height),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', canvas.width, canvas.height),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png',  canvas.width, canvas.height),
        ];



        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgrounds);
        this.addObjectsToMap(this.waves);
        this.addObjectsToMap(this.backgrounds);
        // this.addToMap(this.backgrounds);
        this.addObjectsToMap(this.lights);
        this.addObjectsToMap(this.enemies);


        this.enemies.forEach(e => this.addToMap(e));
        this.addToMap(this.mainCharacter);

        requestAnimationFrame(() => this.draw());
    }



    addObjectsToMap(objects) {
        objects.forEach(o => this.addToMap(o));
    }

    addToMap(mo) {
        // this.ctx.strokeStyle = 'red';
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}
