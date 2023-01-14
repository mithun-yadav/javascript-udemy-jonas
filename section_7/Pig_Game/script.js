'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// console.log(btnNew,btnRoll,btnHold);

//starting condition

let score, currentScore, activePlayer, playing;
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generatig a random dice roll

    const randdomNumber = Math.trunc(Math.random() * 6 + 1);

    //2. Display Dice
    diceEl.classList.remove('hidden');
    //diceEl.setAttribute("src",`dice-${randdomNumber}.png`)
    diceEl.src = `dice-${randdomNumber}.png`;

    //3. Check for rolled 1: if true, Switch to next player
    if (randdomNumber !== 1) {
      //Add dice to current score
      currentScore += randdomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score  to active player's score
    score[activePlayer] += currentScore;
    //score[1] = score[1]+ currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //2. Check if player's score is >= 100
    if (score[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

// btnNew.addEventListener("click",function(){
//     location.reload();
// })
