const BASE_URI = `${BACKEND_HOST}/api/s3/download`;


export default function Home(props) {

    return `
        <body>
            <h1 id="homeViewH1">Greatest movies EVER! At the tip of your hands.</h1>
            <div id="homeContainer">
                ${makeCards(props)}
            </div>
        </body>
    `;
}

function makeCards(props) {
    let htmlString = '';

    console.log(props.TmbdMovies.results[0].poster_path);


    for (let i = 0; i < props.TmbdMovies.results.length; i++) {

        htmlString  += `<div class="flip-card">
                                    <div class="flip-card-inner">
                                       <div class="flip-card-front">
                                         <img id="movieTemplate" src="https://image.tmdb.org/t/p/w300${props.TmbdMovies.results[i].poster_path}" alt="movie picture">
                                         <p class="movieDetails">${props.TmbdMovies.results[i].original_title}</p>
                                         <p class="movieDetails"></p>
                                       </div>   
                                       <div class="flip-card-back">
                                         <p class="backOverview">${props.TmbdMovies.results[i].overview}</p>
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
}

export function HomeEvents() {
}
