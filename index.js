function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice(choice){
    if(choice == 1){
        return "rock";
    } else if(choice == 2){
        return "paper";
    } else {
        return "scissors";
    }
}

function playTheGame(playerSelection, computerSelection){
    let playerSelection2 = playerSelection.toLowerCase();
    let computerSelection2 = computerSelection.toLowerCase();
    if(playerSelection2 == "rock"){
        switch (computerSelection2){
            case "rock":
                alert("You both selected rock, so it's a tie!");
                return "tie";
            case "paper":
                alert("The computer selected paper, so they win!");
                return "computer";
            case "scissors":
                alert("The computer selected scissors, so you win!");
                return "player";
        }
    } else if(playerSelection2 == "paper"){
        switch (computerSelection2){
            case "rock":
                alert("The computer selected rock, so you win!");
                return "player";
            case "paper":
                alert("You both selected paper, so it's a tie!");
                return "tie";
            case "scissors":
                alert("The computer selected scissors, so they win!");
                return "computer";
        }
    } else if(playerSelection2 == "scissors"){
        switch (computerSelection2){
            case "rock":
                alert("The computer selected rock, so they win!");
                return "computer";
            case "paper":
                alert("The computer selected paper, so you win!");
                return "player";
            case "scissors":
                alert("You both selected scissors, so it's a tie!");
                return "tie";
        }
    } else {
        alert("Please make sure you enter a valid answer.");
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    let roundWinner = "nothing";
    for(let i = 0; i < 5; i++) {
        let playerChoice = prompt("Let's play rock, paper, scissors! What is your choice?");
        let randomInt = getRandomInt(1,4);
        let computerChoice = getComputerChoice(randomInt);
        roundWinner = playTheGame(playerChoice, computerChoice);
        if(roundWinner == "player"){
            playerWins++;
            alert(`You have won ${playerWins} and the computer has won ${computerWins}`);
            if(playerWins >= 3){
                return;
            } // setting win cap to three (best of five)
        } else if (roundWinner == "computer"){
            computerWins++;
            alert(`You have won ${playerWins} and the computer has won ${computerWins}`);
            if(computerWins >= 3){
                return;
            } // setting win cap to three (best of five)
        } else if (roundWinner == "tie"){
            alert(`You have won ${playerWins} and the computer has won ${computerWins}`);
            i--; // decrement loop counter in the event of a tie so that we can still get best of five
        }
    }
}


game();