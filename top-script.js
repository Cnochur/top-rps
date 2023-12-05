

playGame();




//to launch game
function playGame(){

    for(i = 0; i < 5; i++){
        console.log(`Round: ${[i + 1]}`)
        
        playRound();
        
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

    let playerScore = 0;
    let computerScore = 0;

    
    if (a === 1){
        
        console.log(`Player Score: ${playerScore}`);
    }
    else if (a === 2){
        
        console.log(`Computer Score: ${computerScore}`);
    }
    else{
        console.log("Its a tie");
        playRound();
    }


    // if (playerScore < 3 || computerScore < 3){
    //     playGame();
    // }
    // else if (playerScore === 3 || computerScore === 3){
    //     console.log("Game Over!")
    // }

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
