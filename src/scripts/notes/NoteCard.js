import { deleteNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js";

export const Note = (Object) => {
    return `
        <div class="col-sm-3 border border-dark m-3 list-group-item">
        <h3>Suspect: ${Object.suspect}</h3>
        <p>Note Text: ${Object.noteText}</p>
        <p>Date: ${new Date(Object.dateOfNote).toLocaleDateString('en-US')}</p>
        <button id="deleteNote--${Object.id}">Delete</button>
        <button id="edit${Object.id}">Edit</button>
        </div>  
    `
}

const eventHub = document.querySelector(".print-list")

eventHub.addEventListener("click", Object => {
    if (Object.target.id.startsWith("deleteNote")) {

        const idToDelete = Object.target.id.split("--")[1]
    

        console.log(idToDelete)
        deleteNote (idToDelete)
        .then(NoteList)

    }
});