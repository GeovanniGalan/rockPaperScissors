const items = ["rock", "paper", "scissors"];
//random item from (items) array generator funtion
function getComputerChoice(items) {
    return  items[Math.floor(Math.random() * items.length)];
}

playerScore = 0;
computerScore = 0;
let displayPlayerScore = document.getElementById('playerScore');
let displayComputerScore = document.getElementById('computerScore');
const result = document.getElementById('results');
const para = document.createElement('p');
result.appendChild(para);


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

    let playerSelection = txt;

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
       (playerSelection == "scissors" && computerSelection == "paper") ||
       (playerSelection == "paper" && computerSelection == "rock")) 
        { 
        playerScore += 1;
        para.textContent = `\n\n Player points: ${playerScore} \n\n computer points: ${computerScore}`;
        } 
    
    else if ((playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors")) 
        {
        computerScore += 1;
        para.textContent =`\n\n Computer points: ${computerScore} \n\n player score: ${playerScore}`; 
        
        }
      
    

    else if (playerSelection == computerSelection) {
        para.textContent = `\n\n player points:  ${playerScore} \n\n Computer Score: ${computerScore}`
    }


    else {
        undefined;
    }
    

   
}   














//5 round game, with working for loop
function game(choice) {   
     
    for (let i = 0; i < 5; i++) {
        const playerSelection = choice
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

