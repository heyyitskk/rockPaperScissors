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

let p, c;
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        p++;
        return ("You Won! Rock beats scissors");
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        p++;
        return ("You Won! Paper beats rock");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        p++;
        return ("You Won! Scissors beats paper");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        c++;
        return ("You Lose! Rock beats scissors");
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        c++;
        return ("You Lose! Paper beats rock");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        c++;
        return ("You Lose! Scissors beats paper");
    }
    else 
        return ("It's a tie!");
}

function game(){
    let computerSelection;
    let playerSelection;
    p = 0;
    c = 0;
    for(n = 0; n < 5; n++){
        computerSelection = getRPS();
        playerSelection = prompt("Enter your choice").toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
    if(p > c)
        console.log("Player won the match!");
    else if(p < c)
        console.log("Computer won the match!");
    else
        console.log("The match is a draw..");
}

game();