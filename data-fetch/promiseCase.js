// 🚀Create a Promise --------------------------------------------
// ✅ Test resolve(), reject() in new Promise()
/* let p1 = new Promise((resolve, reject) => {
	resolve("成功");
	reject("失败");
});
console.log("p1", p1);

let p2 = new Promise((resolve, reject) => {
	reject("失败");
	resolve("成功");
});
console.log("p2", p2);

let p3 = new Promise((resolve, reject) => {
	throw "报错";
});
console.log("p3", p3); */

// ✅new Promise() 内部代码会被同步执行: Blocking
/* let p21 = new Promise((resolve, reject) => {
	throw "Error21";
	// resolve("Success21");
});
let p22 = new Promise((resolve, reject) => {
	resolve("Success22");
	console.log(1);
	console.log(2);
	// reject("Error22");
}); */

// ✅Static Promise.resolve()/ Promise.reject() input and return value
/* function createPromise() {
	let p5 = Promise.resolve("Success");
	let p6 = Promise.reject("Fail");
	console.log("myPromise5 :>> ", p5);
	console.log("myPromise6 :>> ", p6);
}
createPromise(); */
let p7 = Promise.resolve("Success7");
// let p8 = Promise.resolve("Success8");
let p9 = Promise.resolve("Success9");
// let p20 = Promise.resolve("Success20"); // fulfilled Success20
// let p20 = Promise.resolve({ Obj: "Obj" }); // fulfilled Object
// let p20 = Promise.resolve(); // fulfilled undefined
// let p20 = Promise.resolve(Promise.resolve("Success20")); // fulfilled Success20
// let p20 = Promise.reject("Error20"); // rejected Error20
let p10 = Promise.reject("Error10");
// let p11 = Promise.reject("Error11");
let p11 = Promise.reject(new Error("Error11"));

// ✅Promise.resolve().then() 异步创建 Promise
// then 内代码会被异步执行：Non-blocking
/* const tick = Date.now();
const log = (v) => {
	console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);
}; */
/* let sum = 0;
let p20_plus = Promise.resolve().then((v) => {
	for (let i = 0; i < 1000000; i++) {
		sum += i;
	}
	log(sum);
	let p20_v_plus = "Success20";
	// log(p20_v_plus);
	console.log(p20_v_plus); // Success20
	return p20_v_plus;
});  */
// log(p20);
// log(p21);
// log(p22);
// log(p22_plus);
// log(sum);
// console.log("p20", p20);
// console.log("p20_plus", p20_plus); // fulfilled Success20
// console.log("p21", p21);
// console.log("p22", p22);
// console.log("p22_plus", p22_plus); // fulfilled Success22 Then
// console.log("sum", sum);
// console.log("sync");

// ❗异步执行顺序：process.nextTick 和 promise.then 都属于 microtask；setImmediate 属于 macrotask；
/* process.nextTick(() => {
	console.log("nextTick");
});
Promise.resolve().then(() => {
	console.log("then");
});
setImmediate(() => {
	console.log("setImmediate");
});
console.log("end"); */
// 运行结果： end > nextTick > then > setImmediate

// 🚀Consume Promise using Promise Chain ------------------------------
// ✅ Promise Chain using then(), catch(), finally()
/* function makeRequest(location) {
	let p4 = new Promise((resolve, reject) => {
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
	console.log("myPromise4 :>> ", p4);
	// console.log(p4.PromiseState);
	return p4;
}
makeRequest("Googl"); */

// ✅Test then & catch on fulfilled and rejected promises
/* let p7_then = p7.then((res) => {
	console.log("p7", p7);
	return `${res} Then`;
}); */
// let p8_then = p8.then(console.log("p8", p8));
// let p9_then = p9.then(console.log("p9", p9));
// let p10_then = p10.then(console.log("p10", p10));
/* p10
	.then(
		(res) => console.log("p10", res),
		(err) => console.error("then_p10", err)
	)
	.catch((err) => console.error("catch", err));*/

/* let p11_catch = p11
	.then((res) => console.log("p11", res)) // will not be executed
	.catch((err) => console.error("p11_error", err));

console.log(p11_catch); // Promise status = fulfilled; result = undefined */

/* ❗ catch 跟在 fulfilled Promise 后，仅会传递上一级 Promise value */
/* let p7_then_catch = p7_then.catch((e) => {
	return 3; // Will not be executed
});
console.log("p7_then_catch", p7_then_catch); // fulfilled Success7 Then
console.log(p7_then_catch === p7_then); // false */

// ✅ Test catch a returned new Error
// ❗Error 要被捕获必须使用 throw 关键字抛出，或作为 Promise.reject() 参数
/* let p7_then_catch = p7
	.then((res) => {
		return new Error("Error in p7_then");
	})
	.catch((e) => {
		console.log("p7_then_catch", e);
	});
console.log(p7_then_catch); // fulfilled Error: Error in p7_then */

