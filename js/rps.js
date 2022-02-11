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

    function computerPlay() {
      const computerOptions = ['rock', 'paper', 'scissors'];
      const computerRandom = Math.floor(Math.random() * computerOptions.length);
      return computerOptions[computerRandom];
    }

    playerOptions.forEach(option => {
      option.addEventListener('click', function(e){
        const computerSelection = computerPlay();
        playerSelection = this.innerText.toLowerCase();
        playRound();
        if (computerScore === 5 || userScore === 5) {
          return 'its over';
        }
      })
    })

    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return 'It\'s a Draw!';
      } else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
            (playerSelection === 'paper' && computerSelection === 'scissors') || 
            (playerSelection === 'scissors' && computerSelection === 'rock')) {
            computerScore++;
            return 'You Lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) +
            ' beats ' + playerSelection.charAt(0) + playerSelection.slice(1) + '!';
      } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
            (playerSelection === 'paper' && computerSelection === 'rock') || 
            (playerSelection === 'scissors' && computerSelection === 'paper')) {
            userScore++;
            return 'You Win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) +
            ' beats ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
      } 
    }
      
    // console.log(playRound(playerSelection, computerSelection));
    // console.log(playerSelection, computerSelection);
    // console.log(userScore, computerScore);

    if (userScore > computerScore) {
      return `The final score out of 5 rounds is User: ${userScore} - Computer: ${computerScore}. You Win!`;
    } else if (userScore < computerScore) {
      return `The final score out of 5 rounds is User: ${userScore} - Computer: ${computerScore}. You Lose!`;
    } else if (userScore === computerScore) {
      return `The final score out of 5 rounds is User: ${userScore} - Computer: ${computerScore}. It's a Draw!`;
    }
  }
  playGame();
}
game();