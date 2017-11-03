let mainState = {}
mainState.makeBlocks = makeBlocks;

let path = "assets/";

mainState.preload = function () {
    game.load.image("ground", "images/ground.png");
    game.load.image("block_1", path + "cracks/Crack1.png");
    game.load.image("block_2", path + "cracks/Crack2.png");
    game.load.image("block_3", path + "cracks/Crack3.png");
    game.load.image("back_mountains", path + "mountains/mountain_back.svg");
    game.load.image("front_mountains", path + "mountains/mountain_front.svg");
    game.load.image("block", "images/block.png");
    game.load.image("clouds", "images/clouds.png");
    game.load.atlasJSONHash('hero', "images/explorer.png", "images/explorer.json");
};

mainState.doJump = function () {
    if (this.hero.y != this.startY) {
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
        this.hero.body.velocity.y = 100;
        // fall down when dead
        this.hero.body.collideWorldBounds = false;
        this.blocks.children[0].body.velocity.x = -100;
    }
    game.time.events.add(Phaser.Timer.SECOND, this.gameOver, this);
};

mainState.gameOver = function () {
    game.state.start("EndState");
}
