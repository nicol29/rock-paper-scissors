let playerScore = 0;
let computerScore = 0;
let didWin = false;

const availableGamePicks = document.querySelectorAll(".selection");


availableGamePicks.forEach(Pick => Pick.addEventListener(("click"), (e) =>{
    if(!didWin) playerSelection(e.target);

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

    if(computerChoice == "rock" && playerChoice == "scissors"){
        console.log("You lost, computer chose " + computerChoice);
        computerScore ++;
    } else if(computerChoice == "paper" && playerChoice == "rock"){
        console.log("You lost, computer chose " + computerChoice);
        computerScore ++;
    } else if(computerChoice == "scissors" && playerChoice == "paper"){
        console.log("You lost, computer chose " + computerChoice);
        computerScore ++;
    } else if(computerChoice == playerChoice){
        console.log("You and computer drew the same");
    } else{
        console.log("You won, computer chose " + computerChoice);
        playerScore ++;
    }

    if(playerScore == 5 || computerScore == 5){
        if(playerScore > computerScore){
            console.log("You won!");
            didWin = true;
        } else{
            console.log("You lost!");
            didWin = true;
        }
    }
}
