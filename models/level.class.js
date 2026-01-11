class Level {
    enemies;
    // waves;
    lights;
    background;
    level_end_x =  1440;

    constructor(enemies, coins, lights, background){
        this.enemies = enemies;
        this.coins = coins;
        this.lights = lights;
        this.background  = background;
    }
} 