

function computerChoice () {
    const choice= ["rock", "paper", "scissors"];
    let random = choice[Math.floor(Math.random() * choice.length)];
    console.log(random);

}