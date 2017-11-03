mainState.create = function () {
    //Enable Arcade Physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

    this.clickLock = false;
    this.power = 40;
    this.timer = game.time.create(false);
    resetScore();
    this.timer.loop(20, updateScore, this);
    this.timer.start();

    // Show scores.
    scoreText = game.add.text(10, game.height * 0.1, 'Score: 0', { fontSize: '20px', fill: '#fff' });
        
    // Turn the background sky blue.
    game.stage.backgroundColor = "#41aeb5";

    game.add.image(0 , game.height - 100, 'background').anchor.set(0.5);
   // debugger;
    // Add the ground.
    this.ground = game.add.sprite(0, game.height * .9, "ground");
    var graphics = game.add.graphics();
    graphics.beginFill(0xFFFFFF);
    graphics.lineStyle(1, 0xFFFFFF, 1);
    graphics.drawRect(0, 280, game.width, 200);
    graphics.endFill();

    // Add mountains
     this.back_mountains = this.game.add.tileSprite(
        0,
        115,
        this.game.width,
        this.game.cache.getImage('back_mountains').height - 20,
        'back_mountains'
    );

     this.front_mountains = this.game.add.tileSprite(
        0,
        156,
        this.game.width,
        this.game.cache.getImage('front_mountains').height - 30,
        'front_mountains'
    );

    // Add the hero in.
    this.hero = game.add.sprite(game.width * .2, this.ground.y, "hero");

    // Make animations.
    this.hero.animations.add("die", makeArray(0, 10), 12, false);
    this.hero.animations.add("jump", makeArray(20, 30),  8, false);
    this.hero.animations.add("run", makeArray(30, 40), 20, true);
    this.hero.animations.play("run");
    this.hero.width = game.width / 14;
    this.hero.scale.y = this.hero.scale.x;
    this.hero.anchor.set(0.5, 1);

    // Add the clouds.
    // this.clouds = game.add.sprite(0, 0, "clouds");
   // this.clouds.width = game.width;

    // Start the physics engine.
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Enable the hero for physics.
    game.physics.enable(this.hero, Phaser.Physics.ARCADE);
    game.physics.enable(this.ground, Phaser.Physics.ARCADE);
    this.hero.body.gravity.y = 1000;
    this.hero.body.collideWorldBounds = true;
    this.ground.body.immovable = true;

    // Record the initial position.
    this.startY = this.hero.y;

    // Set listeners.
    game.input.onDown.add(this.doJump, this);
    game.input.onTap.add(this.doJump, this);
    game.input.on
    game.input.keyboard
        .addKey(Phaser.Keyboard.SPACEBAR)
        .onDown.add(this.doJump, this);
    this.blocks = game.add.group();
    this.makeBlocks();

    game.debug.reset();
  };