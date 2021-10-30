import { Location } from "./Locations.js";
import { getLocations, useLocations  } from "./LocationDataProvider.js";

const contentTarget = document.querySelector("#contentcontainer")

export const LocationList = () => {
    getLocations()
    .then(() => {

        let allTheLocations = useLocations();

        let locationHTML = "";

        allTheLocations.forEach((singleLocation) => {

            locationHTML += Location(singleLocation);

        });
       
        contentTarget.innerHTML = locationHTML
    
    });
};

document.querySelector("#facilities-nav-link").addEventListener("click", () => {
    console.log("facilities") 
    LocationList()
})