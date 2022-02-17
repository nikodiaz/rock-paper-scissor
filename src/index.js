const $computerSelection = document.getElementById('computer-choice');
const $playerSelection = document.getElementById('player-choice');

const $buttonRock = document.getElementById('rock');
const $buttonPaper = document.getElementById('paper');
const $buttonScissor =  document.getElementById('scissor');
const $buttonReset = document.getElementById('reset');

const $panel = document.querySelector('.panel');
const $playerScore = document.getElementById('player-score');
const $computerScore = document.getElementById('computer-score');
const $msg = document.getElementById('message');
const $endGame = document.getElementById('end-game-msg');

const computerOption = ['Piedra','Papel','Tijeras'];

$buttonRock.addEventListener('click', () => {
  playRound($buttonRock.textContent, computerPlay());
  $playerSelection.src = '/assets/img/piedra.png';
});

$buttonPaper.addEventListener('click', () => {
  playRound($buttonPaper.textContent, computerPlay());
  $playerSelection.src = '/assets/img/hoja-de-papel.png';
});

$buttonScissor.addEventListener('click', () => {
  playRound($buttonScissor.textContent, computerPlay());
  $playerSelection.src = '/assets/img/tijeras.png';
});

$buttonReset.addEventListener('click', () => {
  $endGame.textContent = '';
  computerScore = 0;
  playerScore = 0;
  $buttonRock.disabled = false;
  $buttonPaper.disabled = false;
  $buttonScissor.disabled = false;
})

let computerScore = 0;
let playerScore = 0;

function computerPlay () {
  let computerChoice = Math.floor(Math.random() * computerOption.length);

  if (computerChoice === 0) {
    $computerSelection.src = '/assets/img/piedra.png';
  }else if (computerChoice === 1) {
    $computerSelection.src = '/assets/img/hoja-de-papel.png';
  }else if (computerChoice === 2) {
    $computerSelection.src= '/assets/img/tijeras.png';
  }

  return computerOption[computerChoice];
}

function playRound (playerSelect, computerSelect) {

  if(playerSelect === computerSelect){
    $msg.textContent = 'Empate';
  }else if(playerSelect === 'Piedra' && computerSelect === 'Papel') {
    computerScore++;
    $msg.textContent = 'Perdiste! Papel envuelve a la Piedra.';
  }else if(playerSelect === 'Piedra' && computerSelect === 'Tijeras') {
    playerScore++;
    $msg.textContent = 'Ganaste!! Piedra rompe Tijeras.';
  }else if(playerSelect === 'Papel' && computerSelect === 'Piedra') {
    playerScore++;
    $msg.textContent = 'Ganaste!! Papel envuelve a la Piedra.';
  }else if(playerSelect === 'Papel' && computerSelect === 'Tijeras') {
    computerScore++;
    $msg.textContent = 'Perdiste! Tijeras cortan Papel.';
  }else if(playerSelect === 'Tijeras' && computerSelect === 'Piedra') {
    computerScore++;
    $msg.textContent = 'Perdiste! Piedra rompe Tijeras.';
  }else if(playerSelect === 'Tijeras' && computerSelect === 'Papel') {
    playerScore++;
    $msg.textContent = 'Ganaste!! Tijeras cortan Papel.';
  }

  $playerScore.textContent = `Jugador: ${playerScore}`;
  $computerScore.textContent = `Computadora: ${computerScore}`;

  if (playerScore === 5) {
    $endGame.textContent = 'Ganó el Jugador';
    $buttonRock.disabled = true;
    $buttonPaper.disabled = true;
    $buttonScissor.disabled = true;
    $msg.textContent = '';
  }else if (computerScore === 5){
    $endGame.textContent = 'Ganó la Computadora';
    $buttonRock.disabled = true;
    $buttonPaper.disabled = true;
    $buttonScissor.disabled = true;
    $msg.textContent = '';
  }

}
