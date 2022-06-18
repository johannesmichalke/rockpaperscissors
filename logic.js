const display = document.querySelector("#display");
const score = document.querySelector("#score");
const buttons = document.querySelectorAll("button");
let playerWins = 0;
let computerWins = 0;

function computerPlay(){
    let num = Math.random();
    if(num>0.33){
        if(num>0.66){
            return("rock");
        }
        else{
            return("scissors");
        }
    }
    else{
        return("paper");
    }
}

function rps(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let winner = 1;
    if(playerSelection == computerSelection){
        winner = 0;
    }
    else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors"){
        winner = 2;
    }
    switch(winner){
        case 0:
            display.textContent = "Draw! You both picked "+playerSelection;
            break;
        case 1:
            display.textContent = "You win! "+playerSelection+" beats "+computerSelection;
            playerWins++;
            break;
        case 2:
            display.textContent = "You lose! "+computerSelection+" beats "+playerSelection;
            computerWins++;
            break;
    }
    if(computerWins>4){
        return("Game is over. The Computer Wins!")
    }
    else if(playerWins>4){
        return("Game is over. You Win!")
    }
    else{
        return("Your Wins: "+playerWins+" --- Computer Wins: "+computerWins);
    }
}



buttons.forEach((button) =>
{
    button.addEventListener("click", () => {
    score.textContent = rps(button.id, computerPlay());
    })
})

