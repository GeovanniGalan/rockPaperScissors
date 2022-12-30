
const items = ["rock", "paper", "scissors"];

//random item from (items) array generator funtion
function getComputerChoice(items) {
    return  items[Math.floor(Math.random() * items.length)];
}
//scores  
playerScore = 0;
computerScore = 0;
// PlayRound function (1 game)
function playRound (playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
       (playerSelection == "scissors" && computerSelection == "paper") ||
       (playerSelection == "paper" && computerSelection == "rock")) 
        { 
        playerScore += 1;
        
        return `you win! ${playerSelection} beats ${computerSelection}!! \n\n Player points: ${playerScore} \n\n computer points: ${computerScore}`;
        } 
    
    else if ((playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors")) 
        {
        computerScore += 1;
        return `you lose! ${computerSelection} beats ${playerSelection}!! \n\n Computer points: ${computerScore} \n\n player score: ${playerScore}`;    
        }
    else if (playerSelection == computerSelection) {
        return `its a tie! \n\n player points:  ${playerScore} \n\n Computer Score: ${computerScore}`;
    }
    else {
        return undefined;
    }
}   
//5 round game, with working for-loop. anounces winner after loop
function game(result) {   
    for (let i = 0; i < 5; i++) {
        const playerSelection =  prompt("rock paper or scissors?").toLowerCase();
        const computerSelection = getComputerChoice(items)
        result = console.log(playRound(playerSelection, computerSelection));  
    }
    if (playerScore > computerScore) {
        console.log("you win! reload to play again!");
    }
    else if (computerScore > playerScore) {
        console.log("computer wins! reload to play again!");
    }
    else {
        console.log("you tied with the computer. try again.");
    }
}
//running 5 round game(rock paper scissors) in this function
game();

const btn btn1 = document.createElement('#btn')
