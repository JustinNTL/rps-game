// Plan

/*

Ask user to choose rock, paper, or scissors. (make sure the string is case insensitive)
and make sure their selection is valid

Have the computer randomly choose rock, paper, or scissors.

compare the answers of the user input and the computer. and output the winner of the round.

*/

let playerSelection = prompt("Rock, Paper, or Scissors? Choose your fate."); 
while (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !=="paper" && playerSelection.toLowerCase() !=="scissors")
  {
    alert(playerSelection + ' is not a valid option.');
    playerSelection = prompt("Rock, Paper, or Scissors? Choose your fate.");
  };

function computerPlay() {
  const computerOptions = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * computerOptions.length);
  console.log(computerOptions[random]);
};

computerPlay();