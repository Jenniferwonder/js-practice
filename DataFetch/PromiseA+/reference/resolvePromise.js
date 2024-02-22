export function resolvePromise(promise2, x, resolve, reject) {
	// 1. 如果 promise2 和 x 相同，抛出 TypeError
	if (promise2 === x) {
		return reject(new TypeError("Chaining cycle detected for promise"));
	}

	// 标记是否已调用，防止多次调用
	let called = false;

	// 2. 如果 x 是 HYPromise 实例
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
		// 3. 如果 x 是对象或函数
		try {
			// 获取 x 的 then 方法
			const then = x.then;
			if (typeof then === "function") {
				// 如果 then 是函数
				// 使用 x 作为上下文调用 then 方法
				then.call(
					x,
					(y) => {
						// 成功回调
						if (called) return; // 如果已经调用过，直接返回
						called = true;
						// 递归处理 y
						resolvePromise(promise2, y, resolve, reject);
					},
					(reason) => {
						// 失败回调
						if (called) return; // 如果已经调用过，直接返回
						called = true;
						reject(reason);
					}
				);
			} else {
				// 如果 then 不是函数
				// 直接调用 resolve
				resolve(x);
			}
		} catch (error) {
			// 如果获取或调用 then 方法抛出异常
			if (called) return; // 如果已经调用过，直接返回
			called = true;
			reject(error);
		}
	} else {
		// 4. 如果 x 不是对象或函数
		// 直接调用 resolve
		resolve(x);
	}
}
