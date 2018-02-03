// Require and link other js pages
var fs = require("fs");
var inquirer = require("inquirer");
var game = require("./game.js");
var Letter = require("./Letter.js");

// Variables
var word = game.chooseWord();
var selectedWord = word.word;
var letters = [];

// Forloop, pushes into letters array
// charAt(i) method returns character at i 
for (var i = 0; i < selectedWord.length; i++) {
    letters.push(new Letter(selectedWord.charAt(i)));
}
var guessesLeft = 7;
guess();

// Function guess gets called (If word has not been guessed, and if there are guesses remaining
function guess() {
    showWord();
    inquirer.prompt([
        { 
            name: "letter", 
            message: "Choose a letter:" 
        }
    ]).then(function(answers) {
        if (word.checkLetter(answers.letter, letters) === true) {
            console.log("Nailed It!");

        }
        else {
            guessesLeft--;
            if (guessesLeft > 0) {
                console.log("WRONG! Only " + guessesLeft + " guesses left.");
            }
            else {
                console.log("You Lose...Boo! Game over!");
            }
        }
        if (word.checkSolved(letters) == false) {
            if (guessesLeft > 0) {
                guess();
            }
        }
        else {
            showWord();
            console.log("WINNER! YOU ARE THE GREATEST EVER!");
        }
    });
}

// ShowWord function
function showWord() {
    var displayedWord = "";
    for (var i = 0; i < letters.length; i++) {
        displayedWord += letters[i].printLetter();
        displayedWord += " ";
    }
    console.log(displayedWord);
}