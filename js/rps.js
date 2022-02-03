// Plan

/*

Ask user to choose rock, paper, or scissors. (make sure the string is case insensitive)
and make sure their selection is valid

Have the computer randomly choose rock, paper, or scissors.

compare the answers of the user input and the computer. and output the winner of the round.

*/

// let playerSelection = prompt("Rock, Paper, or Scissors? Choose your fate."); 
// while (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !=="paper" && playerSelection.toLowerCase() !=="scissors")
//   {
//     alert(playerSelection + ' is not a valid option.');
//     playerSelection = prompt("Rock, Paper, or Scissors? Choose your fate.");
//   };

function computerPlay() {
  const computerOptions = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[random];
}

// const computerSelection = computerPlay();

// function rps(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     return 'It\'s a Draw!';
//   } else if (playerSelection === 'rock' && computerSelection === 'paper') {
//     return 'You Lose! Paper beats Rock!';
//   } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//     return 'You Win! Paper beats Rock!';
//   }
// };
 
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
        return 'It\'s a Draw!';
      } else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') || 
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return 'You Lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) +
        ' beats ' + playerSelection.charAt(0) + playerSelection.slice(1) + '!';
      } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return 'You Win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) +
        ' beats ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
      } 
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection, computerSelection);
