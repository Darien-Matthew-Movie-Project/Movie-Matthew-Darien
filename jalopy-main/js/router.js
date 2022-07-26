import Home, {HomeEvents} from "./views/Home.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register from "./views/Register.js"
import {RegisterEvent} from "./views/Register.js";
import UserIndex, {UserEvents} from "./views/User.js";
import Logout, {LogoutEvents} from "./views/Logout.js";
import SearchMovie, {SearchMovieEvents} from "./views/SearchMovies.js";
import EditMovie, {EditMovieEvents} from "./views/EditMovie.js";

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {
                movie: {
                    url: 'https://flashy-adhesive-cupcake.glitch.me/movies',
                    headers: {
                    'Accept': 'application/json'
                    }
                }
            },
            uri: '/',
            title: 'Home',
            viewEvent: HomeEvents
        },
        '/logout': {
            returnView: Logout,
            state: {},
            uri: '/',
            title: 'Logout',
            viewEvent: LogoutEvents
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: RegisterEvent
        },
        '/users': {
            returnView: UserIndex,
            state: {},
            uri: "/users",
            title: 'User Info',
            viewEvent: UserEvents
        },
        '/searchMovies': {
            returnView: SearchMovie,
            state: {
                movie: {
                    url: 'https://flashy-adhesive-cupcake.glitch.me/movies',
                    headers: {
                        'Accept': 'application/json'
                    }
                },
                posters: {
                    url: 'http://img.ombdapi.com/?apikey=MOVIE_POSTERS&',
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            },
            uri: '/searchMovies',
            title: 'Search Movies',
            viewEvent: SearchMovieEvents
        },
        '/editMovie': {
            returnView: EditMovie,
            state: {},
            uri: '/editMovie',
            title: 'Edit Movie',
            viewEvent: EditMovieEvents
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        }
    };

    // if we see a URI with index.html then interpret that as a route for /
    if(URI.indexOf("index.html") > -1) {
        URI = "/";
    }

    return routes[URI];
}