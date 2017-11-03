let endState = {}

endState.preload = function () {
    game.load.image("playAgain", "images/playAgain.png");
};

endState.restartGame = function () {
    // Restart the game by starting MainState.
    game.state.start("MainState");
}