function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const rockBtn = document.querySelector("#rock-btn");
  const paperBtn = document.querySelector("#paper-btn");
  const scissorsBtn = document.querySelector("#scissors-btn");

  function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === "rock") {
      if (computerChoice === "rock") {
        console.log("It's a tie!");
      } else if (computerChoice === "paper") {
        console.log("You lose! Paper beats rock.");
        computerScore++;
      } else {
        console.log("You win! Rock beats scissors.");
        humanScore++;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
        humanScore++;
      } else if (computerChoice === "paper") {
        console.log("It's a tie!");
      } else {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
      } else if (computerChoice === "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
      } else {
        console.log("It's a tie!");
      }
    }

    if (humanScore === 5 || computerScore === 5) {
      if (humanScore > computerScore) console.log("You won the game!");
      else if (humanScore < computerScore) console.log("You lost the game!");
      else if (humanScore === computerScore) {
        console.log("The game ended in a tie...");
      }
      humanScore = 0;
      computerScore = 0;
    }
  }

  rockBtn.addEventListener("click", () => playRound("rock"));
  paperBtn.addEventListener("click", () => playRound("paper"));
  scissorsBtn.addEventListener("click", () => playRound("scissors"));
}

playGame();
