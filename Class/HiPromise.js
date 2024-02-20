// Done-20240220 Hard
// import { resolvePromise } from "./resolvePromise.js";
class HiPromise {
	constructor(executor) {
		// 初始化状态为pending
		this.status = "pending";
		// 初始化成功的值为undefined
		this.value = undefined;
		// 初始化失败的原因为undefined
		this.reason = undefined;
		// 初始化成功处理函数队列
		this.onFulfilledCallbacks = [];
		// 初始化失败处理函数队列
		this.onRejectedCallbacks = [];

		// 定义resolve方法
		const resolve = (value) => {
			// 只有在pending状态才能更改状态和值
			if (this.status === "pending") {
				this.status = "fulfilled";
				this.value = value;
				// 执行所有成功处理函数
				this.onFulfilledCallbacks.forEach((callback) => callback());
			}
		};

		// 定义reject方法
		const reject = (reason) => {
			// 只有在pending状态才能更改状态和原因
			if (this.status === "pending") {
				this.status = "rejected";
				this.reason = reason;
				// 执行所有失败处理函数
				this.onRejectedCallbacks.forEach((callback) => callback());
			}
		};

		// 立即执行执行器函数
		try {
			executor(resolve, reject);
		} catch (error) {
			// 如果执行器函数抛出异常，将Promise状态更改为rejected
			reject(error);
		}
	}

	// Implement `then` method
	then(onFulfilled, onRejected) {
		// 2.2.1. Both onFulfilled and onRejected are optional arguments
		// 如果不传处理函数，则使用默认处理函数
		onFulfilled =
			typeof onFulfilled === "function" ? onFulfilled : (value) => value;
		onRejected =
			typeof onRejected === "function"
				? onRejected
				: (reason) => {
						throw reason;
				  };

		// 创建一个新的Promise实例，称为promise2
		const promise2 = new HiPromise((resolve, reject) => {
			// 2.2.2 If onFulfilled is a function: it must be called after promise is fulfilled, with promise’s value as its first argument
			if (this.status === "fulfilled") {
				// 使用setTimeout保证异步调用
				// 2.2.4 onFulfilled or onRejected must not be called until the execution context stack contains only platform code
				setTimeout(() => {
					try {
						// 调用onFulfilled，并获取返回值
						const x = onFulfilled(this.value);
						// 使用返回值x和新的Promise实例promise2来处理resolve和reject
						resolvePromise(promise2, x, resolve, reject);
					} catch (error) {
						// 如果处理函数抛出异常，则将promise2状态更改为rejected
						reject(error);
					}
				});
				// 2.2.3 If onRejected is a function: it must be called after promise is rejected, with promise’s reason as its first argument
			} else if (this.status === "rejected") {
				// 使用setTimeout保证异步调用
				setTimeout(() => {
					try {
						// 2.2.5 onFulfilled and onRejected must be called as functions (i.e. with no this value)
						// 调用onRejected，并获取返回值
						const x = onRejected(this.reason);
						// 使用返回值x和新的Promise实例promise2来处理resolve和reject
						resolvePromise(promise2, x, resolve, reject);
					} catch (error) {
						// 如果处理函数抛出异常，则将promise2状态更改为rejected
						reject(error);
					}
				});
			} else if (this.status === "pending") {
				// 2.2.6 then may be called multiple times on the same promise.
				// 如果当前Promise状态仍为pending，将处理函数加入相应的队列中
				this.onFulfilledCallbacks.push(() => {
					// 使用setTimeout保证异步调用
					setTimeout(() => {
						try {
							// 调用onFulfilled，并获取返回值
							const x = onFulfilled(this.value);
							// 使用返回值x和新的Promise实例promise2来处理resolve和reject
							// 2.2.7.1 If either onFulfilled or onRejected returns a value x, run the Promise Resolution Procedure [[Resolve]](promise2, x)
							resolvePromise(promise2, x, resolve, reject);
						} catch (error) {
							// 如果处理函数抛出异常，则将promise2状态更改为rejected
							reject(error);
						}
					});
				});

				this.onRejectedCallbacks.push(() => {
					// 使用setTimeout保证异步调用
					setTimeout(() => {
						try {
							// 调用onRejected，并获取返回值
							const x = onRejected(this.reason);
							// 使用返回值x和新的Promise实例promise2来处理resolve和reject
							resolvePromise(promise2, x, resolve, reject);
						} catch (error) {
							// 如果处理函数抛出异常，则将promise2状态更改为rejected
							reject(error);
						}
					});
				});
			}
		});
		// 2.2.7 then must return a promise
		// 返回新的Promise实例，以便链式调用
		return promise2;
	}

