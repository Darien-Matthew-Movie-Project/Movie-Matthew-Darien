import {showNotification} from "../messaging.js";

export default function RemoveMovie(props) {
    // language=HTML
    return `
<header>
    <h1>Remove Movie</h1>
</header>
<main>
    <div>
        
    </div>
</main>
    `;
}
export function RemoveMovieEvents() {
    showNotification("Hey, a message!", "danger");
}