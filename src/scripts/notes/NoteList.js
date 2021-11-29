import { getNotes, useNotes } from "./NoteDataProvider.js"
import { Note } from "./NoteCard.js"
import { NoteForm } from "./NoteForm.js";
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";


const contentTarget = document.querySelector(".print-list")

export const NoteList = () => {
  getNotes()
  .then(getCriminals)
  .then(() => {

    let allTheNotes = useNotes();
    let criminals = useCriminals()

    let noteHTML = "";
   
    allTheNotes.forEach((singleNote) => {
      let singleCriminal = criminals.find(x => singleNote.criminalId === x.id)
      // console.log(singleCriminal)
        noteHTML += Note(singleNote, singleCriminal);
    });

    contentTarget.innerHTML = `
    <h2>Notes</h2>
    ${noteHTML}
    `

  });
};

document.querySelector("#notes-nav-link").addEventListener("click", () => {
  NoteForm()
  NoteList()
})