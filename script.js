// 'use strict';
// let Winningnumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;
// const displaymessage = function (message) {
//   document.querySelector('.message').textContent;
// };
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = document.querySelector('.guess').value;
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔️ No number!';
//   } else if (guess == Winningnumber) {
//     document.querySelector('.message').textContent = 'you won  :-D !!!!';
//     document.querySelector('.number').textContent = Winningnumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//   }else if (highscore < score) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = score;
//     }
// } else if (Winningnumber !== guess) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = 'red';
//     }
// document.querySelector('.again').addEventListener('click', function () {
//   Winningnumber = Math.trunc(Math.random() * 20) + 1;
//   score = 20;
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('body').style.backgroundColor = 'black';
//   document.querySelector('.guess').value = '';
// });
// actual code only copy no pasting any code here =====================================================================================================================
let Winningnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  // for testing ====================================================================================

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess == Winningnumber) {
    document.querySelector('.message').textContent = 'you won  :-D !!!!';
    document.querySelector('.number').textContent = Winningnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
  //   // when guess is high then the winning number=========================================
  else if (Winningnumber < guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To High :-O !!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
    //   // when guess is low then the winning number=========================================
  } else if (Winningnumber > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To low :-o !!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  Winningnumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.guess').value = '';
});
