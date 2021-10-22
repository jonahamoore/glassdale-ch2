import { Locations } from "./Locations.js";
import { getLocations, useLocations  } from "./LocationDataProvider.js";

const contentTarget = document.querySelector(".location")

export const locationList = () => {
    getLocations()
    .then(() => {

        let locationArray = useLocations();

        let locationHTML = "";

        locationArray.forEach((singleLocationObj) => {

            locationHTML += Locations(singleLocationObj);

        });
       
        contentTarget.innerHTML = locationHTML
    });
};

