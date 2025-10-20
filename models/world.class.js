class world {
    mainCharacter;
    enemies;
    waves;
    lights;
    background;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.mainCharacter = new character();
        this.keyboard = new Keyboard(canvas.width, canvas.height);

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
            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', canvas.width, canvas.height),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', canvas.width, canvas.height),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png',  canvas.width, canvas.height),
        ];

        this.keyboard  = keyboard;
        this.setWorld();

        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgrounds);
        this.ctx.save();
        this.ctx.globalAlpha = 0.25;
        this.addObjectsToMap(this.waves);
        this.ctx.restore();
        this.addObjectsToMap(this.lights);
        this.addObjectsToMap(this.enemies);

        this.addToMap(this.mainCharacter);
        this.addToMap(this.keyboard);

        this.ctx.translate(-this.camera_x, 0);

        requestAnimationFrame(() => this.draw());

    }

    setWorld() {
        this.mainCharacter.world = this;
    }

    addObjectsToMap(objects) {
        objects.forEach(o => this.addToMap(o));
    }


//     addToMap(mo) {
//     if (mo.otherDirection) {
//         this.ctx.save();
//         this.ctx.translate(mo.x + mo.width, 0);
//         this.ctx.scale(-1, 1);
//         this.ctx.drawImage(mo.img, 0, mo.y, mo.width, mo.height);
//         this.ctx.restore();
//     } else {
//         this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
//     }
//     }
// }


    addToMap(mo) {
        if(mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if(mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}
