let endState = {}

endState.preload = function () {
    game.load.image("playAgain", path + "images/playAgain.png");
    game.load.image("ground", "images/ground.png");
    game.load.image("back_mountains", path + "mountains/mountain_back.svg");
    game.load.image("front_mountains", path + "mountains/mountain_front.svg");
};

endState.restartGame = function () {
    // Restart the game by starting MainState.
    game.state.start("MainState");
}