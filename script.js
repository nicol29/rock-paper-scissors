function getComputerChoice() {
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


function playerSelection() {
    let playerChoice = prompt("Choose rock paper or scissors");
    
    return playerChoice;
}


function gameLogic() {
    let playerScore = 0;
    let computerScore = 0;
    let result = false;

    while(!result){
        let computerChoice = getComputerChoice();
        let playerChoice = playerSelection();

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

gameLogic();

