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
        new coin(380, 320),
        new coin(460, 280),
        new coin(540, 260),
        new coin(620, 280),
        new coin(680, 280),
        new coin(700, 320),
    ],

    [
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 1440),

        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 1440),

        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 1440),
    ],


    
)