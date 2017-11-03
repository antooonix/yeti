function makeBlocks() {
    this.blocks.removeAll();
    

    let block = game.add.sprite(0, 0, "block");
    block.width = 50;
    block.height = 50;
    this.blocks.add(block);

    game.world.bringToTop(mainState.hero);

    this.blocks.x = game.width - this.blocks.width
    this.blocks.y = this.ground.y - 0.5;

    this.blocks.forEach(function (block) {
        game.physics.enable(block, Phaser.Physics.ARCADE);

        block.body.velocity.x = -250;
        block.body.checkCollision.left = false;
        block.body.checkCollision.up = false;
        block.body.collideWorldBounds.y = true;
    });
};
