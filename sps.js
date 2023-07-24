function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function getRPS(){
    ch = getComputerChoice();
    if (ch == 1)
        console.log("Rock");
    else if (ch == 2)
        console.log("Paper");
    else
        console.log("Scissor");   
}

getRPS();