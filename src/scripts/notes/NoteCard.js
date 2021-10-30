// "id": 1,
// "noteText": "Este's a friend of mine",
// "dateOfNote": "10/25/2021",
// "suspect": "Este's husband",

export const Note = (Object) => {
    return `
        <div class="col-sm-3 border border-dark m-3 list-group-item">
        <h3>Suspect: ${Object.suspect}</h3>
        <p>Note Text: ${Object.noteText}</p>
        <p>Date: ${new Date(Object.dateOfNote).toLocaleDateString('en-US')}</p>
        </div>
    `
}