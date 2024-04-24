// Rv-20240424 Hard
class myPromise {
	constructor(executor) {
		this.status = "pending";
		this.value = undefined;
		this.reason = undefined;
		this.onFulfilledCallbacks = [];
		this.onRejectedCallbacks = [];

		// define resolve
		const resolve = (value) => {
			if (this.status === "pending") {
				this.status = "fulfilled";
				this.value = value;
				this.onFulfilledCallbacks.forEach((cb) => cb());
			}
		};
		// define reject
		const reject = (reason) => {
			if (this.status === "pending") {
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
	then(onFulfilled, onRejected) {
		// 2.2.1 Both onFulfilled and onRejected are optional args
		onFulfilled =
			typeof onFulfilled === "function" ? onFulfilled : (value) => value;
		onRejected =
			typeof onRejected === "function"
				? onFulfilled
				: (reason) => {
						throw reason;
				  };

		// 2.2.2 if onFulfilled is a function: it must be called after promise is fulfilled, with promise's value as its first arg
		const promise2 = new myPromise((resolve, reject) => {
			if (this.status === "fulfilled") {
				// execute asynchronously
				setTimeout(() => {
					try {
						// execute onFulfilled and get return value
						const x = onFulfilled(this.value);
						// use return value and promise2 to handle resolve and reject
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						// if executor catches error then change status to rejected
						reject(e);
					}
				});
				// 2.2.3 If onRejected is a function: ... similar to onResolved
			} else if (this.status === "rejected") {
				setTimeout(() => {
					try {
						const x = onRejected(this.reason);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				});
			} else if (this.status === "pending") {
				this.onFulfilledCallbacks.push(() => {
					setTimeout(() => {
						try {
							const x = onFulfilled(this.value);
							resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					});
				});
				this.onRejectedCallbacks.push(() => {
					setTimeout(() => {
						try {
							const x = onRejected(this.reason);
							resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					});
				});
			}
		});
		return promise2;
	}
	catch(onRejected) {
		return this.then(null, onRejected);
	}
	finally(cb) {
		return this.then(
			(value) => {
				return myPromise.resolve(cb()).then(() => value);
			},
			(reason) => {
				return myPromise.resolve(cb()).then(() => {
					throw reason;
				});
			}
		);
	}
	static resolve(value) {
		if (value instanceof MyPromise) {
			return value;
		}
		return new MyPromise((resolve, reject) => {
			resolve(reason);
		});
	}
	static reject(reason) {
		return new MyPromise((reject, reject) => {
			reject(reason);
		});
	}
	static all(promises) {}
	static race(promises) {}
	static allSettled(promises) {}
	static any(promises) {}
}

function resolvePromise(promise2, x, resolve, reject) {
	// Case 1
	if (promise2 === x) {
		return reject(new TypeError("Chaining cycle detected for promise"));
	}
	let called = false;
	// Case 2
	if (x instanceof MyPromise) {
		x.then(
			(y) => {
				resolvePromise(promise2, y, resolve, reject);
			},
			(reason) => {
				reject(reason);
			}
		);
	}
	// Case 3
	else if (x !== null && (typeof x === "object" || typeof x === "function")) {
		try {
			const then = x.then;
			// Case 3.1
			if (typeof then === "function") {
				then.call(
					x,
					(y) => {
						if (called) return;
						called = true;
						resolvePromise(promise2, y, resolve, reject);
					},
					(reason) => {
						if (called) return;
						called = true;
						reject(reason);
					}
				);
			}
			// Case 3.2
			else {
				resolve(x);
			}
			// Case 3.3
		} catch (e) {
			if (called) return;
			called = true;
			reject(e);
		}
	}
	// Case 4
	else {
		resolve(x);
	}
}
