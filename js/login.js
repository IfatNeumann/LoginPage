const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

const usersToPasswords = {
    ifat:"qwerty",
    rotem:"123456",
    chen:"ILoveJustinBieber"
};

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {

    // Prevent the default submission of the form
    e.preventDefault();

    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    if (username in usersToPasswords && usersToPasswords[username] === password) {

        // If the credentials are valid, show an alert box and reload the page
        alert("You have successfully logged in.");
        window.location.replace("html/otherpage.html");
    } else {
        
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
    }
})