// Needed elements
// const startBtn =
// const pauseBtn =
// const stopBtn =
// const resetBtn =

class stopWatch {
	//Initial Data
	// startTime, pauseTime, stopTime, timePassed;
	started = false;
	paused = false;
	// Start the watch
	start() {
		if (!this.started) {
			startTime = new Date().getTime;
			started = true;
			console.log("The watch started now.");
		} else {
			console.log("The watch has already started.");
		}
	}
	// Pause the watch
	pause() {
		if (!this.started) {
			console.log("The watch has not yet started.");
		} else {
			pauseTime = new Date().getTime;
			timePassed = pauseTime - startTime;
			paused = true;
			started = false;
			console.log("The watch paused now.");
		}
	}
	// Stop the watch
	stop() {
		if (!this.started) {
			console.log("The watch has not yet started.");
		} else if (this.paused) {
			pauseTime = new Date().getTime;
		}
	}
	// Reset the watch
	reset() {}
}
// Event Listeners
