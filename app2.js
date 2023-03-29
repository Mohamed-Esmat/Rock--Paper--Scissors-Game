const startGameBtn = document.getElementById('start-game-btn');
const SELECTION_ROCK = 'ROCK';
const SELECTION_PAPER = 'PAPER';
const SELECTION_SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = SELECTION_ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${SELECTION_ROCK}, ${SELECTION_PAPER} or ${SELECTION_SCISSORS}?`,
    ''
  ).toUpperCase();
  if (
    selection !== SELECTION_ROCK &&
    selection !== SELECTION_PAPER &&
    selection !== SELECTION_SCISSORS
  ) {
    alert(`Invalid choice we chose ${DEFAULT_USER_CHOICE} for you!`);
    // return DEFAULT_USER_CHOICE;
    return;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return SELECTION_ROCK;
  } else if (randomValue < 0.67) {
    return SELECTION_PAPER;
  } else {
    return SELECTION_SCISSORS;
  }
};


// Arrow Functions [Syntactical sugar]
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (pChoice === SELECTION_ROCK && cChoice === SELECTION_SCISSORS) ||
      (pChoice === SELECTION_SCISSORS && cChoice === SELECTION_PAPER) ||
      (pChoice === SELECTION_PAPER && cChoice === SELECTION_ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener('click', function startGame() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting....');
  const playerSelection = getPlayerChoice(); // might be undefined
  const computerSelection = getComputerChoice();

  let winner;
  if (playerSelection) {
    winner = getWinner(computerSelection, playerSelection);
  } else {
    winner = getWinner(computerSelection, playerSelection);
  }

  //Max work
  let message = `You picked ${
    playerSelection || DEFAULT_USER_CHOICE
  }, computer picked ${computerSelection}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + `had a draw.`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + ` win.`;
  } else {
    message + `lose.`;
  }
  alert(message);
  gameIsRunning = false;


});

const loadPerson = (pName) => ({ name: pName }); //Noteworthy: Extra parentheses are required around the object, since the curly braces would otherwise be interpreted as the function body delimiters (and hence a syntax error would be thrown here).
const loadPerson1 = (pName) => {
  return { name: pName };
};



/////////////////////////////////////////////////////////////
// Some comments
////////////////////////////////////////////////////////////

//Expression Function
// const getWinner = function (cChoice, pChoice) {
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (pChoice === SELECTION_ROCK && cChoice === SELECTION_SCISSORS) ||
//     (pChoice === SELECTION_SCISSORS && cChoice === SELECTION_PAPER) ||
//     (pChoice === SELECTION_PAPER && cChoice === SELECTION_ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }
// };


// const add = (a, b) => a + b;
// const add2 = function(a, b) {
//   return a + b
// }

// Me trying to output the alert for the user
// alert(
//   `You picked ${playerSelection}, Computer picked ${computerSelection}, therefore ${
//     winner === RESULT_DRAW ? "No winners it's a " : 'the winner is '
//   } ${
//     winner === RESULT_PLAYER_WINS
//       ? 'You'
//       : winner === RESULT_COMPUTER_WINS
//       ? 'The Computer'
//       : winner
//   }`
// );

