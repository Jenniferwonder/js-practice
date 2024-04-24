// Rv-20240424 Hard
class MyPromise {
	constructor(executor) {
		this.status = "pending";
		this.value = undefined;
		this.reason = undefined;
		this.onFulfilledCallbacks = [];
		this.onRejectedCallbacks = [];
		const resolve = (value) => {
			if (this.status == "pending") {
				this.status = "resolved";
				this.value = value;
				this.onFulfilledCallbacks.forEach((cb) => cb());
			}
		};
		const reject = (reason) => {
			if (this.status == "pending") {
				this.status = "rejected";
				this.reason = reason;
				this.onRejectedCallbacks.forEach((cb) => cb());
			}
		};
		try {
			executor(resolve, reject);
		} catch (e) {
			reject(e);
		}
	}
}

// class MyPromise {
// 	constructor(executor) {
// 		this.status = "pending";
// 		this.value = undefined;
// 		this.reason = undefined;
// 		this.onFulfilledCallback = [];
// 		this.onRejectedReCallback = [];
// 		const resolve = (value) => {
// 			if (this.status === "pending") {
// 				this.status = "resolved";
// 				this.value = value;
// 				this.onFulfilledCallback.forEach((cb) => cb());
// 			}
// 		};
// 		const reject = (reason) => {
// 			if (this.status === "pending") {
// 				this.status = "rejected";
// 				this.reason = reason;
// 				this.onRejectedCallback.forEach((cb) => cb());
// 			}
// 		};
// 		try {
// 			executor(resolve, reject);
// 		} catch (e) {
// 			reject(e);
// 		}
// 	}
// }
