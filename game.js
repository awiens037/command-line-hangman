// Require word.js
var Word = require("./word.js");

module.exports = {
    // Picks a random word from array, returns it as a Word object
    chooseWord: function () {
        var choices = ["Crusher", "Bacon", "Burritos", "Skywalker", "Starbuck"];
        var number = Math.floor(Math.random() * 5);
        var word = new Word(choices[number]);
        return word;
    }
};