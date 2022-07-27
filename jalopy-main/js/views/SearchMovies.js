export default function SearchMovies(props) {
    console.log(props);

    // language=HTML
    return `
    <body>
    <header>
        
    </header>
    <main>
        <div id="formContainer">
            <div id="searchForm">
				<form>
					<label for="searchInput" id="searchLabel">Search and you will find ...</label>
					<input type="text" id="searchInput" placeholder="Search for a movie!">
                    <button id="submit">Submit</button>
				</form>
            </div>
        </div>
        
        <div id="moviesContainer">
            
        </div>
    </main>
    </body>
    `;
}

function search() {
    let userInput = document.querySelector('#searchInput');
    let btn = document.querySelector('#submit');

    btn.addEventListener('click', function (event){

    })

}

export function SearchMoviesEvents() {
    search();
}