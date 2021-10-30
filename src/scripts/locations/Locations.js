export const Location = (Object) => {
    return `
        <section class="location-card">
            <div class="location_id">${Object.id}</div>
            <div class="location_fac">${Object.facilityName}</div>
            <div class="location_secur">${Object.securityLevel}</div>
            <div class="location_cap">${Object.capacity}</div>
        </section>
        `
}