const inputText = document.querySelector("input");
const debounceText = document.querySelector(".debounceText");
const defaultText = document.querySelector(".defaultText");
const throttleText = document.querySelector(".throttleText");
const updateDebounceText = debounce((text) => {
	debounceText.textContent = text;
}, 1000);
const updateThrottleText = throttle((text) => {
	throttleText.textContent = text;
}, 1000);

inputText.addEventListener("input", (e) => {
	defaultText.textContent = e.target.value;
	updateDebounceText(e.target.value);
	updateThrottleText(e.target.value);
});
// Rv5-20240424 Hard
function debounce(cb, delay = 1000) {
	let timeout;
	return (...args) => {
		clearInterval(timeout);
		timeout = setTimeout(() => {
			cb(...args);
		}, delay);
	};
}

function throttle(cb, delay) {
	let shouldWait = false;
	let waitingArgs;
	const timeoutFunc = () => {
		cb(...waitingArgs);
		setTimeout(timeoutFunc, delay);
	};
	return (...args) => {
		if (shouldWait) {
			waitingArgs = args;
		}
		cb(...args);
		let shouldWait = true;
		setTimeout(timeoutFunc, delay);
	};
}

// function debounce(cb, delay = 1000) {
// 	let timeout;
// 	return (...args) => {
// 		clearTimeout(timeout);
// 		timeout = setTimeout(() => {
// 			cb(...args);
// 		}, delay);
// 	};
// }
// function throttle(cb, delay = 1000) {
// 	let shouldWait = false;
// 	let waitingArgs;
// 	const timeoutFunc = () => {
// 		cb(...waitingArgs);
// 		setTimeout(timeoutFunc, delay);
// 	};
// 	return (...args) => {
// 		if (shouldWait) {
// 			waitingArgs = args;
// 		}
// 		cb(...args);
// 		shouldWait = true;
// 		setTimeout(timeoutFunc, delay);
// 	};
// }
// function debounce(cb, delay = 1000) {
// 	let timeout;
// 	return (...args) => {
// 		clearTimeout(timeout);
// 		timeout = setTimeout(() => {
// 			cb(...args);
// 		}, delay);
// 	};
// }
// function throttle(cb, delay = 1000) {
// 	let shouldWait = false;
// 	let waitingArgs;
// 	const timeoutFunc = () => {
// 		cb(...waitingArgs);
// 		setTimeout(timeoutFunc, delay);
// 	};
// 	return (...args) => {
// 		if (shouldWait) {
// 			waitingArgs = args;
// 		}
// 		cb(...args);
// 		shouldWait = true;
// 		setTimeout(timeoutFunc, delay);
// 	};
// }

// Rv4-20240418 Good
// function debounce(cb, delay = 1000) {
// 	let timeout;
// 	return (...args) => {
// 		clearTimeout(timeout);
// 		timeout = setTimeout(() => {
// 			cb(...args);
// 		}, delay);
// 	};
// }
// function throttle(cb, delay = 1000) {
// 	let shouldWait = false;
// 	let waitingArgs;
// 	const timeoutFunc = () => {
// 		cb(...waitingArgs);
// 		setTimeout(timeoutFunc, delay);
// 	};
// 	return (...args) => {
// 		if (shouldWait) {
// 			waitingArgs = args;
// 		}
// 		cb(...args);
// 		shouldWait = true;
// 		setTimeout(timeoutFunc, delay);
// 	};
// }
// Rv3-20240417 Good
// function debounce(cb, delay = 1000) {
// 	let timeout;
// 	return (...args) => {
// 		clearTimeout(timeout);
// 		timeout = setTimeout(() => {
// 			cb(...args);
// 		}, delay);
// 	};
// }
// function throttle(cb, delay = 1000) {
// 	let shouldWait = false;
// 	let waitingArgs;
// 	const timeoutFunc = () => {
// 		cb(...waitingArgs);
// 		setTimeout(timeoutFunc, delay);
// 	};
// 	return (...args) => {
// 		if (shouldWait) {
// 			waitingArgs = args;
// 		}
// 		cb(...args);
// 		shouldWait = true;
// 		setTimeout(timeoutFunc, delay);
// 	};
// }

// Rv2-20240416 Hard
// function debounce(cb, delay = 1000) {
// 	let timeout;
// 	return (...args) => {
// 		clearTimeout(timeout);
// 		timeout = setTimeout(() => {
// 			cb(...args);
// 		}, delay);
// 	};
// }
// function throttle(cb, delay = 1000) {
// 	let shouldWait = false;
// 	let waitingArgs;
// 	const timeoutFunc = () => {
// 		cb(...waitingArgs);
// 		setTimeout(timeoutFunc, delay);
// 	};
// 	return (...args) => {
// 		if (shouldWait) {
// 			waitingArgs = args;
// 			return;
// 		}
// 		cb(...args);
// 		shouldWait = true;
// 		setTimeout(timeoutFunc, delay);
// 	};
// }

// Rv1-20240409
// function debounce(cb, delay = 1000) {
// 	let timeout;
// 	return (...args) => {
// 		clearTimeout(timeout); // 时间不到再次触发须重新计时
// 		timeout = setTimeout(() => {
// 			cb(...args);
// 		}, delay);
// 	};
// }
// function throttle(cb, delay = 1000) {
// 	let shouldWait = false;
// 	let waitingArgs;
// 	const timeoutFunc = () => {
// 		// if (waitingArgs == null) {
// 		// 	shouldWait = false;
// 		// } else {
// 		cb(...waitingArgs);
// 		// waitingArgs = null;
// 		setTimeout(timeoutFunc, delay);
// 		// }
// 	};
// 	return (...args) => {
// 		if (shouldWait) {
// 			waitingArgs = args;
// 			return;
// 		}
// 		cb(...args);
// 		shouldWait = true;
// 		setTimeout(timeoutFunc, delay);
// 	};
// }

/* function debounce(cb, delay = 1000) {
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
		cb(...waitingArgs);
		setTimeout(timeoutFunc, delay);
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
} */
