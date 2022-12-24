

const items = ["rock", "paper", "scissors"];

function getComputerChoice(items) {
    return  items[Math.floor(Math.random() * items.length)];
}

//console.log(getComputerChoice(items));




function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock") {

        if (computerSelection == "paper") {
            console.log("You lose Paper beats rock");
        }
        else if (computerSelection == "scissors") {
            console.log("you win! rock smashes scissors!");
        }
        else if (computerSelection == "rock") {
            console.log("you tied! try again.");
        }
        else {
            console.log(null);
        }
    }

    else if (playerSelection == "paper") {

        if (computerSelection == "rock") {
            console.log("you win! paper wraps rock!");
        }
        else if (computerSelection == "paper") {
            console.log("you tied! try again.")
        }
        else if (computerSelection == "scissors") {
            console.log("you lose scissors cut paper!");
        }
        else {
            console.log(null);
        }
    }
    else if (playerSelection == "scissors") {

        if (computerSelection == "rock") {
            console.log("you lose! rock smashes scissors.");
        }
        else if (computerSelection == "paper") {
            console.log("you win! scissors slice paper!")
        }
        else if (computerSelection == "scissors") {
            console.log("you tied, try again.");
        }
        else {
            console.log(null);
        }
    }



}

//const computerSelection = getComputerChoice();
//const playerSelection =  prompt("rock paper or scissors?");