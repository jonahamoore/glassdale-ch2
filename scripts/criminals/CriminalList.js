import { Criminals } from './Criminals.js';
import { getCriminals, useCriminals } from './CriminalDataProvider.js'

const contentTarget = document.querySelector(".convictions-select-container")

export const CriminalList = () => {
    getCriminals()
    .then(() => {

        let criminalArray = useCriminals();

        let criminalHTML = "";

        criminalArray.forEach((singleCrimObj) => {

            criminalHTML += Criminals(singleCrimObj);

        });
       
        contentTarget.innerHTML = criminalHTML
    });
};


