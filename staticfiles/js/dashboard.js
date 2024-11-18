// dashboard.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Dashboard script loaded");

    // Example: Toggle visibility for different dashboard sections
    const sections = document.querySelectorAll(".dashboard-section");
    sections.forEach((section) => {
        section.addEventListener("click", () => {
            section.classList.toggle("expanded");
        });
    });

    // Example: Filter items based on a dropdown selection
    const filterDropdown = document.getElementById("filterDropdown");
    if (filterDropdown) {
        filterDropdown.addEventListener("change", () => {
            const filterValue = filterDropdown.value;
            alert(`Filtering by: ${filterValue}`);
            // Apply filtering logic here
        });
    }
});
