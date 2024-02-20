// Promise封装Ajax请求
function ajax(method, url, data) {
	var xhr = new XMLHttpRequest();
	return new Promise(function (resolve, reject) {
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== 4) return;
			if (xhr.status === 200) {
				resolve(xhr.responseText);
			} else {
				reject(xhr.statusText);
			}
		};
		xhr.open(method, url);
		xhr.send(data);
	});
}
ajax("GET", "https://jsonplaceholder.typicode.com/posts")
	.then(function (data) {
		// AJAX成功，拿到响应数据
		console.log(data);
	})
	.catch(function (status) {
		// AJAX失败，根据响应码判断失败原因
		new Error(status);
	});
