class world {
    mainCharacter = new character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new statusBar();

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');


        this.keyboard = keyboard;
        this.keyboardSprite = new Keyboard(canvas.width, canvas.height);

        this.setWorld();
        this.mainCharacter.animate();
        this.draw();
        this.checkCollisions();
    }

    setWorld() {
        this.mainCharacter.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if(this.mainCharacter.isColliding(enemy)) {
                    console.log('Collision with Character', enemy);
                    this.mainCharacter.hit();
                    this.statusBar.setPercentage(this.percentage.energy);
                }
            });
        }, 1000);
    }

    // offset = {
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom:0,
    // }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.background);
        this.ctx.save();
        this.ctx.globalAlpha = 0.25;
        this.ctx.restore();
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0);
        //--------space for fixed object---------
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.mainCharacter);
        this.addToMap(this.keyboardSprite);

        this.ctx.translate(-this.camera_x, 0);

        requestAnimationFrame(() => this.draw());

    }


    addObjectsToMap(objects) {
        objects.forEach(o => this.addToMap(o));
    }

    addToMap(mo) {
        if(mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if( mo.drawFrame) {
            (this.ctx);
        }
        if(mo.otherDirection) {
            this.flipImageBack(mo);
        }
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

}
