export const Locations = (Objects) => {
    return `
        <section>
        <div class="location_id"${Objects.id}</div>
        <div class="location_fac"${Objects.facility}</div>
        <div class="location_secur"${Objects.securityLevel}</div>
        <div class="location_cap"${Objects.capacity}
        </section>
        `
}