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
			<label for="movieGenre" id="genreLabel">Enter Movie Genre:</label>
			<input type="text" id="movieGenre">

			<input type="submit" value="Submit" id="submit">
        </form>
    </div>
</main>
    `;
}

function addMovie (props) {
    let moviesArray = props;
    let newMovie = {};
    let userInput = document.querySelector('#movieTitle');
    let userGenre = document.querySelector('#movieGenre');

    console.log(userInput.value);
    console.log(userGenre.value);
    console.log(moviesArray);

    // if (userInput.length || userGenre.length === 0) {
    //     alert('Please enter a valid input')
    // } else {
    //     newMovie = {
    //         moviesArray.title: userInput,
    //         moviesArray.genre: userGenre
    //     }
    // }

}

export function EditMoviesEvents() {
    document.querySelector('#submit').addEventListener('click', addMovie);
}