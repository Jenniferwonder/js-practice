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

// ✅Static Promsie.resolve, Promise.reject
/* function createPromise() {
	let p5 = Promise.resolve("Success");
	let p6 = Promise.reject("Fail");
	console.log("myPromise5 :>> ", p5);
	console.log("myPromise6 :>> ", p6);
}
createPromise(); */

let p7 = Promise.resolve("Success1");
let p8 = Promise.resolve("Success2");
let p9 = Promise.resolve("Success3");
let p10 = Promise.reject("Error1");
let p11 = Promise.reject("Error2");

// p7.then(console.log("p7", p7));
// p8.then(console.log("p8", p8));
// p9.then(console.log("p9", p9));
// p10.then(console.log("p10", p10));
// p11.then(console.log("p11", p11));

// ✅Test then & catch on rejected promise
/* p10
	.then(
		(res) => console.log("p10", res),
		(err) => console.error("then_p10", err)
	)
	.catch((err) => console.error("catch", err));

let p11_final= p11
	.then((res) => console.log("p11", res))
	.catch((err) => console.errorh_p_final11", err.finally("p11 final")));

console.log(p11_catch); // Promise status = fulfilled; result = undefined */

// Test finally method
let p7_final = p7
	.then((res) => console.log("p7", res))
	.catch((err) => console.error("p7_final", err))
	.finally(() => {
		console.log("p7 final");
	});

let p10_final = p10
	// .then((res) => console.log("p10", res))
	// .catch((err) => console.error("p10_final", err))
	.finally(() => {
		console.log("p10 final");
	});

console.log("p10_final", p10_final); // Promise status = rejected; result = Error1

let p11_final = p11
	// .then((res) => console.log("p11", res))
	// .catch((err) => console.error("p11_final", err))
	.finally(() => {
		Promise.reject();
	});

console.log("p11_final", p11_final); // Promise status = rejected; result = Error2

// ✅Test then input: with no callback in then
// let p7_then = p7.then();
// console.log(p7_then); // Promise status = fulfilled; result = Success1

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
			y("errorBig"); // will be caught by p9_plus_then
			// let yValue = y("error");
			// console.log("y", yValue); // y undefined
		},
	};
	console.log(obj);
	return obj;
});
console.log(p9_plus); // Promise, state = "fulfilled"; result = "value"
let p9_plus_then = p9_plus.then(
	(res) => {
		console.log("p9", res);
	},
	(err) => {
		console.error(err);
	}
); // p9 value */

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

// ✅Pending State
/* let myPromise1 = new Promise(() => {});

console.log("myPromise1 :>> ", myPromise1);

let myPromise2 = new Promise((resolve, reject) => {
	let a = 1;
	for (let index = 0; index < 5; index++) {
		a++;
	}
});

console.log("myPromise2 :>> ", myPromise2);

myPromise2.then(() => {
	console.log("myPromise2执行了then");
}); */
