// DOM MANIUPULATION

const optionBtn = document.querySelectorAll('div.optionBtn button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore') 
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');




// GLOBAL VARIABLES NEEDED FOR SCRIPT
let options = ['rock', 'paper', 'scissors'];
let playerScore = 0
let computerScore = 0
let computerPick = computerPlay();

// COMPUTERS RANDOM CHOICE
function computerPlay () {
let computerPick = options[Math.floor(Math.random() * options.length)];
return computerPick.toLowerCase();
};



//COMPUTER VS PLAYER FUNCTION
startGame();

function playRound (playerSelection, computerSelection) {
if (playerSelection===computerSelection) 
{roundResults.textContent =  "It is a tie"}
else if (playerSelection === 'rock' && computerSelection === 'scissors') 
{playerPoints.textContent = ++playerScore
roundResults.textContent = "You win, rock beats scissors"}
else if (playerSelection === 'scissors' && computerSelection === 'paper') 
{playerPoints.textContent = ++playerScore
roundResults.textContent = "You win, scissors beats paper"}
else if (playerSelection === 'paper' && computerSelection === 'rock') 
{playerPoints.textContent = ++playerScore
roundResults.textContent = "You win, paper beats rock"}
else if (playerSelection === 'rock' && computerSelection === 'paper')
{computerPoints.textContent = ++computerScore
roundResults.textContent = "You lose, paper beats rock"}
else if (playerSelection === 'scissors' && computerSelection === 'rock') 
{computerPoints.textContent = ++computerScore
roundResults.textContent = "You lose, rock beats scissors"}
else if (playerSelection === 'paper' && computerSelection === 'scissors') 
{computerPoints.textContent = ++computerScore
roundResults.textContent =  "You lose, scissors beats paper"}
else 
{roundResults.textContent = "Invalid input"};

checkWinner();
};
resetGame();

// start game with button selection, playerSelection = button ID

function checkWinner() {
    if (computerScore == 5 && playerScore == 5) {
      roundResults.textContent = "Tie!";
      roundResults.style.color ='blue';
       optionBtn.forEach(button => {
       button.removeEventListener('click', getPlayerChoice);
     });
    }else if (computerScore == 5) {
       roundResults.textContent = "You lose!";
       roundResults.style.color ='red';
        optionBtn.forEach(button => {
        button.removeEventListener('click', getPlayerChoice);
      });
    }else if (playerScore == 5) {
      roundResults.textContent =  "You win!";
      roundResults.style.color ='green';
       optionBtn.forEach(button => {
       button.removeEventListener('click', getPlayerChoice);
     });
    }
  }
    
  function resetGame() {
    resetBtn.addEventListener('click',() => 
      location.reload());
  }
    
  
  function startGame() {
    optionBtn.forEach(button => {
      button.addEventListener('click', getPlayerChoice);
    });
  }
  
  
  function getPlayerChoice (e) {
    playerSelection = (e.target.id);
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  };

