const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDebounceText = debounce(() => {
	incrementCount(debounceText);
});
const updateThrottleText = throttle(() => {
	incrementCount(throttleText);
});

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

document.addEventListener("mousemove", (e) => {
	incrementCount(defaultText);
	updateDebounceText();
	updateThrottleText();
});
function incrementCount(element) {
	element.textContent = (parseInt(element.textContent) || 0) + 1;
}

// function throttleBasic(cb, delay = 1000) {
// 	let shouldWait = false;

// 	return (...args) => {
// 		if (shouldWait) {
// 			return;
// 		}
// 		cb(...args);
// 		shouldWait = true;

// 		setTimeout(() => {
// 			shouldWait = false;
// 		}, delay);
// 	};
// }
