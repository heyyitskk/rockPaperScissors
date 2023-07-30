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

let p = 0;
let c = 0;
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return ("You Won! Rock beats scissors");
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return ("You Won! Paper beats rock");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return ("You Won! Scissors beats paper");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return ("You Lose! Rock beats scissors");
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return ("You Lose! Paper beats rock");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        return ("You Lose! Scissors beats paper");
    }
    else 
    return ("It's a tie!");
}

const displayResult = document.getElementById("result");

function getResult() {
    if (p === 5) {
        displayFResult("Player won the match!");
        p = c = 0;
    } else if (c === 5) {
        displayFResult("Computer won the match!");
        c = p = 0;
    }
    function displayFResult(displayFinalResult){
        const mResult = document.createElement("div");
        mResult.textContent = displayFinalResult;
        displayResult.appendChild(mResult);
    }
}

function setupButtonClickEvent() {
    const pcs = document.getElementsByClassName("pc");
    for (const pc of pcs) {
        pc.addEventListener("click", () => {
            computerSelection = getRPS();
            
            const result = playRound(pc.id, computerSelection);
            displayResult.textContent = result;
            
            
            if (result.includes("You Won!")) {
                p++;
            } else if (result.includes("You Lose!")) {
                c++;
            }
            // Create a new div to hold the player and computer scores
            const playerScoreElement = document.getElementById("playerScore");
            const computerScoreElement = document.getElementById("computerScore");
            playerScoreElement.textContent = p;
            computerScoreElement.textContent = c;
            if(p === 5 || c === 5)
                getResult();
        });
    }
}

setupButtonClickEvent();
