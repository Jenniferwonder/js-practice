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
}
