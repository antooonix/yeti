let mainState = {}
let animations = {};
mainState.makeBlocks = makeBlocks;

let path = "assets/";

mainState.preload = function () {
    game.load.image("ground", path + "images/ground.png");
    game.load.image("block_1", path + "cracks/Crack1.png");
    game.load.image("block_2", path + "cracks/Crack2.png");
    game.load.image("block_3", path + "cracks/Crack3.png");
    game.load.image("back_mountains", path + "mountains/mountain_back_small.svg");
    game.load.image("front_mountains", path + "mountains/mountain_front_small.svg");
    game.load.atlasJSONHash('hero', path + "hero/yeti_hero.png", path + "hero/yeti_hero.json");
};

mainState.doJump = function () {
    if (Math.round(this.hero.y) != Math.round(this.startY)) {
        return;
    }

    this.hero.body.velocity.y = -this.power * 12;
    this.hero.animations.play("jump");
};

mainState.onGround = function () {
    if (this.hero) {
        this.hero.animations.play("run");
    }
};

mainState.delayOver = function () {
    this.clickLock = true;
    if (this.hero) {
        this.hero.animations.play("die");
        this.blocks.getChildAt(0).body.velocity.x = -100;
        this.blocks.getChildAt(0).body.checkCollision.up = false;
        this.ground.body.checkCollision.up = false;
        this.hero.body.velocity.y = 100;
        // fall down when dead
        this.hero.body.collideWorldBounds = false;
    }
    game.time.events.add(Phaser.Timer.SECOND, this.gameOver, this);
};

mainState.gameOver = function () {
    game.state.start("EndState");
}

// mainState.render = function () {
//     game.debug.bodyInfo(this.hero, 32, 32);
//     game.debug.body(this.hero);
//     if (this.blocks.children.length > 0)
//         game.debug.body(this.blocks.children[0]);
// }
