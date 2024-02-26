number = document.querySelector("#number");
submit = document.querySelector(".submit");
resultField = document.querySelector(".resultField");

const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

function doStep1(init) {
	// Blocking
	let i = 0;
	while (i < 1000000000) {
		i++;
	}
	log("🐷 billion loops done1");
	return init + 1;
	// return '🐷 billion loops done';
}
function doStep2(init) {
	// Blocking
	let i = 0;
	while (i < 1000000000) {
		i++;
	}
	log("🐷 billion loops done2");
	return init + 2;
}
function doStep3(init) {
	// Blocking
	let i = 0;
	while (i < 1000000000) {
		i++;
	}
	log("🐷 billion loops done3");
	return init + 3;
}
function doOperation() {
	let result = Number(number.value);
	result = doStep1(result);
	result = doStep2(result);
	result = doStep3(result);
	log(`result: ${result}`);
	resultField.textContent = `Result: ${result}`;
}
submit.addEventListener("click", doOperation);
