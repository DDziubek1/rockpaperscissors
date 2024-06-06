//gets user input
const args = process.argv.slice(2);
//maximal one input from user
if (args.length !== 1) {
  console.error("Please provide only one input!");
  return;
}
//array of three choices for computer
const choice = ["rock", "paper", "scissors"];

//random choice for computer
function getComputerChoice(choice) {
  return choice[Math.floor(Math.random() * choice.length)];
}

//getting two values for the function, user value and computer value
const playerSelection = args.toString();
const computerSelection = getComputerChoice(choice);


//paper rock scissor function
function round(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Its a draw!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "you win! rock beat scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "you win! scissors beat paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "you win! paper beat rock";
  } else {
    return "you lose!";
  }
}

//showing results
console.log('your choice: ' + playerSelection + '       computers choice: ' + computerSelection);
console.log(round(playerSelection, computerSelection));
