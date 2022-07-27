export default function Navbar(props) {

    // everyone can see home
    let html = `
        <nav>
            <div id="logoDiv" class="link"><a href="/" data-link id="logo">Cult-Flix</a></div>`;

    html = html + `<div class="link"><a href="/editMovie" data-link>Edit Movie Info</a></div>`;

    html = html + `<div class="link"><a href="/searchMovies" data-link>Find<i id="magnifying" class="fa-solid fa-magnifying-glass"></i></a></div>`;

    html = html + `</nav><hr>`;
    return html;
}