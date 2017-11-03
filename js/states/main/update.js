mainState.update = function () {
    //console.log(game.time.totalElapsedSeconds();

    // Collide the hero with the ground.
    game.physics.arcade.collide(this.hero, this.ground, this.onGround, null, this);

    // Collide the hero with the blocks.
    game.physics.arcade.collide(this.hero, this.blocks, this.delayOver, null, this);

    // Collide the blocks with the ground.
    game.physics.arcade.collide(this.ground, this.blocks);

    // When only specifying one group, all children in that
    // group will collide with each other.
    game.physics.arcade.collide(this.blocks);

    // Get the first child.
    let fchild = this.blocks.getChildAt(0);
    
    // If off the screen reset the blocks.
    if (fchild.x < -game.width) {
        this.makeBlocks();
    }

    if (this.hero.y < this.hero.height) {
        this.hero.body.velocity.y = 200;
        this.delayOver();
    }

    this.back_mountains.tilePosition.x -= 0.05;
    this.front_mountains.tilePosition.x -= 0.3;   
};