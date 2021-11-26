let playerScore = 0;
let computerScore = 0;

const imgs = document.querySelectorAll("img");
const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");

const galat = document.querySelector("#galat");
const fener = document.querySelector("#fener");
const besik = document.querySelector("#besik");

var primerColor = "black"
var secondaryColor = "white"

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

galat.addEventListener("click", () => {
    primerColor = "yellow";
    secondaryColor = "red";
});

fener.addEventListener("click", () => {
    primerColor = "darkblue";
    secondaryColor = "yellow";
});

besik.addEventListener("click", () => {
    primerColor = "black";
    secondaryColor = "white";
});


buttons.forEach(button => {
    button.addEventListener("mouseenter", function(event) {
        body.style.backgroundColor = secondaryColor;
        body.style.color = primerColor;
        imgs.forEach(image => {
            image.setAttribute("style","border: 2px solid ${primerColor}; width: 275px; height: 215px;");
        });
        event.style.backgroundColor = secondaryColor;
        event.setAttribute("height: 110px; width: 275px; font-size: 30px; font-weight: 900; background-color: ${primerColor}; border: 3px solid black; color: black;");
        event.style.borderColor = primerColor;
    });

    button.addEventListener("mouseleave", function(event) {
        body.style.backgroundColor = primerColor;
        body.style.color = secondaryColor;
        imgs.forEach(image => {
            image.setAttribute("style","border: 2px solid ${secondaryColor}; width: 250px; height: 200px;");
        });
        event.style.backgroundColor = secondaryColor;
        event.setAttribute("height: 100px; width: 250px; font-size: 25px; font-weight: 700; background-color: ${secondaryColor}; border: 2px solid black; color: black;");
        event.style.borderColor = secondaryColor;
    });
});

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

function game(){
    count = 0;
    while (count != 5){
        computersChoice = computerPlay()
        console.log(computersChoice);
        console.log(playersChoice);
        console.log(playRound(playersChoice, computersChoice));
        count++;
        console.log(count);
        console.log(playerScore);
        console.log(computerScore);
    }
    if(playerScore > computerScore){
        console.log("You Won!");
    } else if (computerScore > playerScore){
        console.log("You Lost!");
    } else {
        console.log("Scores are even");
    }
}

game();