import { getNotes, useNotes } from "./NoteDataProvider.js"
import { Note } from "./NoteCard.js"

const contentTarget = document.querySelector(".print-list")

export const NoteList = () => {
  getNotes()
  .then(() => {

    let allTheNotes = useNotes();

    let noteHTML = "";
   
    allTheNotes.forEach((singleNote) => {

        noteHTML += Note(singleNote);
    });

    contentTarget.innerHTML = `
    <h2>Notes</h2>
    ${noteHTML}`

  });
};

document.querySelector("#notes-nav-link").addEventListener("click", () => {
  NoteList()
})