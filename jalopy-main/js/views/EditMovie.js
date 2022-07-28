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
</main>
    `;
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

async function addMovie () {
    console.log(movie_data);
    console.log(userInput.value);

    let userInput = document.querySelector('#movieTitle');
    let title = userInput.value;
    let movie_data = await fetchData()
    let newMovie = {
        title: '',
        genre: '',
        plot: ''
    }

    if (userInput.length === 0) {
        alert('Please enter a valid input');
    }
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(newMovie)
    }
    fetch("https://merciful-clear-regnosaurus.glitch.me/movies", requestOptions)
        .then(function(response) {
    })
}


export function EditMoviesEvents() {
    document.querySelector('#submit').addEventListener('click', addMovie);
}