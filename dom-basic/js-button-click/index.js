let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");

// Update buttons together
// let count = 0;
// function handleClick() {
// 	count++;
// 	btn1.textContent = `Clicked ${count} times`;
// 	btn2.textContent = `Clicked ${count} times`;
// }
// btn1.addEventListener("click", handleClick);
// btn2.addEventListener("click", handleClick);

// Update buttons individually
let count1 = 0;
let count2 = 0;
btn1.addEventListener("click", () => {
	count1++;
	btn1.textContent = `Clicked ${count1} times`;
});
btn2.addEventListener("click", () => {
	count2++;
	btn2.textContent = `Clicked ${count2} times`;
});

let a = 1;
let b = a;
console.log(b);
b = b + 1;
console.log(a);

let c = [1];
// let d = c;
let d = c.slice();
d.push(1);
console.log(c);
console.log(d);
