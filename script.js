console.log("alola");

function getComputerChoice() {
    valorRandon = Math.floor(Math.random() * 3);
    console.log(valorRandon);
    switch (valorRandon){
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scissor";

    }
}
