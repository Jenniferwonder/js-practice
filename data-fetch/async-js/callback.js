// number = document.querySelector("#number");
// submit = document.querySelector(".submit");
// resultField = document.querySelector(".resultField");

const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

function doStep1(init, callback) {
	// Blocking
	let i = 0;
	while (i < 1000000000) {
		i++;
	}
	log("🐷 billion loops done1");
	const result = init + 1;
	callback(result);
}
function doStep2(init, callback) {
	// Blocking
	let i = 0;
	while (i < 1000000000) {
		i++;
	}
	log("🐷 billion loops done2");
	const result = init + 2;
	callback(result);
}
function doStep3(init, callback) {
	// Blocking
	let i = 0;
	while (i < 1000000000) {
		i++;
	}
	log("🐷 billion loops done3");
	const result = init + 3;
	callback(result);
}
function doOperation() {
	let result = 0;
	// let result = Number(number.value);
	doStep1(result, (result1) => {
		doStep2(result1, (result2) => {
			doStep3(result2, (result3) => {
				log(`result: ${result3}`);
				// resultField.textContent = `Result: ${result3}`;
			});
		});
	});
}
log("Sync 1");

doOperation();
// submit.addEventListener("click", doOperation);
log("Sync 2");
