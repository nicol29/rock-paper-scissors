let playerScore = 0;
let computerScore = 0;
let finishedGame = false;

const availableGamePicks = document.querySelectorAll(".selection");
const playerDisplayScore = document.querySelector(".player-score");
const computerDisplayScore = document.querySelector(".pc-score");
const winDetails = document.querySelector(".game-details");
const playAgainButton = document.querySelector("button");

playAgainButton.style.visibility = "hidden";


availableGamePicks.forEach(Pick => Pick.addEventListener(("click"), (e) =>{
    if(!finishedGame) playerSelection(e.target);

    return;
}));

function getComputerChoice(e) {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    
    if(randomNum == 0){
        computerChoice = "rock"
    } else if(randomNum == 1){
        computerChoice = "paper"
    } else{
        computerChoice = "scissors"
    }

    return computerChoice;
}


function playerSelection(targetDiv) {
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    let playerPick;
    
    if(targetDiv == rock){
        playerPick = "rock";
    } else if (targetDiv == paper){
        playerPick = "paper"
    } else{
        playerPick = "scissors"
    }

    gameLogic(playerPick);
}


function gameLogic(playerChoice) {
    let computerChoice = getComputerChoice();
    winDetails.innerText = "";

    if(computerChoice == "rock" && playerChoice == "scissors"){
        winDetails.innerText = `You lost, computer chose ${computerChoice}.`;
        computerScore ++;
    } else if(computerChoice == "paper" && playerChoice == "rock"){
        winDetails.innerText = `You lost, computer chose ${computerChoice}.`;
        computerScore ++;
    } else if(computerChoice == "scissors" && playerChoice == "paper"){
        winDetails.innerText = `You lost, computer chose ${computerChoice}.`;
        computerScore ++;
    } else if(computerChoice == playerChoice){
        winDetails.innerText = `You and computer drew the same.`;
    } else{
        winDetails.innerText = `"You won, computer chose ${computerChoice}`;
        playerScore ++;
    }

    let logPS = document.createTextNode(playerScore);
    let logCS = document.createTextNode(computerScore);
    playerDisplayScore.innerText = "";
    computerDisplayScore.innerText = "";
    playerDisplayScore.appendChild(logPS);
    computerDisplayScore.appendChild(logCS);

    if(playerScore == 5 || computerScore == 5){
        playAgainButton.style.visibility = "visible"
        
        if(playerScore > computerScore){
            console.log("You won!");
            finishedGame = true;
        } else{
            console.log("You lost!");
            finishedGame = true;
        }
    }
}
