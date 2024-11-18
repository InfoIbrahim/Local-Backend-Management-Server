// global.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Global script loaded");

    // Example: Utility function to toggle visibility of elements by ID
    window.toggleVisibility = function (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = element.style.display === "none" ? "block" : "none";
        }
    };
    
    // Example: Smooth scroll to top function
    window.scrollToTop = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});
