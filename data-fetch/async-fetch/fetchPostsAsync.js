async function fetchPosts() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		if (!response.ok) {
			throw new Error("Failed to fetch posts");
		}
		const posts = await response.json();
		return posts;
	} catch (error) {
		console.error("Error fetching posts:", error);
		throw error;
	}
}

// Example usage:
(async () => {
	try {
		const posts = await fetchPosts();
		console.log("Posts:", posts);
		// Render posts to the UI
	} catch (error) {
		// Display an error message to the user
	}
})();
