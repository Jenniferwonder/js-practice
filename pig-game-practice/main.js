// Select all elements
const player1 = document.querySelector(".player--1");
const player2 = document.querySelector(".player--2");

const score1 = document.getElementById("score--1");
const score2 = document.getElementById("score--2");
const current1 = document.getElementById("current--1");
const current2 = document.getElementById("current--2");

const dice = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Initialize the game
// Set player1 as the active player
// Set the dice back to 1
let scores, currentScore, activePlayer, playing;
const init = function () {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 1;
	playing = true;

	// Display the initial state
	score1.textContent = 0;
	score2.textContent = 0;
	current1.textContent = 0;
	current2.textContent = 0;

	// e.preventDefault();
	dice.classList.add("hidden");

	player1.classList.add("player--active");
	player2.classList.remove("player--active");
	player1.classList.remove("player--winner");
	player2.classList.remove("player--winner");
};
init();

// Switch Player
const switchPlayer = function () {
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	currentScore = 0;
	activePlayer = activePlayer === 1 ? 2 : 1;
	player1.classList.toggle("player--active");
	player2.classList.toggle("player--active");
};

// Roll dice
const rollDice = function () {
	if (playing) {
		const diceNum = Math.floor(Math.random() * 6 + 1);
		// Display the dice
		dice.src = `dice-${diceNum}.png`;
		dice.classList.remove("hidden");

		// Check rolled number 1
		if (diceNum !== 1) {
			// Add number to the current score
			currentScore += diceNum;
			console.log(`current: ${currentScore} `);
			document.getElementById(`current--${activePlayer}`).textContent =
				currentScore;
		} else {
			switchPlayer();
		}
	}
};

// Hold the current score
const holdScore = function () {
	if (playing) {
		scores[activePlayer - 1] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer - 1];
		document.getElementById(`current--${activePlayer}`).textContent = 0;

		// Check winner
		if (scores[activePlayer - 1] >= 100) {
			document.querySelector(".player--active").classList.add("player--winner");
			playing = false;
		}
	}
};

btnNew.addEventListener("click", init);
btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdScore);
