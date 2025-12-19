let canvas;
let gameWorld;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('backgroundCanvas');
    keyboard = new Keyboard(canvas.width, canvas.height);
    gameWorld = new world(canvas, keyboard);

    console.log('My Charakter is', gameWorld.mainCharacter);
    
    console.log('My Keyboard is', gameWorld.keyboard);
    console.log('My enemy is', gameWorld.enemies);
    console.log('My backgrounds is', gameWorld.backgrounds);
    
}

window.addEventListener("keydown", (event) => {
    if(event.keyCode   == 39) {
        keyboard.RIGHT = true;
    }
    if(event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if(event.keyCode == 38) {
        keyboard.UP = true;
    }
    if(event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if(event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    // console.log(event);
}); 

window.addEventListener("keyup", (event) => {
    if(event.keyCode   == 39) {
        keyboard.RIGHT = false;
    }
    if(event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if(event.keyCode == 38) {
        keyboard.UP = false;
    }
    if(event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if(event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    // console.log(event);
}); 


// document.addEventListener("keydown", keyDownHandler);
// document.addEventListener("keyup", keyUpHandler);


