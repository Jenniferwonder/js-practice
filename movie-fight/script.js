// const btnSearch = document.querySelector(".btnSearch");
const tutorial = document.querySelector(".tutorial");
const leftColumn = document.querySelector(".column-left");
const rightColumn = document.querySelector(".column-right");
const rightDropdown = document.getElementById("dropdown-content-right");
const leftDropdown = document.getElementById("dropdown-content-left");
const leftResults = document.getElementById("results-left");
const rightResults = document.getElementById("results-right");
const leftInput = document.getElementById("leftInput");
const rightInput = document.getElementById("rightInput");

const init = function () {
	leftResults.classList.add("hidden");
	rightResults.classList.add("hidden");
	leftDropdown.classList.add("hidden");
	rightDropdown.classList.add("hidden");
	leftColumn.classList.remove("is-active");
	rightColumn.classList.remove("is-active");
	tutorial.classList.remove("hidden");
};
init();

const getDebounceData = debounce((inputValue) => {
	getOptions(inputValue);
});
leftInput.addEventListener("input", (e) => {
	leftDropdown.classList.remove("hidden");
	rightDropdown.classList.add("hidden");
	leftColumn.classList.add("is-active");
	rightColumn.classList.remove("is-active");
	getDebounceData(e.target.value);
});
rightInput.addEventListener("input", (e) => {
	leftDropdown.classList.add("hidden");
	rightDropdown.classList.remove("hidden");
	leftColumn.classList.remove("is-active");
	rightColumn.classList.add("is-active");
	getDebounceData(e.target.value);
});

async function getOptions(inputValue) {
	// const res = await fetch("http://www.omdbapi.com/?apikey=d9835cc5&s=Batman");
	const res = await axios.get("http://www.omdbapi.com/", {
		params: {
			apikey: "d9835cc5",
			s: inputValue,
		},
	});
	if (res.data.Error) {
		return [];
	}
	const searchItems = res.data.Search;
	renderOptions(searchItems);
}
function renderOptions(searchItems) {
	for (let item of searchItems) {
		const option = document.createElement("a");
		if (leftColumn.classList.contains("is-active")) {
			leftDropdown.appendChild(option);
		} else {
			rightDropdown.appendChild(option);
		}
		option.innerHTML = `<img src="${item.Poster}" alt="poster" class="poster-sm">
		${item.Title}(${item.Year})`;
		option.classList.add("dropdown-item");
		option.addEventListener("click", () => {
			getResults(item.imdbID);
			tutorial.classList.add("hidden");
			if (leftColumn.classList.contains("is-active")) {
				leftInput.value = item.Title;
				leftResults.classList.remove("hidden");
				leftDropdown.classList.add("hidden");
			} else {
				rightInput.value = item.Title;
				rightResults.classList.remove("hidden");
				rightDropdown.classList.add("hidden");
			}
		});
	}
}
// getData("batman");
async function getResults(movieID) {
	const res = await axios.get("http://www.omdbapi.com/", {
		params: {
			apikey: "d9835cc5",
			i: movieID,
		},
	});
	if (res.data.Error) {
		return [];
	}
	const results = res.data;
	console.log(results);
	renderResults(results);
}
function renderResults(results) {
	const boxOffice = parseInt(
		results.BoxOffice.replace(/\$/g, "").replace(/,/g, "")
	);
	const metaScore = parseInt(results.Metascore);
	const imdbRating = parseFloat(results.imdbRating);
	const imdbVotes = parseInt(results.imdbVotes.replace(/,/g, ""));
	const awards = results.Awards.split(" ").reduce((prev, word) => {
		const value = parseInt(word);

		if (isNaN(value)) {
			return prev;
		} else {
			return prev + value;
		}
	}, 0);
	const resultsHTML = `<div class="results-brief">
	<img src=${results.Poster} alt="Poster" class="poster-lg">
	<div class="results-brief-content">
		<h2 class="title-lg">${results.Title}(${results.Year})</h2>
		<h3 class="genre">${results.Genre}</h3>
		<p class="plot">${results.Plot}</p>
	</div>
</div>
<div class="results-card" data-value=${awards}>
	<h2 class="title-lg">${results.Awards}</h2>
	<p class="key">Awards</p>
</div>
<div class="results-card" data-value=${boxOffice}>
	<h2 class="title-lg">${results.BoxOffice}</h2>
	<p class="key">Box Office</p>
</div>
<div class="results-card" data-value=${metaScore}>
	<h2 class="title-lg">${results.Metascore}</h2>
	<p class="key">Metascore</p>
</div>
<div class="results-card" data-value=${imdbRating}>
	<h2 class="title-lg">${results.imdbRating}</h2>
	<p class="key">IMDB Rating</p>
</div>
<div class="results-card" data-value=${imdbVotes}>
	<h2 class="title-lg">${results.imdbVotes}</h2>
	<p class="key">IMDB Votes</p>
</div>`;
	if (leftColumn.classList.contains("is-active")) {
		leftResults.innerHTML = resultsHTML;
		// document.querySelectorAll(".results-card").forEach((item) => {
		// 	item.classList.add("results-card-left");
		// });
	} else {
		rightResults.innerHTML = resultsHTML;
		// document.querySelectorAll(".results-card").forEach((item) => {
		// 	item.classList.add("results-card-right");
		// });
	}
	const leftCards = document.querySelectorAll("#results-left .results-card");
	const rightCards = document.querySelectorAll("#results-right .results-card");
	runComparison(leftCards, rightCards);
}
function runComparison(leftCards, rightCards) {
	leftCards.forEach((leftItem, index) => {
		const leftValue = leftItem.dataset.value;
		const rightItem = rightCards[index];
		const rightValue = rightItem.dataset.value;
		if (leftValue > rightValue) {
			rightItem.classList.add("is-warning");
		} else {
			leftItem.classList.add("is-warning");
		}
	});
}
document.addEventListener("click", () => {
	if (document.contains(leftDropdown || rightDropdown)) {
		leftDropdown.classList.add("hidden");
		rightDropdown.classList.add("hidden");
		leftInput.value = "";
		rightInput.value = "";
	}
});