	// Implement `catch` method
	catch(onRejected) {
		// 调用then方法，仅传入失败处理函数
		return this.then(null, onRejected);
	}
	// Implement `finally` method
	finally(callback) {
		// 调用then方法，传入两个相同的处理函数
		return this.then(
			(value) => {
				// 创建一个新的Promise实例，确保异步执行callback
				return HiPromise.resolve(callback()).then(() => value);
			},
			(reason) => {
				// 创建一个新的Promise实例，确保异步执行callback
				return HiPromise.resolve(callback()).then(() => {
					throw reason;
				});
			}
		);
	}
	// Implement `Promise.resolve`, `Promise.reject` method
	static resolve(value) {
		if (value instanceof HiPromise) {
			return value;
		}
		return new HiPromise((resolve, reject) => {
			resolve(value);
		});
	}

	static reject(reason) {
		return new HiPromise((resolve, reject) => {
			reject(reason);
		});
	}

	// Implement `Promise.all`, `Promise.race` method
	static all(promises) {
		return new HiPromise((resolve, reject) => {
			const result = [];
			let resolvedCount = 0;

			promises.forEach((promise, index) => {
				HiPromise.resolve(promise).then(
					(value) => {
						result[index] = value;
						resolvedCount++;
						if (resolvedCount === promises.length) {
							resolve(result);
						}
					},
					(reason) => {
						reject(reason);
					}
				);
			});
		});
	}

	static race(promises) {
		return new HiPromise((resolve, reject) => {
			promises.forEach((promise) => {
				HiPromise.resolve(promise).then(
					(value) => {
						resolve(value);
					},
					(reason) => {
						reject(reason);
					}
				);
			});
		});
	}
	// Implement `Promise.allSettled`, `Promise.any` method
	static allSettled(promises) {
		return new HiPromise((resolve, reject) => {
			const result = [];
			let settledCount = 0;

			promises.forEach((promise, index) => {
				HiPromise.resolve(promise).then(
					(value) => {
						result[index] = { status: "fulfilled", value };
						settledCount++;
						if (settledCount === promises.length) {
							resolve(result);
						}
					},
					(reason) => {
						result[index] = { status: "rejected", reason };
						settledCount++;
						if (settledCount === promises.length) {
							resolve(result);
						}
					}
				);
			});
		});
	}

	static any(promises) {
		return new HiPromise((resolve, reject) => {
			const errors = [];
			let rejectedCount = 0;

			promises.forEach((promise, index) => {
				HiPromise.resolve(promise).then(
					(value) => {
						resolve(value);
					},
					(reason) => {
						errors[index] = reason;
						rejectedCount++;
						if (rejectedCount === promises.length) {
							reject(new AggregateError(errors, "All promises were rejected"));
						}
					}
				);
			});
		});
	}
}

