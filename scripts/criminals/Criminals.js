export const Criminals = (Object) => {
    return `
    <section class="Crim-Card">
    <ul class= "list-of-crims">
        <li ="criminals_name">${Object.name}</li>
        <li ="criminals_age"> Age:${Object.age}</li>
        <li ="criminals_Crime"> Crime: ${Object.conviction}</li>
        <li ="criminals_startDate">Term start:${new Date(Object.incarceration.start).toLocaleDateString('en-US')}</li>
        <li ="criminals_endDate">Term end: ${new Date(Object.incarceration.end).toLocaleDateString('en-US')}</li>
    </ul>
</section>
`    
}

