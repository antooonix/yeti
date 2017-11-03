function makeBlocks () {
    this.blocks.removeAll();
    let wallHeight = game.rnd.integerInRange(1, 1);
    
    for (let i = 0; i < wallHeight; i++) {
        let block = game.add.sprite(0, -i * 50, "block");
        this.blocks.add(block);
    }
    this.blocks.x = game.width - this.blocks.width
    this.blocks.y = this.ground.y - 50;

    // Loop through each block and apply physics.
    this.blocks.forEach(function (block) {

        // Enable physics.
        game.physics.enable(block, Phaser.Physics.ARCADE);
        block.body.velocity.x = -250;

        // Apply some gravity to the block.
        // Not too much or the blocks will bounce against each other.
        // block.body.gravity.y = 4;

        // Set the bounce so the blocks will react to the runner.
        // block.body.bounce.set(1, 1);
    });
};
