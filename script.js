const rockbtn = document.querySelector("#rock-btn");
const paperbtn = document.querySelector("#paper-btn");
const scissorbtn = document.querySelector("#scissor-btn");

const roundWind = document.querySelector("#results")
const roundWin = document.querySelector("#finalresults")

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
        roundWind.textContent = "Computador venceu!"
        computerScore++;
    } else if (getComputerChoice === getHumanChoice) {
        console.log("Empate!!!");
        roundWind.textContent = "Empate!"
    } else {
        console.log("Você venceu!!!");
        roundWind.textContent = "Você venceu!"
        humanScore++;
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(humanC){
        const humanSelec = humanC;
        const computerSelec = getComputerChoice();
        playRound(computerSelec, humanSelec);
    
        if(humanScore > 5 ){
            roundWin.textContent = "Você fez 5 pontos!"
        }
        if(computerScore > 5 ){
            roundWin.textContent = "A máquina fez 5 pontos!"
        }
    return console.log("O placar da máquina foi: " + computerScore + " E o seu placar foi: " + humanScore);
    ;
}


rockbtn.addEventListener("click",() => playGame("rock"))

paperbtn.addEventListener("click",() => playGame("paper"))

scissorbtn.addEventListener("click",() => playGame("scissor"))

