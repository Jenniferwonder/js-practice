// Needed elements
const btnStart = document.querySelector(".btn-start");
const btnPause = document.querySelector(".btn-pause");
const btnReset = document.querySelector(".btn-reset");
const timeEl = document.querySelector(".timeBox");
const message = document.querySelector(".message");

class Stopwatch {
	//Initial Data
	time = 0;
	msec = 0;
	sec = 0;
	min = 0;
	started = 0;
	paused = 0;
	interval = null;
	// startTime = 0;
	// pauseTime = 0;
	// endTime = 0;
	// timePassed = 0;
	// Event Listeners
	constructor() {
		// btnStart.addEventListener("click", (e) => {
		// 	e.preventDefault;
		// 	this.start;
		// });
		btnStart.addEventListener("click", this.start.bind(this));
		btnPause.addEventListener("click", this.pause.bind(this));
		btnReset.addEventListener("click", this.reset.bind(this));
	}
	// constructor(timeEl, btnStart, btnPause, btnReset, callbacks) {
	// 	this.timeEl = timeEl;
	// 	this.btnStart = btnStart;
	// 	this.btnPause = btnPause;
	// 	this.btnReset = btnReset;
	// 	this.btnStart.addEventListener("click", this.start);
	// 	// btnStop.addEventListener("click", stop);
	// 	this.btnPause.addEventListener("click", this.pause);
	// 	this.btnReset.addEventListener("click", this.reset);
	// }
	// Tick
	tick = () => {
		this.time += 10;
		// msec = time % 6000000;
		this.msec = String(Math.floor(this.time / 10) % 100).padStart(2, 0);
		// console.log(msec);
		this.sec = String(Math.floor((this.time / 1000) % 60)).padStart(2, 0);
		this.min = String(Math.floor(this.time / 1000 / 60)).padStart(2, 0);
		// In each call, print the remaining time to UI
		timeEl.textContent = `${this.min}:${this.sec}:${this.msec}`;
	};
	// Start the watch
	start = () => {
		if (!this.started && !this.paused) {
			// startTime = new Date().getTime();
			this.interval = setInterval(this.tick, 10);
			this.started = true;
			message.textContent = "The watch starts now.";
			// console.log("The watch this.started now.");
		} else if (!this.started && this.paused) {
			this.interval = setInterval(this.tick, 10);
			this.started = true;
			message.textContent = "The watch restarts now.";
			// console.log("The watch this.restarted now.");
		} else {
			message.textContent = "The watch has already started.";
			// console.log("The watch has already this.started.");
		}
	};
	// Pause the watch
	pause = () => {
		if (!this.started && !this.paused) {
			message.textContent = "The watch has not yet started.";
			// console.log("The watch has not yet this.started.");
		} else if (!this.started && this.paused) {
			// clearInterval(this.interval);
			message.textContent = "The watch has already paused.";
			// console.log("The watch has already this.paused.");
		} else {
			this.paused = true;
			this.started = false;
			// pauseTime = new Date().getTime();
			// timePassed = (pauseTime - startTime) / 1000;
			clearInterval(this.interval);
			this.interval = null;
			message.textContent = "The watch pauses now.";
			// console.log("The watch this.paused now.");
			// console.log(`Time passed: ${timePassed} seconds`);
		}
	};
	// Reset the watch
	reset = () => {
		this.pause();
		this.time = 0;
		timeEl.textContent = "00:00:00";
		message.textContent = "";
		this.started = 0;
		this.paused = 0;
		// this.startTime = 0;
		// this.pauseTime = 0;
		// this.endTime = 0;
		// this.timePassed = 0;
		message.textContent = "The watch has been reset.";
		// console.log("The watch has been reset.");
	};
}

// const sw = new Stopwatch(timeEl, btnStart, btnPause, btnReset, {
//   btnStart.addEventListener("click", this.start);
//   // btnStop.addEventListener("click", stop);
//   btnPause.addEventListener("click", this.pause);
//   btnReset.addEventListener("click", this.reset);
// });
const sw = new Stopwatch();
