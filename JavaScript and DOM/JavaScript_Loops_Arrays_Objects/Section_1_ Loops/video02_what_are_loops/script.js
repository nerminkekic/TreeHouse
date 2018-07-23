var upper = 3;
var random = randomNumber(upper);
var guess;
var attempts = 0;
var correctGuess = false;
console.log(random);

function randomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

do {
  guess = prompt("I am thinking of a number between 1 and 10, what is it?");
  attempts += 1;

  if (parseInt(guess) === random) {
    correctGuess = true;
  }
} while (!correctGuess)
document.write("<h1>It took you " + attempts + " to guess the number!</h1>");