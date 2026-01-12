const level1 = new Level(
    [
        new pufferfisch('pink'),
        new pufferfisch('pink'),
        new pufferfisch('pink'),
        new pufferfisch('rose'),
        new pufferfisch('rose'),
        new pufferfisch('rose'),
        new pufferfisch('green'),
        new pufferfisch('green'),
        new pufferfisch('green'),

        new jellyfisch('lila'),
        new jellyfisch('lila'),
        new jellyfisch('lila'),
        new jellyfisch('yellow'),
        new jellyfisch('yellow'),
        new jellyfisch('yellow'),

        new Endboss()
    ],

    [
        new Light()
    ],

    [
        new coin(240, 320),
        new coin(280, 260),
        new coin(340, 220),
        new coin(420, 220),
        new coin(480, 260),
        new coin(520, 320),
    ],

    [
        new poison(290, 350),
    ],


    [
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720),
        // new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 1440),

        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720),
        // new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 1440),

        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720),
        // new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 1440),
    ],

    [
        new barrier('img/3. Background/Barrier/1.png', 900, 120, 500, 300),
        new barrier('img/3. Background/Barrier/2.png', 1600, 260, 600, 250),
        new barrier('img/3. Background/Barrier/3.png', 1900, 260, 600, 250),
    ],



    
)