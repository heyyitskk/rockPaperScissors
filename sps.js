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
const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");
const mResult = document.createElement("div");

function displayFResult(displayFinalResult){ 
    mResult.textContent = displayFinalResult;
    displayResult.appendChild(mResult);
    playerScoreElement.textContent = ``;
    computerScoreElement.textContent = ``;
}

function getResult() {
    if (p === 5) {
        displayFResult("Player won the match!");
    } else {
        displayFResult("Computer won the match!");
    }
    const replay = document.createElement("button");
    const scoreboard = document.getElementById("scoreboard");
    replay.innerHTML = `<img style="height: 50px; width: 50px;" src="reload.jpg" alt="reload">`
    scoreboard.appendChild(replay);
    replay.addEventListener("click", () => {
        console.log(5);
        p = c = 0;
        displayResult.removeChild(mResult);
        scoreboard.removeChild(replay);
        displayResult.textContent = ``;
    })
}

const pcs = document.getElementsByClassName("pc");
function setupButtonClickEvent() {
    for (const pc of pcs) {
        pc.addEventListener("click", () => {
            computerSelection = getRPS();
            if(p < 5 && c < 5){
                const result = playRound(pc.id, computerSelection);
                displayResult.textContent = result;
                
                if (result.includes("You Won!")) {
                    p++;
                } else if (result.includes("You Lose!")) {
                    c++;
                }
                
                // Create a new div to hold the player and computer scores
                playerScoreElement.textContent = `Player Score: ${p}`;
                computerScoreElement.textContent = `Computer Score: ${c}`;
                if(p === 5 || c === 5)
                    getResult();
            }
        });
    }
}


setupButtonClickEvent();

