const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

let info
export default function Home(props) {
    info = props.movie
    let html = topHTML();
    html += makeMovieIntoCards();
    html += bottomHTML();

    return html;
}

function topHTML() {
    return `
    <div class="img-container">
    <img class="billboard" src="assets/step-brothers.jpeg">
    </div>
    <div class="container">
    `;
}

function makeMovieIntoCards() {
    let html = "";
    for (let i = 0; i < info.length; i++) {
        html += `
        <div class="card">
            <div class="card-header">${info[i].title}</div>
            <div class="card-body">
            <a id="icons"><i class="far fa-play-circle"></i></a>
            <a id="icons"><i class="fas fa-plus-circle"></i></a>
            <a id="icons"><i class="far fa-thumbs-up"></i></a>
            <a id="icons"><i class="fas fa-hat-cowboy-side"></i></a>
            </div>
            <div>Rotten Tomatoes Rating :${info[i].rating}</div>
            <div class="card-footer">
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