const items = ["rock", "paper", "scissors"];
//random item from (items) array generator funtion
function getComputerChoice(items) {
    return  items[Math.floor(Math.random() * items.length)];
}


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


playerScore = 0;
computerScore = 0;




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
        if (playerScore === 5) {
            rock.disabled= true;
            scissors.disabled= true;
            paper.disabled=true;
            para.textContent = `you beat the machine! you can do anything!`;
            
            }
        
    
        else {
                para.textContent = `\n\n Player score: ${playerScore} \n\n Computer score: ${computerScore}`;
            }
        }
        
    else if ((playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors")) 
        {
        computerScore += 1;
        if (computerScore === 5) {
            rock.disabled= true;
            scissors.disabled= true;
            paper.disabled=true;
            para.textContent = `you lost to the machine.`       
            }
        else {     
        para.textContent =` Player score: ${playerScore} \n\n Computer score: ${computerScore}`; 
        }
        }
    else if (playerSelection == computerSelection) {

        para.textContent = `\n\n Player score:  ${playerScore} \n\n Computer score: ${computerScore}`
        }

}













//5 round game, with working for loop



//running 5 round game(rock paper scissors) in this function
//game();

