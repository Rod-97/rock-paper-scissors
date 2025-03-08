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

  const humanScoreUI = document.querySelector("#human-score");
  const computerScoreUI = document.querySelector("#computer-score");
  const results = document.querySelector("#results");
  const winner = document.querySelector("#winner");

  humanScoreUI.textContent = 0;
  computerScoreUI.textContent = 0;

  function playRound(humanChoice) {
    if (humanScore === 5 || computerScore === 5) {
      humanScore = 0;
      computerScore = 0;
      winner.textContent = "";
    }
    const computerChoice = getComputerChoice();

    if (humanChoice === "rock") {
      if (computerChoice === "rock") {
        results.textContent = "It's a tie!";
      } else if (computerChoice === "paper") {
        results.textContent = "You lose! Paper beats rock.";
        computerScore++;
      } else {
        results.textContent = "You win! Rock beats scissors.";
        humanScore++;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        results.textContent = "You win! Paper beats rock.";
        humanScore++;
      } else if (computerChoice === "paper") {
        results.textContent = "It's a tie!";
      } else {
        results.textContent = "You lose! Scissors beats paper.";
        computerScore++;
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        results.textContent = "You lose! Rock beats scissors.";
        computerScore++;
      } else if (computerChoice === "paper") {
        results.textContent = "You win! Scissors beats paper.";
        humanScore++;
      } else {
        results.textContent = "It's a tie!";
      }
    }

    humanScoreUI.textContent = humanScore;
    computerScoreUI.textContent = computerScore;

    if (humanScore === 5 || computerScore === 5) {
      if (humanScore > computerScore) {
        winner.textContent = "You won the game!";
      } else if (humanScore < computerScore) {
        winner.textContent = "You lost the game!";
      } else if (humanScore === computerScore) {
        winner.textContent = "The game ended in a tie...";
      }
    }
  }

  rockBtn.addEventListener("click", () => playRound("rock"));
  paperBtn.addEventListener("click", () => playRound("paper"));
  scissorsBtn.addEventListener("click", () => playRound("scissors"));
}

playGame();
