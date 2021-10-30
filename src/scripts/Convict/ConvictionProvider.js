let convictions = []

export const useConvictions = () => {
    return convictions.slice()
}

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
    .then(crimes => crimes.json())
    .then(convictedCrims => {
        console.table(convictedCrims)
        convictions = convictedCrims
    })
   
}

 /*
        Load database state into application state with a fetch().
        Make sure the last `then()` sets the local `convictions`
        variable to what is in the response from the API.
    */