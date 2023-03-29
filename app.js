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
