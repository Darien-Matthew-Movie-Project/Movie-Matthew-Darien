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
            <a id="icons"><i class="fal fa-plus-circle"></i></a>
            <a id="icons"><i class="fal fa-heart-circle"></i></a>
            <a id="icons"><i class="fal fa-dragon"></i></a>
            </div>
            <div class="card-footer"></div>
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