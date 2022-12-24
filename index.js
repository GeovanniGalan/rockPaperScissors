

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
            return ("You lose! Paper beats rock");
        }
        else if (computerSelection == "scissors") {
            return ("you win! rock smashes scissors!");
        }
        else if (computerSelection == "rock") {
            return ("you tied! try again.");
        }
        else {
            return (null);
        }
    }

    else if (playerSelection == "paper") {

        if (computerSelection == "rock") {
            return ("you win! paper wraps rock!");
        }
        else if (computerSelection == "paper") {
           return ("you tied! try again.");
        }
        else if (computerSelection == "scissors") {
            return ("you lose! scissors cut paper!");
        }
        else {
            return (null);
        }
    }
    else if (playerSelection == "scissors") {

        if (computerSelection == "rock") {
            return ("you lose! rock smashes scissors.");
        }
        else if (computerSelection == "paper") {
            return ("you win! scissors slice paper!")
        }
        else if (computerSelection == "scissors") {
            return ("you tied, try again.");
        }
        else {
            return (null);
        }
    }



}

console.log(playRound(playerSelection, computerSelection));