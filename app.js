import { compareNumbers } from './compareNumbers.js';
import { offButton } from './compareNumbers.js';

const myButton = document.getElementById('submit-button');
const correctNumber = Math.ceil(Math.random() * 20);

myButton.addEventListener('click', () => {
    const guess = document.getElementById('num-guess').value;
    compareNumbers(guess, correctNumber);
    offButton();

});

