let computerScore = 0;
let humanScore = 0;

function playGame(){
    function playRound(){
        function getHumanChoice() {
            let choice = prompt('Rock, Paper, or Scissors?');
            return choice;
        }
        function getComputerChoice() {
            let number = Math.random() * 10;
            if (number < 3){
                return "Rock";
            } else if (number <= 6){
                return "Paper";
            } else if (number <= 10){
                return "Scissors"
            }
        }
        let human = getHumanChoice();
        let computer = getComputerChoice();
        let humanChoice = human.toLowerCase();
        let computerChoice = computer.toLowerCase();
        console.log(humanChoice, computerChoice);
        if (humanChoice === computerChoice){
            console.log("It's a tie!");
            console.log(`Your score: ${humanScore} || Computer Score: ${computerScore}`);
        } else if (humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'scissors' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'rock'){
            console.log("You win!");
            humanScore++;
            console.log(`Your score: ${humanScore} || Computer Score: ${computerScore}`);
        } else if (computerChoice == 'rock' && humanChoice == 'scissors' || computerChoice == 'scissors' && humanChoice == 'paper' || computerChoice == 'paper' && humanChoice == 'rock'){
            console.log('You lose!');
            computerScore++;
            console.log(`Your score: ${humanScore} || Computer Score: ${computerScore}`);
        }
    }
    for(i=0; i<5; i++){
        playRound();
    }
}

playGame();