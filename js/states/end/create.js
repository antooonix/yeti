endState.create = function() {
    // Stop timer
    mainState.timer.stop();
    
     // Add the ground.
     this.ground = game.add.sprite(0, game.height * .9, "ground");
     var graphics = game.add.graphics();
     graphics.beginFill(0xFFFFFF);
     graphics.lineStyle(1, 0xFFFFFF, 1);
     graphics.drawRect(0, 280, game.width, 200);
     graphics.endFill();
 
     // Add mountains
     this.back_mountains = game.add.sprite(0, 142, "back_mountains");
     this.back_mountains.width = game.width;
     this.back_mountains.scale.y = this.back_mountains.scale.x* 1.5;
 
     this.front_mountains = game.add.sprite(110, 210, "front_mountains");
     this.front_mountains.width = game.width;
     this.front_mountains.scale.y = this.front_mountains.scale.x;

     // Add score
     scoreText = game.add.text(10, 10, scoreText.text, { fontSize: '20px', fill: '#fff' });
 
     // Add a sprite to be used as a play again button.
     this.playAgain = game.add.sprite(game.width / 2, game.height / 2 + 100, "playAgain");
     this.playAgain.anchor.set(0.5, 0.5);
     this.playAgain.inputEnabled = true;
     this.playAgain.events.onInputDown.add(this.restartGame, this);
};