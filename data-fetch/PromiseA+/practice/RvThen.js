class MyPromise {
	constructor(executor) {
		this.status = "pending";
		this.value = undefined;
		this.reason = undefined;
		this.onFulfilledCallbacks = [];
		this.onRejectedCallbacks = [];
		const resolve = (value) => {
			if (this.status === "pending") {
				this.status = "resolved";
				this.value = value;
				this.onFulfilledCallbacks.forEach((cb) => cb());
			}
		};
		const reject = (reason) => {
			if (this.status === "pending") {
				this.status = "rejected";
				this.reason = reason;
				this.onRejectedCallbacks.forEach((cb) => cb());
			}
		};
		try {
			executor(resolve, reject);
		} catch (e) {
			reject(e);
		}
	}
	// Rv3-20240612 Hard
	then(onResolved,onRejected){
		typeof onResolved === "function"? onResolved:(value)=>value;
		typeof onRejected === "function"? onRejected:(reason)=>{throw reason};
		const promise2=new MyPromise((resolve,reject)=>{
			if(this.status==="resolved"){
				setTimeout(()=>{
					try{
						const x = onResolved(this.value)
						resolvePromise(promise2,x,resolve,reject)
					}catch(e){
						reject(e)
					}
				})
				}else if(this.status==="rejected"){
				setTimeout(()=>{
					try{
						const x = onRejected(this.reason)
						resolvePromise(promise2,x,resolve,reject)
					}catch(e){
						reject(e)
					}
				})
				
			}else if(this.status==="pending"){
				onFulfilledCallbacks.push(()=>{
					setTimeout(()=>{
						try{
							const x = onResolved(this.value)
							resolvePromise(promise2,x,resolve,reject)
						}catch(e){
							reject(e)
						}
					})
				})
				this.onRejectedCallback.push(()=>{
					setTimeout(()=>{
						try{
							const x = onRejected(this.reason)
							resolvePromise(promise2,x,resolve,reject)
						}catch(e){
							reject(e)
						}
					})
				})
			}
		})
		return promise2
	}
	
	// Rv2-20240428 Hard
	/* then(onResolved, onRejected) {
		// default
		typeof onResolved === "function" ? onResolved : (value) => value;
		typeof onRejected === "function"
			? onRejected
			: (reason) => {
					throw reason;
			  };
		// return promise2
		const promise2 = new MyPromise((resolve, reject) => {
			if (this.status === "resolved") {
				setTimeout(() => {
					try {
						const x = onResolved(this.value);
						resolvePromise(x, promise2, resolve, reject);
					} catch (e) {
						reject(e);
					}
				});
			} else if (this.status === "rejected") {
				setTimeout(() => {
					try {
						const x = onRejected(this.reason);
						resolvePromise(x, promise2, resolve, reject);
					} catch (e) {
						reject(e);
					}
				});
			} else if (this.status === "pending") {
				this.onFulfilledCallbacks.push(() => {
					setTimeout(() => {
						try {
							const x = onResolved(this.value);
							resolvePromise(x, promise2, resolve, reject);
						} catch (e) {
							reject(e);
						}
					});
				});
				this.onFulfilledCallbacks.push(() => {
					setTimeout(() => {
						try {
							const x = onRejected(this.reason);
							resolvePromise(x, promise2, resolve, reject);
						} catch (e) {
							reject(e);
						}
					});
				});
			}
		});
		return promise2;
	}
	catch(onRejected) {
		return this.then(null, onRejected);
	}
	finally(cb) {
		return this.then(
			(value) => {
				return MyPromise.resolve(cb()).then(() => value);
			},
			(reason) => {
				return MyPromise.reject(cb()).then(() => {
					throw reason;
				});
			}
		);
	} */
	// Rv1-20240424 Hard
	/* then(onResolved, onRejected) {
		onResolved =
			typeof onResolved === "function" ? onResolved : (value) => value;
		onRejected =
			typeof onRejected === "function"
				? onRejected
				: (reason) => {
						throw reason;
				  };
		const promise2 = new MyPromise((resolve, reject) => {
			if (this.status === "resolved") {
				setTimeout(() => {
					try {
						const x = onResolved(this.value);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				});
			} else if (this.status === "rejected") {
				setTimeout(() => {
					try {
						const x = onRejected(this.reason);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				});
			} else if (this.status === "pending") {
				this.onFulfilledCallbacks.push(() => {
					setTimeout(() => {
						try {
							const x = onResolved(this.value);
							resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					});
				});
				this.onRejectedCallbacks.push(() => {
					setTimeout(() => {
						try {
							const x = onRejected(this.reason);
							resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					});
				});
			}
		});
		return promise2;
	}
	catch(onRejected) {
		return this.then(null, onRejected);
	}
	finally(cb) {
		return this.then(
			(value) => {
				return MyPromise.resolve(cb()).then(() => value);
			},
			(reason) => {
				return MyPromise.resolve(cb()).then(() => {
					throw reason;
				});
			}
		);
	} */
}
