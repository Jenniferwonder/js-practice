let key = Math.floor(Math.random() * 100) + 1;
// let key = 3;

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let guessCount = 1;

function checkGuess() {
	const guess = Number(guessField.value);
	if (guessCount === 1) {
		guesses.textContent = `Previous guesses: `;
	}
	guesses.textContent += ` ${guess}`;
	if (guess === key) {
		lastResult.textContent = "Congratulations! You got it right!";
		lastResult.style.backgroundColor = "green";
		lowOrHi.textContent = "";
		setGameOver();
	} else if (guessCount === 10) {
		lastResult.textContent = "!!!Game over!!!";
		lastResult.style.backgroundColor = "red";
		lowOrHi.textContent = "";
		setGameOver();
	} else {
		lastResult.textContent = "Wrong!";
		lastResult.style.backgroundColor = "red";
		if (guess > key) {
			lowOrHi.textContent = "Last guess was too high!";
		} else if (guess < key) {
			lowOrHi.textContent = "Last guess was too low!";
		}
	}
	guessCount++;
	guessField.value = "";
	guessField.focus();
}

function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement("button");
	resetButton.textContent = "Start new game";
	document.body.appendChild(resetButton);
	resetButton.addEventListener("click", resetGame);
}

function resetGame() {
	guessCount = 1;
	guessField.disabled = false;
	guessSubmit.disabled = false;
	lastResult.textContent = "";
	lastResult.style.backgroundColor = "white";
	guesses.textContent = "";
	document.body.removeChild(resetButton);
	guessField.value = "";
	guessField.focus();
	key = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener("click", checkGuess);
