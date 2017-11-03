let BLOCKS = ["block_1"];

function makeBlocks() {
    this.blocks.removeAll();

    let block = randomBlock();
    block.width = 80;
    block.height = 80;
    this.blocks.add(block);

    game.world.bringToTop(mainState.hero);

    this.blocks.x = game.width - this.blocks.width
    this.blocks.y = this.ground.y - 30;

    this.blocks.forEach(function (block) {
        game.physics.enable(block, Phaser.Physics.ARCADE);

        block.body.velocity.x = -250;
        block.body.checkCollision.left = false;
        block.body.checkCollision.up = false;
        block.body.collideWorldBounds.y = true;
    });

    function randomBlock() {
        let rndBlock = game.rnd.integerInRange(0, 0);
        return game.add.sprite(0, 0, BLOCKS[rndBlock])
    }
};
