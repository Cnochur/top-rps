const gameWindow = document.querySelector('#game-container');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#com-score');
const playerChoiceCards = document.querySelectorAll('.player-choice-cards img');
const resultDisplay = document.querySelector('#result-panel')

let playerScoreCount = 0;
let computerScoreCount = 0;

const startButton = document.createElement('button');
startButton.textContent = 'PLAY';


startButton.addEventListener('click', () => {

    if (playerScoreCount < 5 && computerScoreCount < 5) {

        playRound();

    } else {

        if (playerScoreCount > computerScoreCount) {

            resultDisplay.textContent = `Player Wins: ${playerScoreCount} - ${computerScoreCount}`;

        } else {

            resultDisplay.textContent = `Computer Wins: ${computerScoreCount} - ${playerScoreCount}`;
        }
    }
});



function playRound () {


    const player = playerChoice();
    const computer = computerChoice();
    
        if( player === 1 && computer === 3){
            return winnigPoint(1);
        }
        else if (player === 3 && computer === 1){
            return winnigPoint(2);
        }
        else if (player > computer){
            return winnigPoint(1);
        }
        else if (player < computer){
            return winnigPoint(2);
        } 
        else if (player === computer){
            return winnigPoint(0);
        }
    }
    

function winnigPoint(a){
    if (a === 1) {
        playerScoreCount++;
        playerScore.textContent = `Player: ${playerScoreCount}`;
    } else if (a === 2) {
        computerScoreCount++;
        computerScore.textContent = `Computer: ${computerScoreCount}`;
    } else {
        console.log("It's a tie");
        playRound(); // Avoid recursion here, it's better to call playRound directly
    }
}

    function computerChoice(){

        let ans = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
        if (ans === 1){
            console.log("Computer chose: Rock");
        }
        else if (ans === 2 ){
            console.log("Computer chose: Paper");
        }
        else if (ans === 3 ){
            console.log("Computer chose: Scissors");
        }
        else {
            ans = "ERROR!";
        }
    
        return ans;
    }
