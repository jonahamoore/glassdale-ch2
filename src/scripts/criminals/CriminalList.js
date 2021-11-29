import { Criminals } from './Criminals.js';
import { getCriminals, useCriminals } from './CriminalDataProvider.js'

const contentTarget = document.querySelector(".print-list")

export const CriminalList = () => {
    getCriminals()
    .then(() => {

        let criminalArray = useCriminals();

        let criminalHTML = "";

        criminalArray.forEach((singleCrimObj) => {

            criminalHTML += Criminals(singleCrimObj);

        });
       
        contentTarget.innerHTML = `
        <h2>Criminals</h2>
        ${criminalHTML}`
    });
};

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    CriminalList()
})

// two const with the same name
export const Criminallist = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
}




// const contentTarget = document.querySelector("#contentcontainer")

// export const CriminalList = (dropdownSelector, chosenFilter) => {
//     let criminalListContainer = document.querySelector(".criminal-list");
//     criminalListContainer.innerHTML = ""

//     getCriminals()
//     .then (() => {
//         let criminalArray = useCriminals ();

//         if(dropdownSelector === "crime"){
//             criminalArray = criminalArray.filter(singleCriminalInLoop => {
//                 return singleCriminalInLoop.conviction === chosenFilter
//             })
//         } else if(dropdownSelector === "officer") {
//             criminalArray = criminalArray.filter(singleOfficerInLoop => {
//                 return singleOfficerInLoop.arrestingOfficer === chosenFilter
//             })
//         }
//     criminalArray.forEach((singleCriminal) => {
//         criminalListContainer.innerHTML += Criminals(singleCriminal);
//     });
//     });
// };
