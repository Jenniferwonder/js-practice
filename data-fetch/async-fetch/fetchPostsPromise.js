function fetchPosts() {
	return fetch("https://jsonplaceholder.typicode.com/posts")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to fetch posts");
			}
			return response.json();
		})
		.then((posts) => {
			return posts;
		})
		.catch((error) => {
			console.error("Error fetching posts:", error);
			throw error;
		});
}

// Example usage:
fetchPosts()
	.then((posts) => {
		console.log("Posts:", posts);
		// Render posts to the UI
	})
	.catch((error) => {
		// Display an error message to the user
	});
