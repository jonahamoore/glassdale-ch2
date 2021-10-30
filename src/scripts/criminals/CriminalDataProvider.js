let criminals = []

export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(crims => crims.json())
        .then(criminalScum => {
            console.table(criminalScum)
            criminals = criminalScum
        })
}