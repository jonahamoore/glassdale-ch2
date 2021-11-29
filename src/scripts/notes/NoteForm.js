import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"
import { saveNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js"


const contentTarget = document.querySelector(".note-crim-list")

// Handle browser-generated click event in component
document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
        const newNote = {
            noteText: document.querySelector("#note-text").value,
            dateOfNote: document.querySelector("#date-text").value,
            criminalId: +document.querySelector("#select-criminal").value
            // Key/value pairs here
        }
        console.log(newNote)
        document.querySelector("#note-text").value = ""
        document.querySelector("#date-text").value = ""
        document.querySelector("#select-criminal").value = 0;
        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
    }
})


//Put some input fields and prompts here
export const NoteForm = () => {
    return getCriminals()
    .then(() => {
        const names = useCriminals()

    contentTarget.innerHTML = `

    <section id-"note-form-container">
    <div class="col-sm-3 border border-dark m-3 list-group-item">
        <input class="form-control" type="textarea" id="note-text" placeholder="Note goes here">
        <input class="form-control" type="date" id="date-text">
    <select id="select-criminal" class="criminalDropdown">
        <option value="0">Choose a criminal</option>
        ${names.map(singleObject => {
            return `<option value="${singleObject.id}">${singleObject.name}</option>`
        })}
    </select>
        <button id="saveNote">Save Note</button>
        </div>
    </select>
    `
})}

/* <input class="form-control" type="text" id="suspect-text" placeholder="Suspect Name goes here"></input> */