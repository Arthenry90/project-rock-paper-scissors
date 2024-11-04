function getComputerChoice() {
    valorRandon = Math.floor(Math.random() * 3);
    switch (valorRandon) {
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scissor";

    }
}

function getHumanChoice() {
    var choice = prompt();
    return choice.toLowerCase();
}

function playRound(getComputerChoice, getHumanChoice) {
    if (
        (getComputerChoice == "paper" && getHumanChoice == "rock") ||
        (getComputerChoice == "rock" && getHumanChoice == "scissor") ||
        (getComputerChoice == "scissor" && getHumanChoice == "paper")
    ) {
        console.log("Computador venceu!!!");
        computerScore++;
    } else if (getComputerChoice === getHumanChoice) {
        console.log("Empate!!!");
    } else {
        console.log("Você venceu!!!");
        humanScore++;
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(){
    let times = 0;
    while (times <= 4) {
        const humanSelec = getHumanChoice();
        const computerSelec = getComputerChoice();
        playRound(computerSelec, humanSelec);
        times++;
    }
    return console.log("O placar da máquina foi: " + computerScore + " E o seu placar foi: " + humanScore);
    ;
}
