let rockButton = document.querySelector('.rockButton');
let paperButton = document.querySelector('.paperButton');
let scissorsButton = document.querySelector('.scissorsButton');

let computerScore = 0;
let humanScore = 0;

function playRound(e){
    console.log(e.target.textContent);
    function getHumanChoice() {
        let choice = e.target.textContent
        return choice;
    }
    function getComputerChoice() {
        let number = Math.random() * 10;
        if (number < 3){
            return "rock";
        } else if (number <= 6){
            return "paper";
        } else if (number <= 10){
            return "scissors"
        }
    }
    let human = getHumanChoice();
    let computerChoice = getComputerChoice();
    let humanChoice = human.toLowerCase();
    if (humanChoice === computerChoice){
        document.querySelector('.roundOutcome').innerText = `You chose ${humanChoice}, the computer chose ${computerChoice}. It's a tie!`;
        document.querySelector('#playerScore').innerText = humanScore;
        document.querySelector('#computerScore').innerText = computerScore;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'scissors' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'rock'){
        document.querySelector('.roundOutcome').innerText = `You chose ${humanChoice}, the computer chose ${computerChoice}. You win!`;
        humanScore++;
        document.querySelector('#playerScore').innerText = humanScore;
        document.querySelector('#computerScore').innerText = computerScore;
    } else if (computerChoice == 'rock' && humanChoice == 'scissors' || computerChoice == 'scissors' && humanChoice == 'paper' || computerChoice == 'paper' && humanChoice == 'rock'){
        document.querySelector('.roundOutcome').innerText = `You chose ${humanChoice}, the computer chose ${computerChoice}. You lose!`;
        computerScore++;
        document.querySelector('#playerScore').innerText = humanScore;
        document.querySelector('#computerScore').innerText = computerScore;   
    }
    if (humanScore == 5) {
        document.querySelector('.roundOutcome').innerText = `Game over, you win! Player Score: ${humanScore} Computer Score: ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
        document.querySelector('#playerScore').innerText = humanScore;
        document.querySelector('#computerScore').innerText = computerScore;
    } else if (computerScore == 5){
        document.querySelector('.roundOutcome').innerText = `Game over, you lose! Computer Score: ${computerScore} Player Score: ${humanScore}`;
        humanScore = 0;
        computerScore = 0;
        document.querySelector('#playerScore').innerText = humanScore;
        document.querySelector('#computerScore').innerText = computerScore;
    }
}

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);