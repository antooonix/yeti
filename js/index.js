var game;
window.onload = function () {
    isMobile = navigator.userAgent.indexOf("Mobile");

    if (isMobile == -1) {
        game = new Phaser.Game(800, 480, Phaser.AUTO, "remittance_yeti");
    } else {
        game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "remittance_yeti");
        console.log("Mobile");
    }

    game.state.add("EndState", endState);
    game.state.add("MainState", mainState);
    game.state.start("MainState");
}