// login.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Login script loaded");

    // Example: Simple form validation
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (!username || !password) {
                e.preventDefault();
                alert("Please fill in both fields.");
            }
        });
    }

    // Example: Show/hide password
    const togglePasswordButton = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
    if (togglePasswordButton && passwordInput) {
        togglePasswordButton.addEventListener("click", () => {
            passwordInput.type = passwordInput.type === "password" ? "text" : "password";
            togglePasswordButton.textContent = passwordInput.type === "password" ? "Show Password" : "Hide Password";
        });
    }
});
