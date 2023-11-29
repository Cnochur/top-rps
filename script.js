//--------------------------------Pseudocode----------------------------------\\

//Retrieve input var from player and store in playerChoice var
//Generate a random choice and store in computersChoice var
//Compare playersChoice and computerChoice and store in result var
//Use result var Check if player won or lost, computer won or lost or a tie
//In case of a tie restart the round
//If win or lose out put tally score for winner, print winner and restart
//restart game choice to reset scores to 0

//------------------------------------------------------------------------------\\

let computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;;
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

console.log(`Player chose: ${playerChoice} Computer chose: ${computerChoice}`);
winner(playerChoice, computerChoice);

// let playAgain = prompt("Another Round? Please type yes or no: ")

// switch



function winner (a, b){
    let ply = "Player";
    let com = "Computer";

    if (a > b){
        console.log(ply + " WINS!")
    }
    else if (a < b){
        console.log(com + " WINS!")
    }
    else{console.log('Tie! Try Again')}

}


