let locations = []

export const useLocations = () => {
    return locations.slice()
}

export const getLocations = () => {
    return fetch("https://criminals.glassdale.us/facilities")
        .then(badPlaces => badPlaces.json())
        .then(location => {
            console.table(location)
            locations = location
        })
}