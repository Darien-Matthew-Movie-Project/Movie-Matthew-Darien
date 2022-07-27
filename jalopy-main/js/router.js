import Home, {HomeEvents} from "./views/Home.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register from "./views/Register.js"
import {RegisterEvent} from "./views/Register.js";
import UserIndex, {UserEvents} from "./views/User.js";
import Logout, {LogoutEvents} from "./views/Logout.js";
import SearchMovies, {SearchMoviesEvents} from "./views/SearchMovies.js";
import EditMovie, {EditMoviesEvents} from "./views/EditMovie.js";

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
            returnView: SearchMovies,
            state: {
                movie: {
                    url: 'https://flashy-adhesive-cupcake.glitch.me/movies',
                    headers: {
                        'Accept': 'application/json'
                    }
                },
                // movieSearch: {
                //     url: 'https://api.themoviedb.org/3/search/company?api_key=d5240794730792783c25529b03fad501&page=1',
                //     headers: {
                //         'Accept': 'application/json'
                //     }
                // },
            },
            uri: '/searchMovies',
            title: 'Search Movies',
            viewEvent: SearchMoviesEvents
        },
        '/editMovie': {
            returnView: EditMovie,
            state: {},
            uri: '/editMovie',
            title: 'Edit Movie',
            viewEvent: EditMoviesEvents
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

