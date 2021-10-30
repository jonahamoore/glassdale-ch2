import { OfficerList } from "./officers/OfficerList.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { LocationList } from "./locations/LocationList.js"
import { NoteForm } from "./notes/NoteForm.js"
// import { useConvictions } from "./ConvictProvider.js"
import { ConvictionSelect } from "./Convict/ConvictionSelect.js"
import { officerSelected } from "./officers/OfficerSelect.js"



// OfficerList()
// CriminalList()
// LocationList()

NoteForm()
ConvictionSelect()
officerSelected()

const darkModeButton = document.querySelector("#dark-mode")
darkModeButton.addEventListener("click", function(){
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
  
    // Add a class
    bodyElement.classList.toggle("dark-background")
  })
  