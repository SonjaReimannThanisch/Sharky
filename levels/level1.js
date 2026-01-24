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

        new Endboss(),
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
        new poison(350, 350),
        new poison(410, 350),
        new poison(470, 350),
        new poison(530, 350),
    ],

    [
        new Light()
    ],

    [
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720),

        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720),

        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720),
    ],

    // [
    //     new barriers('img/3. Background/Barrier/2.png', 1630, 200, 600, 280),
    //     new barriers('img/3. Background/Barrier/1.png', 2540, 0, 850, 480),
    //     // new barriers('', 2540, 0, 850, 480),
    //     // new barriers('', 3390, 0, 850, 480),
    //     new barriers('img/3. Background/Barrier/3.png', 3440, 10, 200, 240),
    // ],

    [
        new barriers('img/3. Background/Barrier/2.png', 1630, 200, 600, 280),
        new barriers('img/3. Background/Barrier/3.png', 3440, 10, 200, 240),

        // --- HÖHLE: Bild + 2 Kollisionsstreifen ---
        (() => {
            const caveDeco = new barriers('img/3. Background/Barrier/1.png', 2540, 0, 850, 480);
            caveDeco.offset = { top: 9999, left: 9999, right: 9999, bottom: 9999 };

            const caveTop = new barriers('', 2540, 0, 850, 140);
            caveTop.offset = { top: 0, left: 0, right: 0, bottom: 0 };

            const caveBottom = new barriers('', 2540, 340, 850, 140);
            caveBottom.offset = { top: 0, left: 0, right: 0, bottom: 0 };

            return [caveDeco, caveTop, caveBottom];
        })(),
    ]
    .flat()
    
)