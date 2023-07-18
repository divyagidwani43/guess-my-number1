'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScoreIn = 0;
console.log(number)

const message = function (mess) {
    document.querySelector('.message').textContent = mess;
}
// use this function instead of document.querySelector('.message').textContent = '⛔ No number'
document.querySelector('.check').addEventListener(
    'click',
    function () {
        const guessValue = Number(document.querySelector('.guess').value);

        //no value
        if (!guessValue) {
            message('⛔ No number');
        }

        // not equal
        // instead of 2 blocks 1 block
        else if (guessValue !== number) {
            if (score > 0) {
                message(guessValue > number ? '📈 too high' : '📉 too low');
                // above was the only diff b/w both blocks
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                message('you lost the game ☹️');
            }
        }


        // equal
        else if (guessValue === number) {
            message('correct answer 🎉');
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = number;
            if (highScoreIn < score) {
                highScoreIn = score;
                document.querySelector('.highscore').textContent = highScoreIn;
            }
        }

        // safety
        else {
            message('error');
        }
    }
)

document.querySelector('.again').addEventListener(
    'click',
    function () {
        score = 20;
        number = Math.trunc(Math.random() * 20) + 1;
        console.log(number);
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
        message('start guessing...');

    }
)