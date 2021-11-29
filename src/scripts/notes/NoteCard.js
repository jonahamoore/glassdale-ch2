import { deleteNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js";
import { NoteEditForm } from "./NoteEditForm.js";

export const Note = (notes, criminal) => {
    return `
        <div class="col-sm-3 border border-dark m-3 list-group-item">
        <h3>Suspect: ${criminal.name}</h3>
        <p>Note Text: ${notes.noteText}</p>
        <p>Date: ${new Date(notes.dateOfNote).toLocaleDateString('en-US')}</p>
        <button id="deleteNote--${notes.id}">Delete</button>
        <button id="edit--${notes.id}">Edit</button>
        </div>  
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", Object => {
    if (Object.target.id.startsWith("deleteNote")) {

        const idToDelete = Object.target.id.split("--")[1]
    

        console.log(idToDelete)
        deleteNote (idToDelete)
        .then(NoteList)

    }
});

eventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id.startsWith("edit--")){
        const noteId = +eventObject.target.id.split("--")[1]
        NoteEditForm(noteId);
    }
})


