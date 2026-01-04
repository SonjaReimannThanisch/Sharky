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


        this.keyboard = keyboard;
        this.keyboardSprite = new Keyboard(canvas.width, canvas.height);

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
        this.ctx.restore();
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.level.enemies);

        this.addToMap(this.mainCharacter);
        this.addToMap(this.keyboardSprite);

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
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if(mo.otherDirection) {
            this.flipImageBack(mo);
        }

        // if(character.x + character.width > pufferfisch.x &&
        //     character.y + character.height > pufferfisch.y &&
        //     character.x < pufferfisch.x &&
        //     character.y < pufferfisch.y + pufferfisch.height
        // )
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }
}
