import {isLoggedIn} from "../../auth.js";

export default function Navbar(props) {
    const loggedIn = isLoggedIn();

    // everyone can see home
    let html = `
        <nav>
            <div class="link"><a href="/" data-link id="logo">Cult-Flix</a></div>`;

    // everyone can see about
    html = html + `<div class="link"><a href="/editMovie" data-link>Edit Movie Info</a></div>`;

    // only logged in can see user info and logout
    if(loggedIn) {
        html = html + `<a href="/users" data-link>User Info</a>
            <a href="/logout" data-link>Logout</a>`;
    } else {
        // if not logged in, can see login and register
        html = html + `<div class="link"><a href="/login" data-link>Login</a></div>
        <div class="link"><a href="/register" data-link>Register</a></div>`;
    }

    html = html + `<div class="link"><a href="/searchMovies" data-link>Find<i id="magnifying" class="fa-solid fa-magnifying-glass"></i></a></div>`;

    html = html + `</nav><hr>`;
    return html;
}