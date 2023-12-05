let playerScore = 0;
let computerScore = 0;

playGame();




//to launch game
function playGame(){

    //plays game for 5 rounds
    for(i = 0; i < 5; i++){
        console.log(`Round: ${[i + 1]}`)
        playRound();
    }

    //displays the winner and final score 
    if (playerScore > computerScore){
        console.log(`\nPlayer Wins: ${playerScore} - ${computerScore}`)
    }else{
        console.log(`Computer Wins: ${computerScore} - ${playerScore}`)
    }

}

//returns who gets the won the round
function playRound () {


const player = getPlayerChoice();
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

//assigns the point to round winner
function winnigPoint(a){
    
    if (a === 1){
        playerScore++
        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }
    else if (a === 2){
        computerScore++;
        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }
    else {
        console.log("Its a tie");
        playRound();
    }
}

//takes player input via prompt
function getPlayerChoice(){
    
    let choice = prompt("Rock, Paper or Scissors?");

    if (choice.toLowerCase() === "rock"){
        console.log("Player chose: Rock");
        return  choice = 1;
    }
    else if (choice.toLowerCase() === "paper"){
        console.log("Player chose: Paper");
        return choice = 2;
    }
    else if (choice.toLowerCase() === "scissors"){
        console.log("Player chose: Scissors");
        return choice = 3;
    }
    else {
        choice = "ERROR!";
    }
    return choice;
}

//generates a random computer choice
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
