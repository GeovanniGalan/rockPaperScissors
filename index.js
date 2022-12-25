const items = ["rock", "paper", "scissors"];

function getComputerChoice(items) {
    return  items[Math.floor(Math.random() * items.length)];
}
playerScore = 0;
computerScore = 0;


   /* display console player choice */
   
const playerSelection =  prompt("rock paper or scissors?").toLowerCase();
const computerSelection = getComputerChoice(items)
    

console.log(playRound(playerSelection, computerSelection));

// PlayRound function (1 game)
function playRound (playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
       (playerSelection == "scissors" && computerSelection == "paper") ||
       (playerSelection == "paper" && computerSelection == "rock"))
        { 
        playerScore += 1;
        return `you win! ${playerSelection} beats ${computerSelection}!! \n ${playerScore} `;
        } 
    else if ((playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors")) 
        {
        computerScore += 1;
        return `you lose! ${computerSelection} beats ${playerSelection}!!`    
        }
    else if (playerSelection == computerSelection) {
        return "its a tie! play again!";
    }
    else {
        return undefined;
    }
}


/* looped game. game function in here looped */


  

    
  
    




