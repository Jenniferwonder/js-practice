// Needed elements
// const timeBox = document.querySelector(".timeBox");
const btnStart = document.querySelector(".btn-start");
const btnPause = document.querySelector(".btn-pause");
const btnReset = document.querySelector(".btn-reset");
const btnLap = document.querySelector(".btn-lap");
const timeEl = document.querySelector(".timeBox");
const recBox = document.querySelector(".recordBox");

//Initial Data
let time = 0;
let msec = 0;
let sec = 0;
let min = 0;
let count = 0;
let interval = null;
let record = "00:00:00";

// Event Listeners
btnStart.addEventListener("click", start);
btnPause.addEventListener("click", pause);
btnReset.addEventListener("click", reset);
btnLap.addEventListener("click", lap);

// Update the Timer
function tick() {
	time += 10;
	msec = String(Math.floor(time / 10) % 100).padStart(2, 0);
	sec = String(Math.floor((time / 1000) % 60)).padStart(2, 0);
	min = String(Math.floor(time / 1000 / 60)).padStart(2, 0);
	// In each call, print the remaining time to UI
	timeEl.textContent = `${min}:${sec}:${msec}`;
}

// Start the watch
function start() {
	if (interval) {
		return;
	}
	interval = setInterval(tick, 10);
	btnStart.classList.add("hidden");
	btnPause.classList.remove("hidden");
	btnReset.classList.remove("hidden");
	btnLap.classList.remove("hidden");
}
// Pause the watch
function pause() {
	if (interval) {
		clearInterval(interval);
		interval = null;
		btnStart.classList.remove("hidden");
		btnPause.classList.add("hidden");
	}
}
// Record the time
function lap() {
	// pause();
	count++;
	record = timeEl.textContent;
	const recEl = document.createElement("li");
	recBox.appendChild(recEl);
	recEl.classList.add("record");
	recEl.textContent = `#${count} ${record}`;
	// let rec = document.createElement("p");
	// rec.textContent = timeEl.textContent;
	// timeEl.append(rec);
	// start();
}
// Reset the watch
function reset() {
	pause();
	count = 0;
	time = 0;
	interval = null;
	recBox.innerHTML = "";
	timeEl.textContent = "00:00:00";
	// recEl.textContent = "";
	btnStart.classList.remove("hidden");
	btnPause.classList.add("hidden");
	btnReset.classList.add("hidden");
	btnLap.classList.add("hidden");
}
reset();
