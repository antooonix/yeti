let mainState = {}
mainState.makeBlocks = makeBlocks;

let path = "images/";

mainState.preload = function () {
    game.load.image("ground", path + "/ground.png");
    game.load.image("block_1", path + "/Crack1.png");
    game.load.image("block_2", path + "/Crack2.png");
    game.load.image("block_3", path + "/Crack3.png");
    game.load.image("clouds", path + "/clouds.png");
    game.load.image("background", path + "background.png");
    game.load.atlasJSONHash('hero', path + "/explorer.png", path + "/explorer.json");
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
