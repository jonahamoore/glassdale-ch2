import {useNotes} from "./NoteDataProvider.js"
import { updateNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js";
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";


// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.
const contentTarget = document.querySelector(".print-list")

export const NoteEditForm = (noteId) => {
    // Give this component access to our application's notes state
    const allNotes = useNotes();
    const criminalsArray = useCriminals()

    // Find the note that we clicked on by its unique id
    const noteWeWantToEdit = allNotes.find(singleNote=> singleNote.id === noteId)

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h2>Edit Note</h2>
            <input type="date" id="note-date" value="${noteWeWantToEdit.dateOfNote}" />
            <input type="text" value="${noteWeWantToEdit.noteText}" id="note-stuff" />
            <select id="criminalEdit-FK" class="form-control criminalSelect">
            <option value="0">Please select a criminal</option>
            ${criminalsArray.map(x => x.id === noteWeWantToEdit.criminalId ? `<option selected value="${ x.id}">${ x.name }</option>` : `<option value="${ x.id }"${ x.name }</option>`)}
        </select>
            <button id="saveNoteChanges-${noteId}">Save Changes</button>
    `
}



contentTarget.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveNoteChanges")){

        // Make a new object representation of a note
        const editedNote = {
            id: event.target.id.split("-")[1],
            noteText: document.querySelector("#note-stuff").value,
            criminalId: +document.querySelector("#criminalEdit-FK").value,
            dateOfNote: document.querySelector("#note-date").value
        }
        // console.log(editedNote)
        // Send to json-server and refresh the list
        updateNote(editedNote).then(NoteList)

    }
})
