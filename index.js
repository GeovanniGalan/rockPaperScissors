

const items = ["rock", "paper", "scissors"];

function getComputerChoice(items) {
    return  items[Math.floor(Math.random() * items.length)];
}


/* display console player choice */
const playerSelection =  prompt("rock paper or scissors?").toLowerCase();

console.log("you have chosen: " + playerSelection);


/* display console CPU choice */
const computerSelection = getComputerChoice(items)
console.log("computer has chosen: " + computerSelection);


// PlayRound function (1 game)
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

console.log(playRound(playerSelection, computerSelection));