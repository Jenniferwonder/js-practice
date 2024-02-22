const HiPromise = require("../HiPromise"); // 导入我们实现的HiPromise模块

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
