const computerOption = ['Piedra','Papel','Tijeras'];

let computerScore = 0;
let playerScore = 0;

function computerPlay () {
  let computerChoice = Math.floor(Math.random() * computerOption.length);

  return computerOption[computerChoice];
}

function playerPlay (playerSelection) {

  const regexPiedra = /piedra/i;
  const regexPapel = /papel/i;
  const regexTijeras = /tijeras/i;

  if(regexPiedra.test(playerSelection) === true) {
    return 'Piedra';
  }else if(regexPapel.test(playerSelection) === true) {
    return 'Papel';
  }else if(regexTijeras.test(playerSelection) === true) {
    return 'Tijeras'
  }else{
    return 'Sólo puedes elegir Piedra, Papel o Tijeras';
  }

}

function playRound (playerSelect, computerSelect) {

  console.log(playerSelect);
  console.log(computerSelect);

  if(playerSelect === computerSelect) return 'Empate';
  if(playerSelect === 'Piedra' && computerSelect === 'Papel') {
    computerScore++;
    return 'Perdiste! Papel envuelve a la Piedra.';
  }
  if(playerSelect === 'Piedra' && computerSelect === 'Tijeras') {
    playerScore++;
    return 'Ganaste!! Piedra rompe Tijeras.';
  }
  if(playerSelect === 'Papel' && computerSelect === 'Piedra') {
    playerScore++;
    return 'Ganaste!! Papel envuelve a la Piedra.';
  }
  if(playerSelect === 'Papel' && computerSelect === 'Tijeras') {
    computerScore++;
    return 'Perdiste! Tijeras cortan Papel.';
  }
  if(playerSelect === 'Tijeras' && computerSelect === 'Piedra') {
    computerScore++;
    return 'Perdiste! Piedra rompe Tijeras.';
  }
  if(playerSelect === 'Tijeras' && computerSelect === 'Papel') {
    playerScore++;
    return 'Ganaste!! Tijeras cortan Papel.';
  }
}


function game () {

  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerPlay(prompt('Piedra, Papel o Tijeras ?')),computerPlay()));
    console.log(`Computer: ${computerScore}`);
    console.log(`Player: ${playerScore}`);
  }
}

game();