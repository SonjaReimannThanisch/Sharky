let canvas;
let gameWorld;

function init() {
    canvas = document.getElementById('backgroundCanvas');
    gameWorld = new world(canvas);


    console.log('My Keyboard is', gameWorld.keyboard);
    console.log('My enemy is', gameWorld.enemies);
}