// Constructor function for Word object
function Word(word) {
    this.word = word;
    // Checks if letter guessed inside word, calls method to change the shown character if it is
    this.checkLetter = function (letter, letters) {
        var letterFound = false;
        for (var i = 0; i < this.word.length; i++) {
            if (this.word.charAt(i).toLowerCase() == letter.toLowerCase()) {
                letterFound = true;
                letters[i].changeShown();
            }
        }
        return letterFound;
    }
    //checks to see if the word has been solved by checking to see if all the shown characters are letters
    this.checkSolved = function (letters) {
        var solved = true;
        for (var i = 0; i < this.word.length; i++) {
            if (letters[i].shown === '_') {
                solved = false;
            }
        }
        return solved;
    }
}
module.exports = Word;