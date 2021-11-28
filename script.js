let playerScore = 0;
let computerScore = 0;

const playerScoreBox = document.querySelector("#player-score");
const computerScoreBox = document.querySelector("#computer-score");
const promt = document.querySelector("#promt");

let playerSelection = " ";

const buttons = document.querySelectorAll("button");

function computerPlay(){
    random = Math.floor(Math.random() * (3) +1);
    switch (random){
        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            break;
        default:
            return "scissors"
    }
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection.toLowerCase()){
        case computerSelection:
            playerScore++;
            computerScore++;
            return "Tie"
            break;
        case "rock":
            if(computerSelection == "paper"){
                computerScore++;
                return "You Lose! Paper beats Rock"
            } else{
                playerScore++;
                return "You Win! Rock beats Scissors"
            }
            break;
        case "paper":
            if(computerSelection == "scissors"){
                computerScore++;
                return "You Lose! Scissors beats Paper"

            } else{
                playerScore++;
                return "You Win! Paper beats Rock"
            }
            break;
        case "scissors":
            if(computerSelection == "rock"){
                computerScore++;
                return "You Lose! Rock beats Scissors"
            } else{
                playerScore++;
                return "You Win! Scissors beats Paper"
            }
            break;
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playerSelection = button.getAttribute("id");
        game(playerSelection);
    });
});

function game(playerSelection){
    computersChoice = computerPlay();
    promt.innerHTML = playRound(playerSelection,computersChoice);
    playerScoreBox.innerText = `Your score: ${playerScore}`;
    computerScoreBox.innerText = `Computer score: ${computerScore}`;
    console.log(playerScore);
    console.log(computerScore);
}