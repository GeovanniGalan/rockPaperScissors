
const items = ["rock", "paper", "scissors"];


function getComputerChoice(items) {
    return  items[Math.floor(Math.random() * items.length)];
}


playerScore = 0;
computerScore = 0;

const rock = document.getElementById('smash');
const scissors = document.getElementById('cut');
const paper = document.getElementById('wrap');

//3 event listeners for each button to display right choice when clicked
paper.addEventListener('click', function() {
    playRound('paper');
});
scissors.addEventListener('click', function() {
    playRound('scissors');
});
rock.addEventListener('click' , function() {
    playRound('rock');
     
});


// PlayRound function (1 game)
function playRound (yourChoice) {
    txt = yourChoice
    const computerSelection = getComputerChoice(items);
    if  (txt === null) {
        computerScore += 1;
    }
    

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
       (playerSelection == "scissors" && computerSelection == "paper") ||
       (playerSelection == "paper" && computerSelection == "rock")) 
        { 
        playerScore += 1;
        
        console.log(`you win! ${playerSelection} beats ${computerSelection}!! \n\n Player points: ${playerScore} \n\n computer points: ${computerScore}`);
        } 
    
    else if ((playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors")) 
        {
        computerScore += 1;
        console.log(`you lose! ${computerSelection} beats ${playerSelection}!! \n\n Computer points: ${computerScore} \n\n player score: ${playerScore}`);    
        }
      
    

    else if (playerSelection == computerSelection) {
        console.log(`its a tie! \n\n player points:  ${playerScore} \n\n Computer Score: ${computerScore}`);
    }


    else {
        return undefined;
    }
}   













//5 round game, with working for loop
function game(result) {   
     
    for (let i = 0; i < 5; i++) {
        const playerSelection = result
        if  (playerSelection === null) {
            computerScore += 1;
            break;
        }
        
        else {
            
            const computerSelection = getComputerChoice(items)
            result = console.log(playRound(playerSelection, computerSelection));  
        }
    }
        if (playerScore > computerScore) {
            console.log("you win! reload to play again!");
        }
        else if (computerScore > playerScore) {
            console.log("computer wins! reload to play again!");
        }
        else if (computerScore === playerScore) {
            console.log("you tied with the computer. try again.");
        }
        
} 


//running 5 round game(rock paper scissors) in this function
//game();

