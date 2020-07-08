// const numGuess = document.getElementById('num-guess');
const results = document.getElementById('results');
const tries = document.getElementById('tries-left');

// num of tries
let triesRemaining = 4;


export function compareNumbers(guess, correctNumber) {
    
    if (guess > correctNumber) {
        results.textContent = `Too high! Try again!`;
        triesRemaining--;
    } else if (guess < correctNumber) {
        triesRemaining--;
        results.textContent = `Too low! ${triesRemaining} tries left!`;
    } else {
        results.textContent = `You got it! You win!`;
    }
    tries.textContent = triesRemaining;
    // console.log(correctNumber, triesRemaining, guess);
}
