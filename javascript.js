// script.js

// This function simulates a login check. Replace with your actual login check logic.
function isLoggedIn() {
    // Check if user login data is stored in cookies or local storage
    return localStorage.getItem('loggedIn') === 'true';
}

// This function will simulate the user logging in.
// In a real application, this would involve setting a session on the server side.
function login() {
    // Set 'loggedIn' to true in local storage
    localStorage.setItem('loggedIn', 'true');
    // Update the UI
    updateLoginStatus();
}

// This function will simulate the user logging out.
function logout() {
    // Remove 'loggedIn' from local storage
    localStorage.removeItem('loggedIn');
    // Update the UI
    updateLoginStatus();
}

// This function updates the visibility of login/logout links based on the login status.
function updateLoginStatus() {
    const loginLink = document.getElementById('login-link');
    const logoutLink = document.getElementById('logout-link');
    if (isLoggedIn()) {
        loginLink.style.display = 'none';
        logoutLink.style.display = 'block';
    } else {
        loginLink.style.display = 'block';
        logoutLink.style.display = 'none';
    }
}

// Add event listeners to login and logout actions.
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button'); // Your login form submit button
    const logoutButton = document.getElementById('logout-button'); // Your logout link

    if (loginButton) {
        loginButton.addEventListener('click', function(event) {
            event.preventDefault();
            login();
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault();
            logout();
        });
    }

    // Update the UI based on the current login status on page load
    updateLoginStatus();
});
