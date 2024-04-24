// Rv-20240424 Hard
function resolvePromise(promise2, x, resolve, reject) {
	if (x === promise2) {
		reject(new TypeError("cycle chain detected"));
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
	} else if ((x !== null && typeof x === "object") || typeof x === "function") {
		try {
			const then = x.then;
			// 使用 x 作为上下文调用 then 方法
			if (typeof then === "function") {
				then.call(
					(x,
					(y) => {
						if (called) return;
						called = true;
						resolve(y);
					},
					(reason) => {
						if (called) return;
						called = true;
						reject(reason);
					})
				);
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
}
