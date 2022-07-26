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
				</form>
            </div>
        </div>
        
        <div id="moviesContainer">
            
        </div>
    </main>
    </body>
    `;
}



export function SearchMoviesEvents() {
}