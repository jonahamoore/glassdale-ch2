import { getConvictions, useConvictions } from "./ConvictionProvider.js"
import { CriminalList } from "../criminals/CriminalList.js"
/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */

// Get a reference to the DOM element where the <select> will be rendered

const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    getConvictions()
    .then(() => {
        let convictionArray = useConvictions();
        // let convictionHTML = "";
        render(convictionArray)
        })
    }

    // const convictions = useConvictions()
    // render(convictions)
/*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
const render = convictionsCollection => {

    
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(crimeObject => {
                    const crimeType = crimeObject.name
                    return `<option> ${crimeType}</option>`
                })
            }
        </select>
    `
}

document.querySelector("#notes-nav-link").addEventListener("click", () => {
    convictionsCollection()
})

const eventHub = document.querySelector("body")
eventHub.addEventListener("change", (eventObject) => {

    if(eventObject.target.id === "crimeSelect"){
        // console.log("You selected something from the crime dropdown")
        // console.log("This is the crime that was selected: ", eventObject.target.value)
        // const selectedCrime = eventObject.target.value
        CriminalList ("crimes", eventObject.target.value)
    }
})

/*
        - When we select a crime, we need to filter the criminals in CriminalList.
        - Start by importing the CriminalList component at the top of this file.
        - Then call CriminalList, and pass in information about the crime that was chosen
        */



  