// Implement 2.3 Promise Resolution Procedure
function resolvePromise(promise2, x, resolve, reject) {
	// 2.3.1 If promise and x refer to the same object, reject promise with a TypeError as the reason.
	// 1. 如果 promise2 和 x 相同，抛出 TypeError
	if (promise2 === x) {
		return reject(new TypeError("Chaining cycle detected for promise"));
	}
	// 2.2.2.3 it must not be called more than once.
	// 标记是否已调用，防止多次调用
	let called = false;

	// 2.3.2 If x is a promise, adopt its state
	// 2. 如果 x 是 HiPromise 实例
	if (x instanceof HiPromise) {
		// 根据 x 的状态调用 resolve 或 reject
		x.then(
			(y) => {
				resolvePromise(promise2, y, resolve, reject);
			},
			(reason) => {
				reject(reason);
			}
		);
	} else if (x !== null && (typeof x === "object" || typeof x === "function")) {
		// 2.3.3 If x is an object or function
		// 3. 如果 x 是对象或函数
		try {
			// 2.3.3.1 Let then be x.then
			// 获取 x 的 then 方法
			const then = x.then;
			if (typeof then === "function") {
				// 2.3.3.3 If then is a function, call it with x as this, first argument resolvePromise, and second argument rejectPromise
				// 如果 then 是函数
				// 使用 x 作为上下文调用 then 方法
				then.call(
					x,
					// 2.3.3.3.1 If/when resolvePromise is called with a value y, run [[Resolve]](promise, y)
					(y) => {
						// 成功回调
						if (called) return; // 如果已经调用过，直接返回
						called = true;
						// 递归处理 y
						resolvePromise(promise2, y, resolve, reject);
					},
					// 2.3.3.3.2 If/when rejectPromise is called with a reason r, reject promise with r.
					(reason) => {
						// 失败回调
						if (called) return; // 如果已经调用过，直接返回
						called = true;
						reject(reason);
					}
				);
			} else {
				// 2.3.3.4 If then is not a function, fulfill promise with x
				// 如果 then 不是函数
				// 直接调用 resolve
				resolve(x);
			}
		} catch (error) {
			// 2.3.3.2 If retrieving the property x.then results in a thrown exception e, reject promise with e as the reason.
			// 如果获取或调用 then 方法抛出异常
			if (called) return; // 如果已经调用过，直接返回
			called = true;
			reject(error);
		}
	} else {
		// 2.3.4 If x is not an object or function, fulfill promise with x
		// 4. 如果 x 不是对象或函数
		// 直接调用 resolve
		resolve(x);
	}
}

/* // Test Core Promise usage
function makeRequest(location) {
	let p4 = new HiPromise((resolve, reject) => {
		console.log(`Making Request to ${location}`);
		if (location === "Google") {
			resolve("Google says Hi");
		} else {
			reject("We can only talk to Google");
		}
	});
	p4.then((ok) => {
		console.log(ok);
	})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			console.log("Final");
		});
	console.log(p4);
	// console.log(p4.PromiseState);
	return p4;
}
makeRequest("Googl");

// Test Static Promsie.resolve, Promise.reject
function createPromise() {
	let p5 = HiPromise.resolve("Success");
	let p6 = HiPromise.reject("Fail");
	console.log("myPromise5 :>> ", p5);
	console.log("myPromise6 :>> ", p6);
}
createPromise();

// Test Promise.all, Promise.race
let p7 = HiPromise.resolve("Success1");
let p8 = HiPromise.resolve("Success2");
let p9 = HiPromise.resolve("Success3");
HiPromise.all([p7, p8, p9]).then((res) =>
	res.forEach((res) => console.log(res))
);
HiPromise.race([p7, p8, p9]).then((res) => console.log(res));

// Test Promise.allSettled, Promise.any
let p10 = Promise.reject("Error1");
let p11 = Promise.reject("Error2");
Promise.allSettled([p7, p8, p9]).then((res) => console.log(res));
Promise.any([p7, p10, p11]).then((res) => console.log(res));
Promise.any([p10, p11]).then((res) => console.log(res));
Promise.any([p10, p11])
	.then((res) => console.log(res))
	.catch((err) => console.error("Rejected", err));
Promise.any([p10, p11])
	.then((res) => console.log(res))
	.catch((err) => {
		if (err instanceof AggregateError) {
			console.error("AggregateError occurred:");
			console.log(err.errors);
			err.errors.forEach((err, index) => {
				console.error(`Error ${index + 1}:`, err);
			});
		} else {
			console.error("Other error occurred:", err);
		}
	}); */

// 暴露适配器对象
module.exports = {
	resolved: HiPromise.resolve,
	rejected: HiPromise.reject,
	deferred() {
		const result = {};
		result.promise = new HiPromise((resolve, reject) => {
			result.resolve = resolve;
			result.reject = reject;
		});
		return result;
	},
};
