/*
function gameStart(playerSelection, computerSelection)
if playerSelection === computerSelection
    gameDrawn
if playerSelection === rock and computerSelection === scissors
    player wins
if playerSelection === rock and computerSelection === papper
    computer wins
if playerSelection === scissors and computerSelection === papper
    playerwins
if playerSelection === scissors and computer selection === rock
    computer wins
if playerSelection == papper and computer selection == scissors
    computer wins
if playerSelection == papper and computer selection == rock
    player wins


*/
const output = document.querySelector("#result")
const play = document.querySelector('#play')

let result;
function computerPlay() {
    let computerOption = ['rock', 'papper', 'scissors'];
    let choice = Math.floor(Math.random() * computerOption.length);
    return computerOption[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = `${playerSelection} against ${computerSelection}. Game Drawn`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = `You Win. ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'papper'){
        result = `You Lose. ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'papper') {
        result = `You Win. ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = `You Lose. ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'papper' && computerSelection === 'scissors') {
        result = `You Lose. ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'papper' && computerSelection === 'rock') {
        result = `You Win. ${playerSelection} beats ${computerSelection}`;
    }
    return result;
}


    play.addEventListener('click', () => {
        const playerSelection = prompt("Enter either of 'Rock, Papper or Scissors': ").toLowerCase();
        const computerSelection = computerPlay();
        const game = `<h3>${playRound(playerSelection, computerSelection)}</h3>`;
        output.innerHTML = game;
    }) 
        
        
    

        
