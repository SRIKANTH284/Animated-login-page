// Your existing JavaScript code

// Function to show popup with message
function showPopup(message) {
    const popup = document.getElementById("popup-message");
    const popupMessageText = document.getElementById("popup-message-text");
    const closeBtn = document.getElementById("close-btn");

    popupMessageText.textContent = message;
    popup.style.display = "flex";

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Close the popup after 3 seconds (adjust the timeout as needed)
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
}

// Get the sign-in button and add a click event listener
const signinBtn = document.getElementById("signin-btn");
signinBtn.addEventListener("click", () => {
    // Get the username and password inputs
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');

    // Get the entered username and password
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check if credentials are correct
    if (checkCredentials(username, password)) {
        // Display the "User has been authenticated successfully" message as a popup
        showPopup("User has been authenticated successfully!");
    } else {
        // Display the "Authentication failed" message as a popup
        showPopup("Authentication failed. Please check your credentials.");
    }
});

// Get the sign-up with Google button and add a click event listener
const googleSignupBtn = document.getElementById("google-signup-btn");
googleSignupBtn.addEventListener("click", () => {
    // Add your code here to handle the sign-up with Google functionality
    // For example, you can redirect the user to a Google sign-up page
    // window.location.href = "https://www.google.com";
});
