let playerChoice = "";

getPlayerSelection();
getComputerChoice();







function getPlayerSelection (){
    
    let choice = prompt("Rock, Paper or Scissors?");
    let userChoice = choice; 

    if (choice.toLowerCase() === "rock"){
        userChoice = "Rock";
        console.log(userChoice);
    }
    else if (choice.toLowerCase() === "paper"){
        userChoice = "Paper";
        console.log(userChoice);
    }
    else if (choice.toLowerCase() === "scissors"){
        userChoice = "Scissors";
        console.log(userChoice);
    }
    else {
        userChoicehoice = "ERROR!";
    }
}

function getComputerChoice(){

    let ans = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (ans === 1){
        ans = "Rock";
        console.log(ans);
    }
    else if (ans === 2 ){
        ans = "Paper";
        console.log(ans);
    }
    else if (ans === 3 ){
        ans = "Scissors";
        console.log(ans);
    }
    else {
        ans = "ERROR!";
    }
}