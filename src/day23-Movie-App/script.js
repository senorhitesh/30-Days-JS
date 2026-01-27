const moviegrid = document.querySelector(".movie-grid");
const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");
const statusMsg = document.querySelector("#statusMsg");

async function getMovieDetail(query) {
    const movieName = query || searchInput.value;
    if (!movieName) return;

    const api = `https://www.omdbapi.com/?s=${movieName}&apikey=e0a619fc`;

    try {
        const response = await fetch(api);
        const dataApi = await response.json();

        if (dataApi.Response === "True") {
            statusMsg.innerHTML = "";
            localStorage.setItem("lastSearched", movieName)
            renderMovies(dataApi.Search); // Pass the ARRAY to the renderer
        } else {
            statusMsg.innerHTML = dataApi.Error;
            moviegrid.innerHTML = "";
        }

    } catch (error) {
        console.error("Error", error.message);
    }
}

function renderMovies(movies) {
    moviegrid.innerHTML = ""; // Clear old results

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card"); // Apply your CSS styling

        card.innerHTML = `
            <div class="poster-wrapper">
                <img src="${movie.Poster !== "N/A" ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
            </div>
            <div class="movie-info">
                <h3>${movie.Title}</h3>
                <div class="meta-data">
                    <span class="year">📅 ${movie.Year}</span>
                    <span class="type">🎬 ${movie.Type}</span>
                </div>
            </div>
        `;

        moviegrid.appendChild(card);
    });
}

const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            callback(...args);
        }, wait);
    };
};

const handleInput = debounce((e) => {
    const key = e.target.value.trim();
    if (key.length > 2) { // Only search if 3+ chars
        getMovieDetail(key);
    }
}, 500);

searchInput.addEventListener("input", handleInput);
searchBtn.addEventListener("click", () => getMovieDetail());

window.addEventListener("DOMContentLoaded", () => {
    const lastSearched = localStorage.getItem("lastSearched");

    if (lastSearched) {
        searchInput.value =lastSearched;
        getMovieDetail(lastSearched)
    }
})