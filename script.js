let playerScore = 0;
let computerScore = 0;
let computerSelection = 0;
let playerSelection = "";

const button1 = document.createElement("button");
button1.textContent = "Rock";
document.body.appendChild(button1);

const button2 = document.createElement("button");
button2.textContent = "Paper";
document.body.appendChild(button2);

const button3 = document.createElement("button");
button3.textContent = "Scissors";
document.body.appendChild(button3);

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  )
    computerScore++;
  return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function game() {
  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();

    // add event listeners to the buttons
  }
  const endPara = document.createElement("p");
  if (computerScore > playerScore) {
    endPara.textContent = "Computer Won!!!";
    document.body.appendChild(endPara);
  } else if (playerScore > computerScore) {
    endPara.textContent = "You Won!!!";
    document.body.appendChild(endPara);
  } else {
    endPara.textContent = "The Game is a Tie!!!";
    document.body.appendChild(endPara);
  }
}

const div = document.createElement("div");
button1.addEventListener("click", function () {
  playerSelection = "rock";

  const para = document.createElement("p");
  para.textContent = playRound(playerSelection, computerSelection);
  document.body.appendChild(para);
  const scorePara = document.createElement("p");
  scorePara.textContent = `Computer Score: ${computerScore}
    Player Score: ${playerScore}`;
  document.body.appendChild(scorePara);
});

button2.addEventListener("click", function () {
  playerSelection = "paper";
  const para = document.createElement("p");
  para.textContent = playRound(playerSelection, computerSelection);
  document.body.appendChild(para);
  const scorePara = document.createElement("p");
  scorePara.textContent = `Computer Score: ${computerScore}
    Player Score: ${playerScore}`;
  document.body.appendChild(scorePara);
});

button3.addEventListener("click", function () {
  playerSelection = "scissors";
  const para = document.createElement("p");
  para.textContent = playRound(playerSelection, computerSelection);
  document.body.appendChild(para);
  const scorePara = document.createElement("p");
  scorePara.textContent = `Computer Score: ${computerScore}
    Player Score: ${playerScore}`;
  document.body.appendChild(scorePara);
});

game();
