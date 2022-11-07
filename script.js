let playerScore = 0;
let computerScore = 0;
let finishedGame = false;

const availableGamepicks = document.querySelectorAll(".selection");
const playerDisplayScore = document.querySelector(".player-score");
const computerDisplayScore = document.querySelector(".pc-score");
const winDetails = document.querySelector(".game-details");
const playAgainButton = document.querySelector("button");

playAgainButton.style.visibility = "hidden";


availableGamepicks.forEach(pick => pick.addEventListener("click", (e) =>{
    if(!finishedGame) playerSelection(e.target);  
    
    return;
}));

availableGamepicks.forEach(pick => pick.addEventListener("mousedown", () => pick.classList.add("transition")));
availableGamepicks.forEach(pick => pick.addEventListener("mouseup", () => pick.classList.remove("transition")));

playAgainButton.addEventListener("click", () => {
    finishedGame = false;
    playerScore = 0;
    computerScore = 0;

    playAgainButton.style.visibility = "hidden";
    playerDisplayScore.innerText = "";
    computerDisplayScore.innerText = "";
    winDetails.innerText = "";
});

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
    playAgainButton.style.visibility = "hidden";

    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    let playerpick;
    

    if(targetDiv == rock){
        playerpick = "rock";
    } else if (targetDiv == paper){
        playerpick = "paper"
    } else{
        playerpick = "scissors"
    }

    gameLogic(playerpick);
}


function gameLogic(playerChoice) {
    let computerChoice = getComputerChoice();

    if(computerChoice == "rock" && playerChoice == "scissors"){
        winDetails.innerText = `You lost the round, computer chose ${computerChoice}.`;
        computerScore ++;
    } else if(computerChoice == "paper" && playerChoice == "rock"){
        winDetails.innerText = `You lost the round, computer chose ${computerChoice}.`;
        computerScore ++;
    } else if(computerChoice == "scissors" && playerChoice == "paper"){
        winDetails.innerText = `You lost the round, computer chose ${computerChoice}.`;
        computerScore ++;
    } else if(computerChoice == playerChoice){
        winDetails.innerText = `You and computer drew the same.`;
    } else{
        winDetails.innerText = `You won the round, computer chose ${computerChoice}`;
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
            winDetails.innerText = "You won!";
            finishedGame = true;
        } else{
            winDetails.innerText = "You lost!";
            finishedGame = true;
        }
    }
}
