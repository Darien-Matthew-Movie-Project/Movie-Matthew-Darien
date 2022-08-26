export default function EditMovies(props) {

    console.log(props);
    // language=HTML
    return `
<header>
    <h1>Edit Movie</h1>
</header>
<main>
    <div>
        <form>
			<label for="movieName" id="titleLabel">Enter Movie Name:</label>
			<input type="text" id="movieTitle">
			<br>

			<input type="submit" value="Submit" id="submit">
        </form>
    </div>
    
    <div id="renderContainer">
        
    </div>
    ${addMovie(props)}
</main>
    `


}

async function fetchData() {
    let userInput = document.querySelector('#movieTitle');

    return await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${POSTER_API}&language=en-US&query=${userInput.value}&page=1&include_adult=false`)
        .then(async function (response) {
            if (response.status !== 200) {
                console.log("cannot read tools file");
                return "";
            } else
                return await response.json();
        });
}

async function addMovie(props) {
    console.log('This is:');
    console.log(props);

    let userInput = document.querySelector('#movieTitle');
    let title = userInput.value;
    let movie_data = await fetchData()
    let newMovie = {
        title: movie_data.results[0].title,
        release_date: movie_data.results[0].release_date,
        plot: movie_data.results[0].overview
    }

    if (title.trim().length === 0) {
        alert('Please enter a valid input');
    }

    // console.log(movie_data);
    // console.log(movie_data.results[0].poster_path);
    // console.log(movie_data.results[0].title);
    // console.log(movie_data.results[0].overview);
    // console.log(movie_data.results[0].release_date);

    const requestOptions = {
        method: "POST",
        body: JSON.stringify(newMovie)
    }
    fetch("https://merciful-clear-regnosaurus.glitch.me/movies", requestOptions)
        .then(function(response) {
            let container = document.querySelector('#renderContainer');
            let htmlString = '';

            for (let i = 0; i < props.glitchMovies.length; i++) {

                htmlString  += `<div class="flip-card">
                                    <div class="flip-card-inner">
                                       <div class="flip-card-front">
                                         <img id="movieTemplate" src="https://image.tmdb.org/t/p/w300${movie_data.results[i].poster_path}" alt="movie picture">
                                         <p class="movieDetails">${movie_data.results[i].title}</p>
                                         <p class="movieDetails"></p>
                                       </div>   
                                       <div class="flip-card-back">
                                         <p class="backOverview">${movie_data.results[i].overview}</p>
                                         <div>
                                         <a href=""><i class="fa-solid fa-circle-play"></i></a>
                                         <a href=""><i class="fa-solid fa-circle-plus"></i></a>
                                         <a href=""><i class="fa-solid fa-heart"></i></a>
                                        </div>
                                       </div>
                                    </div>         
                                 </div>
                                 <hr>`
            }
            return htmlString;
        })
}


function seeData(props) {
    console.log(props)
}

export function EditMoviesEvents() {
    // seeData();

    document.querySelector('#submit').addEventListener('click', addMovie);
}