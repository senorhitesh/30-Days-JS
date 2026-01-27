const moviegrid = document.querySelector(".movie-grid");
const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");
const statusMsg = document.querySelector("#statusMsg");
const movieCard = document.querySelector(".movie-card")
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
            console.log(dataApi.Search)
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
        card.addEventListener("click", () => {
            const api2 = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=e0a619fc`;
            getMovieCard(api2)
        })
    });
}
const modalOverlay = document.querySelector("#movieModal"); // Select by ID
const modalBody = document.querySelector("#modalBody");

async function getMovieCard(api2) {
    if (!api2) return;

    try {

        console.log("data load hote hue")
        const response = await fetch(api2);
        const dataCard = await response.json();
        renderCard(dataCard);
        modalOverlay.style.display = "flex";

    } catch (error) {
        console.error("Error fetching details", error.message);
    }
} function renderCard(details) {
    const content = `
        <div class="modal-header">
            <img src="${details.Poster !== "N/A" ? details.Poster : 'placeholder.jpg'}" class="modal-poster" alt="Poster">

            <div class="modal-info">
                <h2>${details.Title}</h2>
                <div class="meta-row">
                    <p><strong>Released:</strong> ${details.Released}</p>
                    <p><strong>Genre:</strong> ${details.Genre}</p>
                </div>
                <p><strong>Director:</strong> ${details.Director}</p>
                <p><strong>Actors:</strong> ${details.Actors}</p>

                <div class="ratings">
                    <span class="tag">⭐ ${details.imdbRating}</span>
                    <span class="tag">⏱ ${details.Runtime}</span>
                    <span class="tag">${details.Rated}</span>
                </div>
            </div>
        </div>

        <p class="plot">
            <strong>Plot:</strong> ${details.Plot}
        </p>
    `;
    document.getElementById("modalBody").innerHTML = content;
}

function closeModal() {
    modalOverlay.style.display = "none";
}
window.onclick = (event) => {
    if (event.target === modalOverlay) {
        closeModal
    }
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
        searchInput.value = lastSearched;
        getMovieDetail(lastSearched)
    }
})
