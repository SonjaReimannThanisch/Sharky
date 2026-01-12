class world {
    mainCharacter = new character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusLife;
    statusCoins;
    statusPoison;
    attacks = [];


    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');


        this.keyboard = keyboard;
        this.keyboardSprite = new Keyboard(canvas.width, canvas.height);
        this.statusLife = new statusBar('life');
        this.statusCoins = new statusBar('coins');
        this.statusPoison = new statusBar('poison');

        this.statusLife.y = 45;
        this.statusCoins.y = 80;
        this.statusPoison.y = 10;


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
                    this.mainCharacter.hit();
                    this.statusLife.setPercentage(this.mainCharacter.energy);
                }
            });
        }, 1000);
    }

    checkAttackCollisions() {
        this.attacks.forEach((attack) => {
            this.level.enemies.forEach((enemy) => {
                if (!attack.hasHit && attack.isColliding(enemy)) {
                    enemy.hit();
                    attack.hasHit = true;
                }
            });
        });
    }

    updateBackground() {
        const w = 720;

        const groups = [
            this.level.background.slice(0, 2), // Water (0,720) wenn du nur 2 nutzt
            this.level.background.slice(2, 4), // Fondo
            this.level.background.slice(4, 6), // Floor
        ];

        const leftEdge = -this.camera_x;

        groups.forEach(g => {
            g.forEach(bg => {
            if (bg.x + w < leftEdge) bg.x += w * g.length; // bei 2: +1440
            });
        });
    }




    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.camera_x = Math.min(0, -this.mainCharacter.x);
        this.updateBackground();

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.background);
        this.ctx.save();
        this.ctx.globalAlpha = 0.25;
        this.ctx.restore();
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poison)

        this.attacks = this.attacks.filter(a => !a.isExpired());
        this.addObjectsToMap(this.attacks);

        this.addObjectsToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0);
        //--------space for fixed objects---------
        this.addToMap(this.statusLife);
        this.addToMap(this.statusCoins);
        this.addToMap(this.statusPoison);

        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.mainCharacter);
        this.addToMap(this.keyboardSprite);

        this.ctx.translate(-this.camera_x, 0);

        requestAnimationFrame(() => this.draw());
        this.checkAttackCollisions();

    }


    addObjectsToMap(objects) {
        objects.forEach(o => this.addToMap(o));
    }

    addToMap(mo) {
        if(mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if(mo.drawFrame) {
            mo.drawFrame(this.ctx);
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
