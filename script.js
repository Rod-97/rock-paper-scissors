function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice() {
  const choice = prompt("Rock, paper, or scissors?");
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const humanPick = humanChoice.toLowerCase();

    if (humanPick === "rock") {
      if (computerChoice === "rock") {
        console.log("It's a tie!");
        return "T";
      } else if (computerChoice === "paper") {
        console.log("You lose! Paper beats rock.");
        return "C";
      } else {
        console.log("You win! Rock beats scissors.");
        return "H";
      }
    } else if (humanPick === "paper") {
      if (computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
        return "H";
      } else if (computerChoice === "paper") {
        console.log("It's a tie!");
        return "T";
      } else {
        console.log("You lose! Scissors beats paper.");
        return "C";
      }
    } else if (humanPick === "scissors") {
      if (computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
        return "C";
      } else if (computerChoice === "paper") {
        console.log("You win! Scissors beats paper.");
        return "H";
      } else {
        console.log("It's a tie!");
        return "T";
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const winner = playRound(humanSelection, computerSelection);
    if (winner === "H") humanScore++;
    else if (winner === "C") computerScore++;
  }

  if (humanScore > computerScore) console.log("You won the game!");
  else if (humanScore < computerScore) console.log("You lost the game!");
  else if (humanScore === computerScore) {
    console.log("The game ended in a tie...");
  }
}

playGame();
