// Create all my variables for game logic

//wins (number)
var wins = 0;

//losses (number)
var losses = 0;

// guesses that are left (number)
var guessesLeft = 10;

//letters already guessed (array)
var letterGuessed = [];

//computer choice (string)
var computerChoice = "";

//computer choices bank (array of the alphebet)
var computerChoicesBank = "abcdefghijklmnopqrstuvwxyz".split("");


//create all variables that reference specific parts of the page
var userGuess
var computerGuess
var guessesLeft
var guessedLetters



//$wins (document.getElementById)
document.getElementById("userWin");

// $losses
document.getElementById("computerWin");

// $guessesleft
document.getElementById("guessesLeft")

// $userguess
document.getElementById("guessedLetters")

//create a function to start/reset the game

fucntion newGame() {
  //reset important game variables

    // assign computerGuess a new random letter

    // reset the lettersAlreadyGuessed array
    guessedLetters.length = 0;

    // How many guessesLeft back to 10

    //write some info to the page indicating a new game has started
}

document.onkeyup = function(event)
  
  //run our logic to check out guess
  var computerGuess = computerchoices[Math.floor(math.random() * computerChoicesBank.length)];
  // capture user's guess using event.key
  document.onkeyup

  // if userGuess === computerGuess...you win
    // increase wins by 1
    // start a new game newGame()
  // else
    // decrement guessesLeft by 1 (guessesLeft--
  
    // if guessesLeft ===0 .... you lose
      // increase losses by 1
      // start a new game newGame()

    // add lettter guessed to lettersAlreadyGuessedarray (using .push)

    // display information to the page
      // write userGuess, computerGuess, guessesLeft, and lettersAlreadyGuessed to the page in thier respective locations (which you created references to above)

}

// run newGame() to start game for the first time 