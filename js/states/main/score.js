let score = 0;
let scoreText;

function updateScore() {
    score++;
    scoreText.text = 'Score: ' + score;
}

function resetScore() {
    score = 0;
}