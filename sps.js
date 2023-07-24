function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function getRPS(){
    let ch = getComputerChoice();
    if (ch == 1)
        return "rock";
    else if (ch == 2)
        return "paper";
    else
        return "scissors";
}

let computerSelection = getRPS();

let playerSelection = prompt("Enter your choice").toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors")
        return ("You Won! Rock beats scissors");
    else if (playerSelection == "paper" && computerSelection == "rock")
        return ("You Won! Paper beats rock");
    else if (playerSelection == "scissors" && computerSelection == "paper")
        return ("You Won! Scissors beats paper");
    else if (playerSelection == "scissors" && computerSelection == "rock")
        return ("You Lose! Rock beats scissors");
    else if (playerSelection == "rock" && computerSelection == "paper")
        return ("You Lose! Paper beats rock");
    else if (playerSelection == "paper" && computerSelection == "scissors")
        return ("You Lose! Scissors beats paper");
}

console.log(playRound(playerSelection, computerSelection));