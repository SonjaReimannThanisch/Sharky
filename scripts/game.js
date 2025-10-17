let canvas;
let gameWorld;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('backgroundCanvas');
    gameWorld = new world(canvas);


    console.log('My Keyboard is', gameWorld.keyboard);
    console.log('My enemy is', gameWorld.enemies);
    console.log('My backgrounds is', gameWorld.backgrounds);
    
}

window.addEventListener("keydown", (event) => {
    console.log(event);
    
}); 

// document.addEventListener("keydown", keyDownHandler);
// document.addEventListener("keyup", keyUpHandler);


