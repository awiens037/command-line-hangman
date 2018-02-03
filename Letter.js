// Constructor function for letter object
function Letter(letter) {
    this.letter = letter;
    this.shown = '_';
    // Returns the character to be printed to the console
    this.printLetter = function () {
        return this.shown;
    }
    // Changes the temporary character being shown to the actual letter
    this.changeShown = function () {
        this.shown = letter;
    }
}

module.exports = Letter;