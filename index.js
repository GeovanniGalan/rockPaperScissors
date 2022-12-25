

const items = ["rock", "paper", "scissors"];

function getComputerChoice(items) {
    return  items[Math.floor(Math.random() * items.length)];
}






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
            return (undefined);
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
            return (undefined);
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
            return (undefined);
        }
    }
}


/* looped game. game function in here looped */


  for (let i = 0; i < 5; i++) {
   /* display console player choice */
    playerCard = 0;
    computerCard = 0;
    const playerSelection =  prompt("rock paper or scissors?").toLowerCase();
    const computerSelection = getComputerChoice(items)
    console.log(playRound(playerSelection, computerSelection));
    
    
  }  
    




