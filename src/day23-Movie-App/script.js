const movieInfo = document.querySelector(".movie-info");
const statusMsg = document.querySelector("#statusMsg");
const moviegrid = document.querySelector(".movie-grid");
const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput")

function searchMovie(e){
    const key = e.target.value.trim();
    console.log(key)
}
const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
}
 const debounceSearch = debounce(searchMovie,500)  
searchInput.addEventListener("input", debounceSearch)

async function getMovieDetail(movieName) {
    movieName = searchInput.value;
    const api = `http://www.omdbapi.com/?t=${movieName}&apikey=e0a619fc`

    try {
        const response = await fetch(api);

        if (!response.ok) throw new Error(`Response Status : ${response.status}`)

        const dataApi = await response.json();
        console.log(dataApi)
        statusMsg.innerHTML = ``
        moviegrid.innerHTML = `
            <div class="poster-wrapper">
            <img src= ${dataApi.Poster}
            alt="${dataApi.Title}">
            </div>

            <div class="movie-info">
            <h3>${dataApi.Title}</h3>
            <div class="meta-data">
            <span class="year">📅 ${dataApi.Year}</span>
            <span class="type">🎬 ${dataApi.Type}</span>
            </div>`

    } catch (error) {
        console.error("Error", error.message)
    }
}

searchBtn.addEventListener("click", getMovieDetail)