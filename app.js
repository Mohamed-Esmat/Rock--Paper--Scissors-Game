// Ignore this file [just some comments for myself😅]

// const startGameBtn = document.getElementById('start-game-btn');

// Function Declaration/Function Statement
// function startGame() {
//   console.log('Function Declaration/Function Statement!!');
// }

// start();
// Anonymous function/Function Expression
// const start = function() {// So here we are using the function as an expression instead of as a declaration
//   console.log('Game is starting....');
// };

// const person = {
//   greet: function greet() {
//     console.log('Hi there');
//   },
// };

// person.greet();

// console.dir(start);

// startGame(); Direct execution
// startGameBtn.addEventListener('click', start); // Indirect execution

// startGameBtn.addEventListener('click', function startGame() {
//   console.log('Game is starting....');
// }); // Why do we use Anonymous Functions?? Because maybe, we have no other place in our entire code where we ever need that function again. But there might be some memory leak considerations you want to take into account. But if you know you only add an event listener once here, then this doesn't really matter.

// You pass a function, a reference to a function to another function, which is effectively what we're doing here

// not related to game

// REST Parameters [REST Operator]
const sumUp = (...numbers) => {
  // Instead of pulling elements out of an array,  here it takes all arguments this function gets and that might be as many as you want and it merges them into an array, so it builds an array here inside of the function

  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  return sum;
};



const subtract = function (resultHandler, ...numbers) {
  let sub = 0;
  for (const num of numbers) {
    sub -= num;
  }
  // return sub;
  resultHandler(sub);
};

const subtract2 = function () {
  let sub = 0;
  for (const num of arguments) {
    // don't use that
    sub -= num;
  }
  return sub;
};

const sumUp2 = (resultHandler, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  resultHandler(sum);
};

// const showResult = (theSum) => {
//   console.log('The result after adding all numbers is: ' + theSum);
// }

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let result = 0;
  for (const number of numbers) {
    if (operation === 'ADD') {
      result += validateNumber(number);
    } else {
      result -= validateNumber(number);
    }
  }
  resultHandler(result);
};

const showResult = (messageText, result) => {
  console.log(`${messageText} ${result}`);
};

// const theSum = sumUp2(showSumResult, 2, 3, 4, 5, 6, 7);
// console.log(sumUp2(showSumResult, 2, 3, 4, 5, 6, 7));
// console.log(subtract2(showResult, 4, 6, 5, 9, 3, 2, 2, 4));
// console.log(theSub);

//bind(): we use it when we want to pass an argument to a function but not execute it.
console.log(combine(showResult.bind(this, 'the result after adding all numbers is: '), 'ADD', 4, 6, 5, 9, 3, 2, 2, 4));
console.log(combine(showResult.bind(this, 'the result after subtracting all numbers is: '), 'SUBTRACT', 4, 6, 5, 9, 3, 2, 2, 4));
