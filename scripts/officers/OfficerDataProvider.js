let officers = []

export const useOfficers = () => {
    return officers.slice()
}



export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers") // Return is Dirty Money
    .then(dirtyMoney => dirtyMoney.json())  // Cleans our money
    .then(taco => {
        // fills our officers array with the array from the API
        console.table(taco)
        officers = taco
    })
}

