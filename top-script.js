document.addEventListener('DOMContentLoaded', () => {

    const scoreBoard = document.querySelector('.score-board');
    const playerScore = document.querySelector('#player-score span');
    const computerScore = document.querySelector('#com-score span');
    const playerChoiceCards = document.querySelectorAll('.player-choice-cards > img');
    const rockCard = document.querySelector('#rock');
    const paperCard = document.querySelector('#paper');
    const scissorsCard = document.querySelector('#scissors');
    const resultPanel = document.querySelector('.result-panel');
    const startButton = document.querySelector('#start-button');

    
    scoreBoard.style.display = 'none';
    playerChoiceCards.forEach(choice => choice.style.display = 'none');
    resultPanel.style.display = 'none';

    let playerScoreCount = 0;
    let computerScoreCount = 0;

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        resultPanel.style.display = 'none';
        scoreBoard.style.display = 'flex';
        playerChoiceCards.forEach(choice => choice.style.display = 'block');
    });

    
    rockCard.addEventListener('click', () => playRound('rock'));
    paperCard.addEventListener('click', () => playRound('paper'));
    scissorsCard.addEventListener('click', () => playRound('scissors'))



    function playRound(player) {
        const computer = computerChoice();
        if ((player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')) {
            winningPoint('player');
        } else if ((player === 'rock' && computer === 'paper') ||
            (player === 'paper' && computer === 'scissors') ||
            (player === 'scissors' && computer === 'rock')) {
            winningPoint('computer');
        } else {
            console.log("It's a tie");
        }
    }

    function winningPoint(winner) {

        if (winner === 'player') {
            playerScoreCount++;
            playerScore.textContent = `Player: ${playerScoreCount}`;
        } else if (winner === 'computer') {
            computerScoreCount++;
            computerScore.textContent = `Computer: ${computerScoreCount}`;
        }
    
        if (playerScoreCount === 5 || computerScoreCount === 5) {

            const resultMessage = playerScoreCount === 5 ? 'Player Wins!' : 'Computer Wins!';
            resultPanel.textContent = resultMessage;
            
            rockCard.style.display = 'none';
            paperCard.style.display = 'none';
            scissorsCard.style.display = 'none';
            scoreBoard.style.display = 'none';
            resultPanel.style.display = 'block'
            startButton.style.display = 'block';
            // Reset scores
            playerScoreCount = 0;
            computerScoreCount = 0;
            playerScore.textContent = 'Player: 0';
            computerScore.textContent = 'Computer: 0';
        }
    }

    function computerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * choices.length);
        return choices[randomNumber];
    }
});
