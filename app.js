// import functions and grab DOM elements
import compareNumbers from './compareNumbers.js';

const myButton = document.getElementById('submit-button');

const triesLeft = document.getElementById('number-of-tries-left');
const winSpan = document.getElementById('wins-span');
// const lossSpan = document.getElementById('losses-span');
const correctNumber = Math.ceil(Math.random() * 20);


let userGuesses = 0;
let userTriesLeft = 4;


myButton.addEventListener('click', () => {
    
    const userGuess = document.getElementById('user-guess').value;
    const userNumber = Number(userGuesses);

    // console.log(typeof userNumber);
    // makes the userGuess into a Number

    const result = compareNumbers(userGuess, correctNumber);
    userTriesLeft--;
    
    if (result === -1) {
        triesLeft.textContent = `${userNumber} Too Low!`;
        userTriesLeft--;
    } else if (result === 1) {
        userTriesLeft.textContent = `${userNumber} Too High!`;
    } else {
        winSpan.textContent = `${userNumber} You Win!`;
    }

});
