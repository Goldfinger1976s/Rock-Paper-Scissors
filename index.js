/*
Rock Paper Scissor Program
*/

// Get objects from html
const possibleChoices = document.querySelectorAll(".btn");
const displayUserChoice = document.querySelector(".displayUserChoice");
const displayCompChoice = document.querySelector(".displayCompChoice");
const displayResult = document.querySelector(".result");
const score = document.querySelector(".score");

//Get input from user rock paper or scissor
// Assign random selection to computers choice
let playerSelection;
let computerSelection;
let result;
let humanCount = 0;
let compCount = 0;

possibleChoices.forEach((choices) => {
  choices.addEventListener("click", (e) => {
    // targets values (rock, paper, scissors), of the buttons
    playerSelection = e.target.value;
    getComputerChoice();
    //playRound();
    game();
    console.log("Player Selection:", playerSelection);
    displayUserChoice.textContent = "User Choice: " + playerSelection;
    console.log("Computer Selection:", computerSelection);
    displayCompChoice.textContent = "Comp Choice: " + computerSelection;
    console.log(result);
    displayResult.textContent = "Result: " + result;
  });
});

// get computers random pick of rock paper scissor
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  let randomChoice = choices[randomNumber];
  return (computerSelection = randomChoice);
}

// compare response of computer and user and determine winner
function playRound() {
  //Convert player selectkion to lowercase
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    result = "Its a draw";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    result = "Computer Wins";
    compCount++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "Player Wins";
    humanCount++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "Player Wins";
    humanCount++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "Computer Wins";
    compCount++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "Computer Wins";
    compCount++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "Player Wins";
    humanCount++;
  }

  return result;
}

function game() {
  playRound();
  score.textContent = `User Score: ${humanCount} || Computer Score: ${compCount}`
  console.log(compCount);
  console.log(humanCount);
}
