// admin_dashboard.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Admin Dashboard script loaded");

    // Example: Load user statistics dynamically (replace with actual data fetching if needed)
    const userStatsButton = document.getElementById("loadUserStats");
    if (userStatsButton) {
        userStatsButton.addEventListener("click", () => {
            alert("Loading user statistics...");
            // Load and display stats here
        });
    }

    // Example: Toggle visibility of admin sections
    const adminSections = document.querySelectorAll(".admin-section");
    adminSections.forEach((section) => {
        section.addEventListener("click", () => {
            section.classList.toggle("expanded");
        });
    });
});
