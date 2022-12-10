// number = document.querySelector("#number");
// submit = document.querySelector(".submit");
// resultField = document.querySelector(".resultField");

const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

function doStep1(init) {
	return Promise.resolve().then(() => {
		// return new Promise((resolve, reject) => {
		// Blocking
		let i = 0;
		while (i < 1000000000) {
			i++;
		}
		log("🐷 billion loops done1");
		// resolve(init + 1);
		return init + 1;
		// return '🐷 billion loops done';
	});
}
function doStep2(init) {
	// return Promise.resolve().then(() => {
	// Blocking
	let i = 0;
	while (i < 1000000000) {
		i++;
	}
	log("🐷 billion loops done2");
	return init + 2;
	// });
}
function doStep3(init) {
	// return Promise.resolve().then(() => {
	// Blocking
	let i = 0;
	while (i < 1000000000) {
		i++;
	}
	log("🐷 billion loops done3");
	return init + 3;
	// });
}

log("Sync 1");
// function doOperation() {
// let result = 0;
doStep1(0)
	.then((result) => doStep2(result))
	.then((newResult) => doStep3(newResult))
	.then((finalResult) => {
		log(`Got the final result: ${finalResult}`);
	})
	.catch((err) => console.log(err));
// }
// doOperation();
// submit.addEventListener("click", doOperation);
log("Sync 2");
