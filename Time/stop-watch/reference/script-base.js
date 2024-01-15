// Needed elements
const btnStart = document.querySelector(".btn-start");
const btnPause = document.querySelector(".btn-pause");
const btnReset = document.querySelector(".btn-reset");
const timeEl = document.querySelector(".timeBox");

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

let int = null;

btnStart.addEventListener("click", () => {
	if (int !== null) {
		clearInterval(int);
	}
	int = setInterval(displayTimer, 10);
});

btnPause.addEventListener("click", () => {
	clearInterval(int);
});

btnReset.addEventListener("click", () => {
	clearInterval(int);
	[milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
	timeEl.innerHTML = "00:00:00:000 ";
});

function displayTimer() {
	milliseconds += 10;
	if (milliseconds == 1000) {
		milliseconds = 0;
		seconds++;
		if (seconds == 60) {
			seconds = 0;
			minutes++;
			if (minutes == 60) {
				minutes = 0;
				hours++;
			}
		}
	}

	let h = hours < 10 ? "0" + hours : hours;
	let m = minutes < 10 ? "0" + minutes : minutes;
	let s = seconds < 10 ? "0" + seconds : seconds;
	let ms =
		milliseconds < 10
			? "00" + milliseconds
			: milliseconds < 100
			? "0" + milliseconds
			: milliseconds;

	timeEl.innerHTML = ` ${h}:${m}:${s}:${ms}`;
}
