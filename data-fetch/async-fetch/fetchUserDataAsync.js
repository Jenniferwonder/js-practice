async function fetchUserData() {
	try {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/users/1"
		);
		console.log(response);
		if (!response.ok) {
			throw new Error("Failed to fetch user data");
		}
		const userData = await response.json();
		// console.log("User data:", userData);
		return userData;
	} catch (error) {
		console.error("Error fetching user data:", error);
		throw error;
	}
}

async function getUserData() {
	try {
		const userData = await fetchUserData();
		console.log("User data:", userData);
		// 在这里可以对获取到的用户数据进行处理，比如渲染到页面上
	} catch (error) {
		// 处理错误情况，比如显示错误信息给用户
	}
}

// 调用异步函数
getUserData();
