import { getOfficers, useOfficers } from "./OfficerDataProvider.js";
import { CriminalList } from "../criminals/CriminalList.js";

const contentTarget = document.querySelector(".officer-dropdown")

export const officerSelected = () => {
    getOfficers()
    .then(() => {
        const officers = useOfficers();
        // let convictionHTML = "";
        render(officers)
        })
    }

const render = officerCollection => {

    contentTarget.innerHTML = `
        <select class="dropdown" class="officer-dropdown">
            <option value="0">Please select an officer...</option>
            ${
                officerCollection.map(officerObject => {
                    const officerName = officerObject.name
                    return `<option> ${officerName}</option>`
                })
            }
        </select>
    `
}

// document.querySelector("#officers-nav-link").addEventListener("click", () => {
//     officerCollection()
// })


const eventHub = document.querySelector("body")
eventHub.addEventListener("change", (eventObject) => {

    if(eventObject.target.id === "officerSelect"){
        // console.log("You selected something from the officer dropdown")
        // console.log("This is the officer that was selected: ", officereventObject.target.value)
        // const selectedOfficer = eventObject.target.value
        CriminalList ("officer", eventObject.target.value)
    }
})