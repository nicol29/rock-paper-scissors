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
    const scissors = document.querySelector(".scissors");
    let playerChoice;
    
    if(targetDiv == rock){
        playerChoice = "rock";
    } else if (targetDiv == paper){
        playerChoice = "paper"
    } else{
        playerChoice = "scissors"
    }

    console.log(playerChoice);
}


function gameLogic(playerChoice) {
    let playerScore = 0;
    let computerScore = 0;
    let result = false;

    while(!result){
        let computerChoice = getComputerChoice();
        let playerChoice = playerChoice();
        console.log(playerChoice);

        if(computerChoice == "rock" && playerChoice == "scissors"){
            alert("You lost, computer chose " + computerChoice);
            computerScore ++;
        } else if(computerChoice == "paper" && playerChoice == "rock"){
            alert("You lost, computer chose " + computerChoice);
            computerScore ++;
        } else if(computerChoice == "scissors" && playerChoice == "paper"){
            alert("You lost, computer chose " + computerChoice);
            computerScore ++;
        } else if(computerChoice == playerChoice){
            alert("You and computer drew the same");
        } else{
            alert("You won, computer chose " + computerChoice);
            playerScore ++;
        }

        if(playerScore == 3){
            result = true
        } else if (computerScore == 3){
            result = true
        }
    }

    if(playerScore > computerScore){
        alert("You won!");
    } else{
        alert("You lost!");
    }
}

//gameLogic();

const availableGamePicks = document.querySelectorAll(".selection");


availableGamePicks.forEach(Pick => Pick.addEventListener(("click"), (e) =>{
    playerSelection(e.target);
}));

