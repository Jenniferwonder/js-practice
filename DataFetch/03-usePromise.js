let done = true;

const isItDoneYet = new Promise((resolve, reject) => {
	if (done) {
		const workDone = "这是创建的东西";
		resolve(workDone);
	} else {
		const why = "仍然在处理其他事情";
		reject(why);
	}
});
const checkIfItsDone = () => {
	isItDoneYet
		.then((ok) => {
			console.log(ok);
		})
		.catch((err) => {
			console.error(err);
		});
};
console.log(isItDoneYet);
checkIfItsDone();
