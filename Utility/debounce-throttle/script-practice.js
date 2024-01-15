const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDebounceText = debounce((text) => {
	// incrementCount(debounceText);
	debounceText.textContent = text;
});
const updateThrottleText = throttle((text) => {
	// incrementCount(throttleText);
	throttleText.textContent = text;
});
// function incrementCount(element) {
// 	element.textContent = (parseInt(element.textContent) || 0) + 1;
// }
// document.addEventListener("mousemove", (e) => {
// 	incrementCount(defaultText);
// 	updateDebounceText();
// 	updateThrottleText();
// });
input.addEventListener("input", (e) => {
	defaultText.textContent = e.target.value;
	updateDebounceText(e.target.value);
	updateThrottleText(e.target.value);
});

//Without arguments
function debounce_noArgs(cb, delay = 1000) {
	let timeout;
	return () => {
		clearTimeout(timeout);
		timeout = setTimeout(cb, delay);
	};
}
function throttle_noArgs(cb, delay = 1000) {
	let shouldWait = false;
	return () => {
		if (shouldWait) {
			return;
		}
		cb();
		shouldWait = true;

		setTimeout(() => {
			shouldWait = false;
		}, delay);
	};
}
// With arguments
function debounce(cb, delay = 1000) {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			cb(...args);
		}, delay);
	};
}
function throttle(cb, delay = 1000) {
	let shouldWait = false;
	let waitingArgs;
	const timeoutFunc = () => {
		if (waitingArgs == null) {
			shouldWait = false;
		} else {
			cb(...waitingArgs);
			waitingArgs = null;
			setTimeout(timeoutFunc, delay);
		}
	};
	return (...args) => {
		if (shouldWait) {
			waitingArgs = args;
			return;
		}
		cb(...args);
		shouldWait = true;

		setTimeout(timeoutFunc, delay);
	};
}
