// Needed elements
const btnStart = document.querySelector(".btn-start");
const btnPause = document.querySelector(".btn-pause");
const btnReset = document.querySelector(".btn-reset");
const timeEl = document.querySelector(".timeBox");

//Initial Data
let msec = 0;
let sec = 0;
let min = 0;
let interval = null;
btnStart.disabled = false;
btnPause.disabled = false;
let startTime = 0;
let pauseTime = 0;
let restartTime = 0;
let restarted = false;
// endTime = 0;
let timePassed = 0;
// Event Listeners
btnStart.addEventListener("click", start);
btnPause.addEventListener("click", pause);
btnReset.addEventListener("click", reset);
// Timer
function timer() {
	if (btnStart.disabled && !btnPause.disabled && !restarted) {
		timePassed = new Date().getTime() - startTime;
		console.log(timePassed);
	}
	// else if (!btnStart.disabled && btnPause.disabled) {
	// 	timePassed = (pauseTime - startTime) / 1000;
	// }
	// if (!interval) {
	// 	timePassed = 0;
	else if (btnStart.disabled && !btnPause.disabled && restarted) {
		timePassed = new Date().getTime() - restartTime + pauseTime - startTime;
		// timePassed += 10;
		console.log(timePassed / 1000);
	}
	msec = String(Math.floor((timePassed / 10) % 100)).padStart(2, 0);
	sec = String(Math.floor((timePassed / 1000) % 60)).padStart(2, 0);
	min = String(Math.floor(timePassed / 60000)).padStart(2, 0);
	// In each call, print the remaining time to UI
	timeEl.textContent = `${min}:${sec}:${msec}`;
}
// Start the watch
function start() {
	if (!btnStart.disabled && !btnPause.disabled) {
		startTime = new Date().getTime();
		interval = setInterval(timer, 10);
		btnStart.disabled = true;
		console.log("The watch starts now.");
	} else if (!btnStart.disabled && btnPause.disabled) {
		restartTime = new Date().getTime();
		interval = setInterval(timer, 10);
		btnStart.disabled = true;
		btnPause.disabled = false;
		restarted = true;
		console.log("The watch restarts now.");
	} else {
		console.log("The watch has already started.");
		return;
	}
}
// Pause the watch
function pause() {
	// if (!btnStart.disabled && !btnPause.disabled) {
	// 	console.log("The watch has not yet btnStart.disabled.");
	// } else if (!btnStart.disabled && btnPause.disabled) {
	if (interval) {
		clearInterval(interval);
	}
	if (btnPause.disabled || !interval) {
		return;
	}
	// console.log("The watch has already btnPause.disabled.");
	// } else {
	// clearInterval(interval);
	btnPause.disabled = true;
	btnStart.disabled = false;
	pauseTime = new Date().getTime();
	timePassed = (pauseTime - startTime) / 1000;
	// console.log("The watch btnPause.disabled now.");
	console.log(`Paused. Time passed: ${timePassed} seconds`);
}

// Reset the watch
function reset() {
	pause();
	interval = null;
	btnStart.disabled = false;
	btnPause.disabled = false;
	restarted = false;
	startTime = 0;
	pauseTime = 0;
	endTime = 0;
	timePassed = 0;
	time = 0;
	min = 0;
	sec = 0;
	msec = 0;
	timeEl.textContent = "00:00:00";
	console.log("The watch has been reset.");
}
