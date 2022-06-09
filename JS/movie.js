//TMdb
const API_KEY = "api_key=71bde374bd4ec2aea59aacd8a64ab648"
const BASE_URL = "https://api.themoviedb.org/3"
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY
getMovies(API_URL)
const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

//fetchimg out data
function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results)
    })
}
// inputing data 
function showMovies(data) {
    main.innerHTML = "";
    data.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie
        const movieEl = document.createElement("div")
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
        <div class="movie">
    <img src="${IMG_URL + poster_path}" alt="${title}">
    <div class="main-info">
        <h1>${title}</h1>
        <span class="${getColor(vote_average)}">${vote_average}</span>
    <div class="overview">
       ${overview}
    </div>

    </div>
</div>`
        main.appendChild(movieEl)
    });

};
// Rating color
function getColor(vote) {
    if (vote >= 8) {
        return `green`
    }
    else if (vote >= 5) {
        return `yellow`
    }
    else {
        return `red`
    }

}
// search element
form.addEventListener("keyup", (e) => {
    e.preventDefault();
    const searchTerm = search.value
    if (searchTerm) {
        getMovies(searchURL + "&query=" + searchTerm)
    }
})
