const form = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");

let search = "";
//movie stored
let movies = [];

let emoji = "";

const fetchMovies = async () => {
    movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}`)
        .then((res) => res.json());
};

displayMovies = async () => {
    await fetchMovies();
    //Set result array max to 12
    movies.results.length = 12;
    
    result.innerHTML = movies.results.map((movie) => 
        `
            <li>
                <h2>$movie.original_title</h2>
                <div class="car-content">
                    <img src="http://image.tmdb.org/t/p/w500${movie.poster_path}" alt='Image Not Found'> </img>
                    <div class="infos">
                        <p>${movie.overview}</p>
                        <p>Popularity : ${movie.popularity} </p>
                    </div>
                </div>
            </li>
        `
    ).join("");
};


form.addEventListener("submit", (e) => {
    e.preventDefault();//Empeche de changement de page en cliquant sur le boutton
    search = searchInput.value;
    displayMovies();
});