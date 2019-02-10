var scores, activePlayer, currentScore, gamePlay, previousRoll;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlay) {
        var dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector('.dice').src = 'dice-' + dice + '.png';
        document.querySelector('.dice').style.visibility = 'visible';
        if (dice == 6 && previousRoll == 6) {
            scores[activePlayer] = 0;
            document.querySelector('.global-' + activePlayer + '-socre').textContent = 0;
            nextPlayer();
        } else if (dice !== 1) {
            currentScore += dice;
            document.querySelector('.current-' + activePlayer).textContent = currentScore;
        } else {
            nextPlayer();
        }
        previousRoll = dice;
    }
})

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlay) {
        scores[activePlayer] += currentScore;
        document.querySelector('.global-' + activePlayer + '-socre').textContent = scores[activePlayer];
        if (scores[activePlayer] >= 20) {
            document.querySelector('.player-' + activePlayer + '-name').textContent = 'Winner!';
            document.querySelector('.dice').style.visibility = 'hidden';
            gamePlay = false;
        } else {
            nextPlayer();
        }
    }
})

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    gamePlay = true;
    previousRoll = 0;

    document.querySelector('.global-0-socre').textContent = 0;
    document.querySelector('.global-1-socre').textContent = 0;
    document.querySelector('.current-0').textContent = 0;
    document.querySelector('.current-1').textContent = 0;
    document.querySelector('.dice').style.visibility = 'hidden';
    document.getElementById('0-panel').classList.remove('active');
    document.getElementById('1-panel').classList.remove('active');
    document.getElementById('0-panel').classList.add('active');
    document.querySelector('.player-0-name').textContent = 'PLAYER 1';
    document.querySelector('.player-1-name').textContent = 'PLAYER 2';

}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    previousRoll = 0;
    document.getElementById('0-panel').classList.toggle('active');
    document.getElementById('1-panel').classList.toggle('active');
    currentScore = 0;
    document.querySelector('.current-0').textContent = currentScore;
    document.querySelector('.current-1').textContent = currentScore;
}
