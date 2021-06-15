const seNumber = Math.trunc(Math.random() * 20) + 1;
console.log(seNumber);
let scoreEl = 20;
let hightScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // when there is  no input
    if (!guess) {
        document.querySelector('.message').textContent = 'no number 😡'
    }
    // when the player wins
    else if (seNumber == guess) {
        document.querySelector('.message').textContent = 'yoo brooo correct number';
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.backgroundColor = "#fff";
        document.querySelector('.number').textContent = seNumber;
        document.querySelector('.number').textContent = seNumber;
        if (scoreEl > hightScore) {
            hightScore = scoreEl
            document.querySelector('.highscore').textContent = hightScore;
        }

    }
    // score higher
    else if (guess > seNumber) {

        if (scoreEl > 1) {
            document.querySelector('.message').textContent = 'too high loll';
            scoreEl--;
            document.querySelector('.score').textContent = scoreEl;
            console.log('too high loll')
        } else {
            document.querySelector('.message').textContent = 'you loserrr';
            console.log('u loser trigger')
            document.querySelector('.score').textContent = 0;
        }

    }
    // score low
    else if (guess < seNumber) {
        if (scoreEl > 1) {
            document.querySelector('.message').textContent = 'too low loll';
            scoreEl--;
            document.querySelector('.score').textContent = scoreEl;
        } else {
            document.querySelector('.message').textContent = 'you loserrr';
            console.log('u loser trigger')
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    scoreEl = 20;
    document.querySelector('.guess').value = "";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = scoreEl;
    document.querySelector('body').style.backgroundColor = "#222";
});