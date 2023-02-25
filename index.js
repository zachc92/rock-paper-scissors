const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', () => game('rock'));

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', () => game('paper'));

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => game('scissors'));

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => reset());

let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let roundAlert = document.getElementById('roundAlert');

let playerWins = 0;
let computerWins = 0;

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
                roundAlert.textContent = "You both selected rock, so it's a tie!"; 
                return "tie";
            case "paper":
                roundAlert.textContent = "The computer selected paper, so they win!";
                return "computer";
            case "scissors":
                roundAlert.textContent = "The computer selected scissors, so you win!";
                return "player";
        }
    } else if(playerSelection2 == "paper"){
        switch (computerSelection2){
            case "rock":
                roundAlert.textContent = "The computer selected rock, so you win!";
                return "player";
            case "paper":
                roundAlert.textContent = "You both selected paper, so it's a tie!";
                return "tie";
            case "scissors":
                roundAlert.textContent = "The computer selected scissors, so they win!";
                return "computer";
        }
    } else if(playerSelection2 == "scissors"){
        switch (computerSelection2){
            case "rock":
                roundAlert.textContent = "The computer selected rock, so they win!";
                return "computer";
            case "paper":
                roundAlert.textContent = "The computer selected paper, so you win!";
                return "player";
            case "scissors":
                roundAlert.textContent = "You both selected scissors, so it's a tie!";
                return "tie";
        }
    }
}

function reset(){
    playerWins = 0;
    computerWins = 0;
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
    roundAlert.textContent = "Resetting the scores..."
}

function game(choice){
    let roundWinner = "nothing";
    let playerChoice = choice;
    let randomInt = getRandomInt(1,4);
    let computerChoice = getComputerChoice(randomInt);
    roundWinner = playTheGame(playerChoice, computerChoice);
    if(roundWinner == "player"){
        playerWins++;
        playerScore.textContent = playerWins;
        if(playerWins == 5){
            roundAlert.textContent = "You've won the game! Continue playing, or reset the score."
        }
    } else if (roundWinner == "computer"){
        computerWins++;
        computerScore.textContent = computerWins;
        if(computerWins == 5){
            roundAlert.textContent = "You've lost the game! Continue playing, or reset the score."
        }
    }
};

// Old function for looping through game rounds with alerts

// function game(){
//     let playerWins = 0;
//     let computerWins = 0;
//     let roundWinner = "nothing";
//     for(let i = 0; i < 5; i++) {
//         let playerChoice = prompt("Let's play rock, paper, scissors! What is your choice?");
//         let randomInt = getRandomInt(1,4);
//         let computerChoice = getComputerChoice(randomInt);
//         roundWinner = playTheGame(playerChoice, computerChoice);
//         if(roundWinner == "player"){
//             playerWins++;
//             alert(`You have won ${playerWins} and the computer has won ${computerWins}`);
//             if(playerWins >= 3){
//                 return;
//             } // setting win cap to three (best of five)
//         } else if (roundWinner == "computer"){
//             computerWins++;
//             alert(`You have won ${playerWins} and the computer has won ${computerWins}`);
//             if(computerWins >= 3){
//                 return;
//             } // setting win cap to three (best of five)
//         } else if (roundWinner == "tie"){
//             alert(`You have won ${playerWins} and the computer has won ${computerWins}`);
//             i--; // decrement loop counter in the event of a tie so that we can still get best of five
//         }
//     }
// }