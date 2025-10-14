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

window.addEventListener("keypress", (event) => {
    console.log(event);
    
}); 

document.addEventListener("keydown", keyDownHandler);
// document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(event) {
  if (event.code === "ArrowRight") {
    rightPressed = true;
  } else if (event.code === "ArrowLeft") {
    leftPressed = true;
  }
  if (event.code === "ArrowDown") {
    downPressed = true;
  } else if (event.code === "ArrowUp") {
    upPressed = true;
  }
}
