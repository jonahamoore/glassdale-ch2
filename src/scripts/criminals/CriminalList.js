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
