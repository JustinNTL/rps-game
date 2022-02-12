/* Plan

Ask user to choose rock, paper, or scissors (make sure the string is case insensitive
and their selection is valid)

Have the computer randomly choose rock, paper, or scissors

Compare the answers of the user input and the computer; output user round result 

Play 5 rounds and keep score and report the winner/loser at the end. Take draws into account--
Given restraints, there will be chances of no final winner/loser 

Edit: Use buttons instead of asking for a string */

function game() {
  let userScore = 0;
  let computerScore = 0;
  let movesEnd = 0;

  const playGame = () => {
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');
    const playerOptions = [rock, paper, scissors];
    const score = document.querySelector('.score');
    const result = document.querySelector('.results');

    function computerPlay() {
      const computerOptions = ['rock', 'paper', 'scissors'];
      const computerRandom = Math.floor(Math.random() * computerOptions.length);
      return computerOptions[computerRandom];
    }

    playerOptions.forEach(option => {
      option.addEventListener('click', function(e) {
        const computerSelection = computerPlay();
        playerSelection = this.innerText.toLowerCase();
        playRound(playerSelection, computerSelection);
        displayScore();
        fivePoints();
        console.log(playerSelection, computerSelection);
        console.log(userScore, computerScore);
      })
    })

    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return result.innerText = 'It\'s a Draw!';
      } else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
            (playerSelection === 'paper' && computerSelection === 'scissors') || 
            (playerSelection === 'scissors' && computerSelection === 'rock')) {
            computerScore++;
            return result.innerText = 'You Lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) +
            ' beats ' + playerSelection.charAt(0) + playerSelection.slice(1) + '!';
      } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
            (playerSelection === 'paper' && computerSelection === 'rock') || 
            (playerSelection === 'scissors' && computerSelection === 'paper')) {
            userScore++;
            return result.innerText = 'You Win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) +
            ' beats ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
      } 
    }

    function displayScore() {
      return score.innerText = `Current Score --- User: ${userScore} - Computer: ${computerScore}`;
    }

    function fivePoints() {
      if (userScore === 5) {
        result.innerText = `The first to score 5 points is User: ${userScore} - Computer: ${computerScore}. You Win!`;
        userScore = 0;
        computerScore = 0;
      } else if (computerScore === 5) {
        result.innerText = `The first to score 5 points is Computer: ${computerScore} - User: ${userScore}. You Lose!`;
        userScore = 0;
        computerScore = 0;
      } 
    }
  }
  playGame();
}
game();