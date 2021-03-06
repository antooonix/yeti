let BLOCKS = ["block_1", "block_2", "block_3"];
let blockCounter = 0;

function makeBlocks() {
    this.blocks.removeAll();

    let block = randomBlock();
    block.width = 150;
    block.height = 200;
    let scaleRatioX = 428 / block.width;
    let scaleRatioY = 428 / block.height;
    this.blocks.add(block);
    blockCounter++;

    game.world.bringToTop(mainState.hero);

    this.blocks.x = game.width - this.blocks.width
    this.blocks.y = game.height - 150;

    if (!(blockCounter % 2)) {
        game.time.slowMotion /= 1.1;
        game.time.desiredFps /= 1.1;
        
        animations.hero.runAnimation.speed += 1;
        
        blockCounter = 0;
    }

    this.blocks.forEach(function (block) {
        game.physics.enable(block, Phaser.Physics.ARCADE);

        block.body.velocity.x = -250;
        block.body.checkCollision.left = false;
        block.body.collideWorldBounds.y = true;
        block.body.setSize(95 * scaleRatioX, 1 * scaleRatioY, 25 * scaleRatioX, 83 * scaleRatioY);
        block.body.immovable = true;

    });

    function randomBlock() {
        let rndBlock = game.rnd.integerInRange(0, BLOCKS.length - 1);

        return game.add.sprite(100, 0, BLOCKS[rndBlock]);
    }
};
