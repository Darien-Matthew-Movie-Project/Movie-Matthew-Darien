import {showNotification} from "../messaging.js";

export default function AddMovie(props) {
    // language=HTML
    return `
<header>
    <h1>Add Movie</h1>
</header>
<main>
    <div>
        
    </div>
</main>
    `;
}
export function AddMovieEvents() {
    showNotification("Hey, a message!", "danger");
}