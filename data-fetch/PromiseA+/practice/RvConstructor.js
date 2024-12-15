// Rv4-20240612 Hard
class MyPromise{
	constructor(executor){
		this.status = "pending";
		this.value=undefined;
		this.reason=undefined;
		this.onFulfilledCallback=[];
		this.onRejectedCallback=[];
		const resolve = (value)=>{
			if(this.status=="pending"){
				this.status = "resolved";
				this.value=value;
				this.onFulfilledCallback.forEach((cb)=>cb());
			}
		}
		const reject = (reason)=>{
			if(this.status=="pending"){
				this.status = "rejected";
				this.reason=reason;
				this.onRejectedCallback.forEach((cb)=>cb());
			}
		}
		try{
			executor(resolve,reject);
		}catch(e){
			reject(e);
		}
	}
	// then
}
// Rv3-20240429 Hard
/* class MyPromise {
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
	then(onResolved, onRejected) {
		// default
		typeof onResolved === "function" ? onResolved : (value) => value;
		typeof onRejected === "function"
			? onRejected
			: (reason) => {
					throw reason;
			  };
		// return promise2
		const promise2 = new MyPromise((resolve, reject) => {
			if (this.status === "resolved") {
				setTimeout(() => {
					try {
						const x = onResolved(this.value);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				});
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
							const x = onResolved(this.value);
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
				return MyPromise.resolve(cb()).then(() => value);
			},
			(reason) => {
				return MyPromise.resolve(cb()).then(() => {
					throw reason;
				});
			}
		);
	}
}

function resolvePromise(promise2, x, resolve, reject) {
	if (x === promise2) {
		return new TypeError("chaining cycle!");
	}
	let called = false;
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
	if ((x !== null && typeof x === "object") || typeof x === "function") {
		try {
			const then = x.then;
			if (typeof then === "function") {
				then.call(x, (y) => {
					if (called) return;
					called = true;
					resolvePromise(promise2, y, resolve, reject);
				});
			} else {
				resolve(x);
			}
		} catch (e) {
			if (called) return;
			called = true;
			reject(e);
		}
	} else {
		resolve(x);
	}
} */

// Rv2-20240428 Hard
/* class MyPromise {
	constructor(executor) {
		this.status = "pending";
		this.value = undefined;
		this.reason = undefined;
		this.onFulfilledCallbacks = [];
		this.onRejectedCallbacks = [];
		const resolve = (value) => {
			if (this.status === "pending") {
				this.status = "resolved";
				this.value = value;
				this.onFulfilledCallbacks.forEach((cb) => cb());
			}
		};
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
} */
// Rv1-20240424 Hard
// class MyPromise {
// 	constructor(executor) {
// 		this.status = "pending";
// 		this.value = undefined;
// 		this.reason = undefined;
// 		this.onFulfilledCallbacks = [];
// 		this.onRejectedCallbacks = [];
// 		const resolve = (value) => {
// 			if (this.status == "pending") {
// 				this.status = "resolved";
// 				this.value = value;
// 				this.onFulfilledCallbacks.forEach((cb) => cb());
// 			}
// 		};
// 		const reject = (reason) => {
// 			if (this.status == "pending") {
// 				this.status = "rejected";
// 				this.reason = reason;
// 				this.onRejectedCallbacks.forEach((cb) => cb());
// 			}
// 		};
// 		try {
// 			executor(resolve, reject);
// 		} catch (e) {
// 			reject(e);
// 		}
// 	}
// }

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
