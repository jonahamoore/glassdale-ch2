import { Officer } from "./Officer.js";
import { getOfficers, useOfficers } from "./OfficerDataProvider.js";

const contentTarget = document.querySelector("#contentcontainer")


document.querySelector("#officers-nav-link").addEventListener("click", () => {
  OfficerList()

})

export const OfficerList = (officerSelected) => {
  let officerListContainer = document.querySelector(".officer-list");

  officerListContainer.innerHTML = ""

  getOfficers()
  .then(() => {
    let officerArray = useOfficers();

    if (officerSelected){
      officerArray = officerArray.filter(singleOfficerInLoop => {
        return singleOfficerInLoop.name === officerSelected
      })
}

officerArray.forEach((singleOfficer) => {
  officerListContainer.innerHTML += Officer(singleOfficer)
});

})
}