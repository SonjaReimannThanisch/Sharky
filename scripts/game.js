let canvas;
let gameWorld;

function init() {
    canvas = document.getElementById('backgroundCanvas');
    gameWorld = new world(canvas);


    console.log('My character is', gameWorld.mainCharacter);
    console.log('My enemy is', gameWorld.enemies);
    console.log('My light is', gameWorld.lights);
}