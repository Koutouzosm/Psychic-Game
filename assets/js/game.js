// Create all my variables for game logic

//wins (number)
var wins = 0;
console.log("this loaded");

//losses (number)
var losses = 0;

// guesses that are left (number)
var guessesLeft = 10;

//letters already guessed (array)
var lettersGuessed = [];

//computer choices bank (array of the alphebet)
var computerChoice = "abcdefghijklmnopqrstuvwxyz".split("");
var computerGuess = "";

//create all variables that reference specific parts of the page
var userWin = document.getElementById("userWin");
var userLoss = document.getElementById("userLoss");
var guessesLeft = document.getElementById("guessesLeft");
var guessedLetters = document.getElementById("guessedLetters");

//create a function to start/reset the game
function newGame() {
  //reset important game variables
  // How many guessesLeft back to 10
  guessesLeft = 10;
  // reset the lettersAlreadyGuessed array
  lettersGuessed = [];
  //write some info to the page indicating a new game has started
  //randomly choose computer guess
  var randomCompChoice = [Math.floor(Math.random() * computerChoice.length)];
  computerGuess = computerChoice[randomCompChoice];

  console.log(randomCompChoice);

  alert("New Game Starting! Good Luck!!!");
}

document.onkeyup = function (event) {
  var userGuess = event.key;
  console.log(event);
  //on every key press you want to push the user guess into the letters guessed array
  lettersGuessed.push(userGuess);

  //THIS IS YOUR WIN CONDITION
  // if userGuess === computerGuess...you win
if (userGuess === computerGuess) {
    // increase wins by 1
    wins++;
    // start a new game newGame()
  newGame();
    //you can update html here
  userWin.push("")
  }
  else {
    guessesLeft--;
  //you also want to decrement your guessesLeft variable
  userGuess.text = "guessesLeft";
  }

  //THIS IS YOUR LOSS CONDITION
  //since you are decrementing the guessesLeft on every keypress your loss condition is here
  if (guessesLeft === 0) {
    //increment losses
    losses++;

    // start a new game newGame()
    newGame();

    //you can update html here
  
    userLoss.pusht("")
  }

}

//run new game function
newGame();

  //try your own way of adding html that makes sense to you. mess around with where you do it and see what happens. it will help you understand the game. console.log() everything you can.