//variables-posible words array
var words = ["labrador", "greatdane", "pug", "goldenretriever", "boxer"]
//other variables used in functions
var randomWord = "";
var wordLetters = []
var blanks = 0;
var correct = [];
var wrongGuess = [];

var wins = 0;
var losses = 0;
var remainingGuesses = 9;

//Game Functions
function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    wordLetters = randomWord.split("");
    blanks = wordLetters.length;

    for (var i = 0; i < blanks; i++) {
        correct.push("_");
    }

    document.getElementById("currentword").innerHTML = " " + correct.join(" ");

    console.log(randomWord);
    console.log(wordLetters)
    console.log(blanks)
    console.log(correct)
}
//to start game over
function reset() {
    remainingGuesses = 9;
    wrongGuess = [];
    correct = [];
    Game()
}
//check guessed letters
function checkLetters(letter) {
    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                correct[i] = letter;
            }
        }
    }

    else {
        wrongGuess.push(letter);
        remainingGuesses--;
    }
    console.log(correct);

}
//keeping track of wins and losses
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + remainingGuesses)

    if (wordLetters.toString() == correct.toString()){
        wins++;
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (remainingGuesses === 0) {
        losses++;
        reset()
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    document.getElementById("currentword").innerHTML = "  " + correct.join(" ");
    document.getElementById("remainingguesses").innerHTML = " " + remainingGuesses;

}

Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);

    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}