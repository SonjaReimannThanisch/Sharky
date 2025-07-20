class world {
    mainCharacter = new character();
    enemies = [
        new pufferfisch(),
        new pufferfisch(),
        new pufferfisch(),
    ];
    waves = [];
    lights = [
        new Light()
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.lights = [
        new Light(canvas.width, canvas.height)];
        this.waves.push(new Wave(canvas.width, canvas.height));
        this.draw();

    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.waves.forEach(wave => {
            this.ctx.drawImage(
                wave.img,
                wave.x,
                wave.y,
                wave.width,
                wave.height
            );
        });

        this.lights.forEach(light => {
            this.ctx.drawImage(
                light.img,
                light.x,
                light.y,
                light.width,
                light.height
            );
        });

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
                enemy.height);
        });


        //Draw() wird immer wieder aufgerufen
        self = this;
        requestAnimationFrame(function(){
            self.draw(); // hier wird es zu self, weil innerhalt der draw funktion und der requestanim......this nicht mehr funktioniert,d eswegen haben wir hier dem this eine neue variable zugeordnet
        })
    }

}
