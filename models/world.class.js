class world {
    mainCharacter = new character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.keyboard = new Keyboard(canvas.width, canvas.height);
        this.keyboard  = keyboard;

        this.setWorld();
        this.mainCharacter.animate();
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.background);
        this.ctx.save();
        this.ctx.globalAlpha = 0.25;
        // this.addObjectsToMap(this.waves);
        this.ctx.restore();
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.level.enemies);

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
