const items = ["rock", "paper", "scissors"];

function getComputerChoice(items) {
    return  items[Math.floor(Math.random() * items.length)];
}
playerScore = 0;
computerScore = 0;
function winner() {
    (playerScore > computerScore) ? "you win!": "Computer wins!";
}

   /* display console player choice */
   


    



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
        return "its a tie! play again!";
    }


    else {
        return undefined;
    }
}

function game() {
    for (let i = 0; i<5; i++) {
        const playerSelection =  prompt("rock paper or scissors?").toLowerCase();
        const computerSelection = getComputerChoice(items)
        console.log(playRound(playerSelection, computerSelection)); 
          
    }
    winner();
}



game();
winner();  

    
  
    




