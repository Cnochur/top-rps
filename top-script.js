

game();
again();




function getPlayerChoice(){
    
    let choice = prompt("Rock, Paper or Scissors?");
    let final = "";

    if (choice.toLowerCase() === "rock"){
        final = 1;
        console.log("Player chose: Rock");
    }
    else if (choice.toLowerCase() === "paper"){
        final = 2;
        console.log("Player chose: Paper");
    }
    else if (choice.toLowerCase() === "scissors"){
        final = 3;
        console.log("Player chose: Scissors");
    }
    else {
        choice = "ERROR!";
    }
    return final;
}

function getComputerChoice(){

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

function playRound(){
    
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    roundWinner(playerChoice, computerChoice);

}

function roundWinner(a,b){
    
    let ply = "Player";
    let com = "Computer";


    if(a === b){

        console.log("Its a TIE, try again!!");
        playRound();

    }
    else if ((a === 3) && (b === 1)){

        console.log(com + " WINS!")
        
    }
    else if ((b === 3) && (a === 1)){
        console.log(ply + " WINS!");
        
    }
    else if (a < b){
        console.log(com + " WINS!");
        
    }
    else if (a > b){
        console.log(ply + " WINS!");
        
    }
    else{
        console.log('ERROR');
        
    }
}
function game (){

 for (i = 0; i < 1; i++){
        console.log(`Game: ` + [i + 1]);
        playRound();
    }

}
function again(){
    let playAgain = prompt("Would you like to play again?");
    playAgain = playAgain.toLowerCase();

    while(playAgain = "yes"){
        game();
        let playAgain = prompt("Would you like to play again?");
        playAgain.toLowerCase();

    }

}