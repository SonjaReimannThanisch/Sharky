class movableObject {
    x = 10;
    y = 280;
    width = 150;
    height = 150;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
        this.img.onload = () => console.log('✔️ Loaded:', path);
        this.img.onerror = () => console.warn('❌ Fehler beim Laden:', path);
    }



    moveRight() {
        console.log('Move to the 1 Right');
        
    }

    moveLeft() {

    }
}