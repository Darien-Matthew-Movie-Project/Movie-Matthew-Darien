import {showNotification} from "../messaging.js";

export default function EditMovie(props) {
    // language=HTML
    return `
<header>
    <h1>Edit Movie</h1>
</header>
<main>
    <div>
        
    </div>
</main>
    `;
}
export function EditMovieEvents() {
    showNotification("Hey, a message!", "danger");
}