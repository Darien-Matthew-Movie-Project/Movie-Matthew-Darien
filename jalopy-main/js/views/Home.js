const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

let info
export default function Home(props) {

    console.log(props);

    info = props.movie
    let html = topHTML();
    html += makeMovieIntoCards();
    html += bottomHTML();

    return html;
}

function topHTML() {
    return `
    <div class="img-container">
    </div>
    <div class="card-container">
    `;
}

function makeMovieIntoCards() {
    let html = "";
    for (let i = 0; i < info.length; i++) {
        html += `
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img class="card-image" src="assets/step-brothers.jpeg">
            </div>
            <div class="flip-card-back">                
                <div class="card-header">
                    <h1 class="card-title">${info[i].title}</h1>
                </div>
                <div class="card-body">
                    <a id="icons"><i class="far fa-play-circle"></i></a>
                    <a id="icons"><i class="fas fa-plus-circle"></i></a>
                    <a id="icons"><i class="far fa-thumbs-up"></i></a>
                    <a id="icons"><i class="fas fa-hat-cowboy-side"></i></a>
                    <div>Rotten Tomatoes Rating :${info[i].rating}</div>
                    <div>Genre: ${info[i].genre}</div>
                    <div>Director: ${info[i].director}</div>
                </div>
                <div class="card-footer">
                <p>${info[i].plot}</p>
                </div>
            </div>
        </div>
    </div>
        `;
    }
    return html;
}

function bottomHTML() {
    return`
    </div>
`;
}

export function HomeEvents() {
    console.log(info);
}
// const cards = document.querySelectorAll(".cards-single");
//
// function flipCard() {
//     this.classList.toggle("cards-single.flip");
// }
// cards.forEach((card) => card.addEventListener("click", flipCard));