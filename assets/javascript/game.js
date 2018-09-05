// create variables for the various ids in the HTML file

var wins = document.getElementById('wins');
var losses = document.getElementById('losses')
var guesses = document.getElementById('guesses')
var inputs = document.getElementById('inputs')

// create an array of the different letters available
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// create a score tracker and set values
var scoreWins = 0;
var scoreLosses = 0;
var scoreGuessesLeft = 9;
var guessedLetters = [];



// lets the computer select a random letter from the available choices
var computerGuess = letters[Math.floor(Math.random()*letters.length)];


// functions needed for when the reset function is called upon

// function updateScoreGuessesLeft () {
//     guesses.innerHTML = "Guesses Left: " + scoreGuessesLeft;
// }

// function updateGuessedLetters () {
//     inputs.innerHTML = "Your Guesses: " + guessedLetters;
// }


// function updateComputerGuess () {
//     computerGuess = letters[Math.floor(Math.random()*letters.length)];
// }


// var reset = function () {
//     scoreGuessesLeft = 9;
//     guessedLetters = [];
//     updateScoreGuessesLeft();
//     updateGuessedLetters();
//     updateComputerGuess();
// }


// condensed version of previous functions

function reset () {
    scoreGuessesLeft = 9;
    guessedLetters = [];
    guesses.innerHTML = "Guesses Left: " + scoreGuessesLeft;
    inputs.innerHTML = "Your Guesses: " + guessedLetters;
    computerGuess = letters[Math.floor(Math.random()*letters.length)];
}




// create function to be executed based on the onkeyup event
document.onkeyup = function(event) {
    var userGuess = event.key;
   
    console.log(userGuess)
    console.log(computerGuess)

    if (userGuess == computerGuess) {
        scoreWins++;
        reset();
        alert('Congrats! You\'ve guessed correctly!')
        
    } else {
        scoreGuessesLeft--;
        guessedLetters.push(userGuess);
    } 

    if (scoreGuessesLeft == 0){
        scoreLosses++;
        reset();
        alert('Try Again!')
    }

// update score tracker
    wins.textContent = 'Wins: ' + scoreWins;
    losses.textContent = 'Losses: ' + scoreLosses;
    guesses.textContent = 'Guesses Left: ' + scoreGuessesLeft;
    inputs.textContent = 'Your Guesses: ' + guessedLetters.join(', ');

}

