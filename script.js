//--------------------------------Pseudocode----------------------------------\\

//Retrieve input var from player and store in playerChoice var
//Generate a random choice and store in computersChoice var
//Compare playersChoice and computerChoice and store in result var
//Use result var Check if player won or lost, computer won or lost or a tie
//In case of a tie restart the round
//If win or lose out put tally score for winner, print winner and restart
//restart game choice to reset scores to 0

//------------------------------------------------------------------------------\\

let computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let playerChoice = prompt("Rock, Paper or scissors?: ");

switch(playerChoice){
    case "rock":
        playerChoice = 1;
        break;
    case "paper":
        playerChoice = 2;
        break;
    case "scissors":
        playerChoice = 3;
        break;
}

console.log(`Player chose: ${choiceReveal(playerChoice)} Computer chose: ${choiceReveal(computerChoice)}`);
winner(playerChoice, computerChoice);


function winner (a, b){
    let ply = "Player";
    let com = "Computer";

    if((a === 3) && (b === 1)){

        console.log(com + " WINS!")
    }
    else if ((b === 3) && (a === 1)){
        console.log(ply + " WINS!")
    }
    else if (a < b){
        console.log(com + " WINS!")
    }
    else if (a > b){
        console.log(ply + " WINS!")
    }
    else{console.log('Tie! Try Again')}

}

function choiceReveal(a){
    let choice = "";

    if (a === 1){
        choice = "Rock";
    }
    else if (a === 2 ){
        choice = "Paper";
    }
    else if (a === 3 ){
        choice = "Scissors";
    }
    else {
        choice = "ERROR!";
    }

    return choice;
}