// ✅Test catch a thrown error while using then or catch
/* let p10_throw = p10.catch((err) => {
	throw err;
});
console.log(p10_throw); */
// .catch((err) => console.error(err));

// ❗.then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环
/* const promise = Promise.resolve().then(() => {
	return promise;  // TypeError: Chaining cycle detected for promise #<Promise>
});
promise.catch(console.error); */

// ❗.then 或者 .catch 的参数期望是函数，传入非函数则会发生值穿透。
/* Promise.resolve(1)
.then(2)
.then(Promise.resolve(3))
.then(console.log) // 1 */

// ✅Test finally() executing order on fulfilled and rejected promises
/* let p7_final = p7
	.then((res) => console.log("3. p7", res)) // 3. p7 Success7
	.catch((err) => console.error("p7_final", err))
	.finally(() => {
		console.log("6. p7 final"); // 6. p7 final
	});

let p10_final = p10
	// .then((res) => console.log("p10", res))
	// .catch((err) => console.error("p10_final", err))
	.finally(() => {
		console.log("4. p10 final"); // 4. p10 final
	});

console.log("1. p10_final", p10_final); // 1. status = rejected; result = Error1

let p11_final = p11
	// .then((res) => console.log("p11", res))
	// .catch((err) => console.error("p11_final", err))
	.finally((e) => {
		console.log("5. Promise in p11_final", Promise.reject(e)); // 5. Promise in p11_final; rejected; undefined
	});

console.log("2. p11_final", p11_final); // 2. status = rejected; result = Error2 */

// ✅Test then input: with no callback in then
/* let p7_then = p7.then();
console.log(p7_then); // Promise status = fulfilled; result = Success7 */

// ✅Test then input: no return value
/* p7.then((res1) => console.log("p7", res1)).then(
	(res2) => console.log("p7", res2) // p7 undefined
); */

// ✅Test then input: thenable with a then property
/* let p7_plus = p7.then((res) => {
	let obj = { res: res, then: "then" };
	console.log(obj);
	return obj;
});
console.log(p7_plus); // Promise, state = fulfilled; result = Object {...}
p7_plus.then((res) => console.log("p7", res)); // p7 {res:..., then: ...} */

// ✅Test then input: thenable with an empty then method
/* let p8_plus = p8.then((res) => {
	let obj = { res: res, then: () => {} };
	console.log(obj);
	return obj;
});
console.log(p8_plus); // Promise, state = pending; result = undefined
p8_plus.then((res) => console.log("p8", res)); // Will not be executed */

// ✅Test then input: thenable with a then method
/* let p9_plus = p9.then((res) => {
	let obj = {
		res: res,
		then: (x, y) => {
			// x("value") // will be caught by p9_plus_then
			// let xValue = x("value");
			// console.log("x", xValue); // x undefined
			// console.log("x", x("value")); // x undefined
			y("Error p9_plus"); // will be caught by p9_plus_then
			// let yValue = y("error");
			// console.log("y", yValue); // y undefined
		},
	};
	console.log(obj);
	return obj;
});
console.log(p9_plus); 
// Promise, state = "fulfilled"; result = "value"
// Promise, rejected; Error p9_plus

let p9_plus_then = p9_plus.then(
	(res) => {
		console.log("p9", res); // p9 value
	},
	(err) => {
		console.error(err); // Error p9_plus
	}
); */

// ✅Test Promise.all
/* Promise.all([p7, p8, p9]).then((res) => console.log(res)); // ['Success1','Success2','Success3']

Promise.all([p7, p8, p9]).then((res) => res.forEach((res) => console.log(res))); */

// Promise.all([p7, p8, p10]).then((res) => console.log("all", res)); // res will not be printed

// ✅Test Promise.race
// Promise.race([p7, p8, p9]).then((res) => console.log(res));

// ✅Test Promise.allSettled
// Promise.allSettled([p7, p8, p9]).then((res) => console.log(res)); // [{status:..., value:...},{status:..., value:...},{status:..., value:...}]

// Promise.allSettled([p7, p8, p10]).then((res) => console.log(res)); // [{status:..., value:...},{status:..., value:...},{status:..., reason:...}]

// ✅Test Promise.any on fulfilled promises
// Promise.any([p7, p10, p11]).then((res) => console.log(res));

// ✅Test Promise.any on rejected promises
/* Promise.any([p10, p11]).then((res) => console.log(res)); // Uncaught AggregateError

Promise.any([p10, p11])
	.then((res) => console.log(res))
	.catch((err) => console.error("Rejected", err)); // Rejected AggregateError (❗the err message will not show)

Promise.any([p10, p11])
	.then((res) => console.log(res))
	.catch((err) => {
		if (err instanceof AggregateError) {
			console.error("AggregateError occurred:");
			// ✅ To show err message of each promise 
			console.log(err.errors); // ['Error1','Error2']
			err.errors.forEach((err, index) => {
				console.error(`Error ${index + 1}:`, err);
			});
		} else {
			console.error("Other error occurred:", err);
		}
	}); */
