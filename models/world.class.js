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
    lastX = 0;
    lastY = 0;
    isGameOver = false;
    TILE_WIDTH = 720;




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

    checkBarrierCollision() {
        let hit = false;

        this.level.barriers.forEach(b => {
            if (this.mainCharacter.isColliding(b)) hit = true;
        });

        if (hit) {
            this.mainCharacter.x = this.lastX;
            this.mainCharacter.y = this.lastY;
            let pressing = this.isPressingIntoBarrier();
            if (pressing && !this.mainCharacter.isHurt()) {
            this.mainCharacter.hit();
            this.statusLife.setPercentage(this.mainCharacter.energy);
            if (this.mainCharacter.energy <= 0  && !this.isGameOver) {
                console.log('GAME OVER');
                this.isGameOver = true;
            }
            }
        } else {
            this.lastX = this.mainCharacter.x;
            this.lastY = this.mainCharacter.y;
        }
    }

    isPressingIntoBarrier() {
        return this.keyboard.LEFT || this.keyboard.RIGHT || this.keyboard.UP || this.keyboard.DOWN;
    }


    checkCoinCollision() {
        this.level.coins.forEach((coin, i) => {
            if (this.mainCharacter.isColliding(coin)) {
                this.level.coins.splice(i, 1);
                // this.mainCharacter.coins += 10;
                this.mainCharacter.coins = Math.min(100, (this.mainCharacter.coins || 0) + 10);
                this.statusCoins.setPercentage(this.mainCharacter.coins);
            }
        });
    }


    checkPoisonCollision() {
        this.level.poison.forEach((poison, i) => {
            if (this.mainCharacter.isColliding(poison)) {
            this.level.poison.splice(i, 1);
            this.mainCharacter.bottle = Math.min(100, (this.mainCharacter.bottle || 0) + 10);
            console.log('bottle value', this.mainCharacter.bottle);
            this.statusPoison.setPercentage(this.mainCharacter.bottle);
            console.log('poison list', this.level.poison.length);
            }
        });
    }

    updateBackground() {
        let w = this.TILE_WIDTH;
        let groups = [
            this.level.background.slice(0, 2),
            this.level.background.slice(2, 4),
            this.level.background.slice(4, 6),
        ];
        let leftEdge = -this.camera_x;
        let rightEdge = leftEdge + w;
        groups.forEach(g => {
            g.forEach(bg => {
            if (bg.x + w < leftEdge) bg.x += w * g.length
            if (bg.x > rightEdge) bg.x -= w * g.length;
            });
        });
    }


    updateLights() {
        let w = this.TILE_WIDTH;
        let leftEdge = -this.camera_x;
        let rightEdge = leftEdge + w;
        let t = performance.now() / 1000;
        this.level.lights.forEach(light => {
            light.update(t);
            if (light.x + w < leftEdge) light.x += w * this.level.lights.length;
            if (light.x > rightEdge)    light.x -= w * this.level.lights.length;
        });
    }



    // draw() {
    //     if (this.isGameOver) return;
    //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //     this.camera_x = Math.min(0, -this.mainCharacter.x);
    //     this.updateBackground();
    //     this.updateLights();

    //     this.ctx.translate(this.camera_x, 0);
    //     this.addObjectsToMap(this.level.background);
    //     this.addObjectsToMap(this.level.barriers);
 
    //     this.checkBarrierCollision();
    //     this.addObjectsToMap(this.level.lights);

    //     this.addObjectsToMap(this.level.coins);
    //     this.addObjectsToMap(this.level.poison)

    //     this.attacks = this.attacks.filter(a => !a.isExpired());
    //     this.addObjectsToMap(this.attacks);

    //     this.addObjectsToMap(this.level.enemies);

    //     this.ctx.translate(-this.camera_x, 0);
    //     //--------space for fixed objects---------
    //     this.addToMap(this.statusLife);
    //     this.addToMap(this.statusCoins);
    //     this.addToMap(this.statusPoison);

    //     this.ctx.translate(this.camera_x, 0);

    //     this.addToMap(this.mainCharacter);
    //     this.addToMap(this.keyboardSprite);

    //     this.ctx.translate(-this.camera_x, 0);

        

    //     requestAnimationFrame(() => this.draw());
    //     this.checkAttackCollisions();
    //     this.checkCoinCollision();
    //     this.checkPoisonCollision();
    // }

    draw() {
        if (this.isGameOver) return;
        this.beginFrame();
        this.updateWorldState();
        this.drawWorldLayer();
        this.drawHudLayer();
        this.endFrame();
    }

    beginFrame() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.camera_x = Math.min(0, -this.mainCharacter.x);
    }

    updateWorldState() {
        this.updateBackground();
        this.updateLights();
        this.checkBarrierCollision();
        this.checkAttackCollisions();
        this.checkCoinCollision();
        this.checkPoisonCollision();
        this.attacks = this.attacks.filter(a => !a.isExpired());
    }

    drawWorldLayer() {
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.background);
        this.addObjectsToMap(this.level.barriers);
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poison);
        this.addObjectsToMap(this.attacks);
        this.addObjectsToMap(this.level.enemies);

        // ✅ Character MUSS im selben Transform gezeichnet werden
        this.addToMap(this.mainCharacter);
        this.addToMap(this.keyboardSprite);

        this.ctx.translate(-this.camera_x, 0);
    }


    drawHudLayer() {
        this.addToMap(this.statusLife);
        this.addToMap(this.statusCoins);
        this.addToMap(this.statusPoison);
    }

    endFrame() {
        requestAnimationFrame(() => this.draw());
    }


    addObjectsToMap(objects) {
        objects.forEach(o => this.addToMap(o));
    }

    addToMap(mo) {
        const prevAlpha = this.ctx.globalAlpha;
        if (mo.alpha !== undefined) this.ctx.globalAlpha = mo.alpha;
        if (mo.otherDirection) this.flipImage(mo);
        mo.draw(this.ctx);
        if (mo.drawFrame) mo.drawFrame(this.ctx);
        if (mo.otherDirection) this.flipImageBack(mo);
        this.ctx.globalAlpha = prevAlpha;
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
