// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate password complexity
function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    return passwordRegex.test(password);
}

// Function to validate ID format (must be 8 digits)
function validateID(id) {
    const idRegex = /^\d{8}$/;
    return idRegex.test(id);
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const email = document.getElementById("email").value;
    const id = document.getElementById("id").value;
    const fullName = document.getElementById("full-name").value;
    const birthdate = document.getElementById("birthdate").value;
    const country = document.getElementById("country").value;

    // Perform validation
    const errorMessage = document.getElementById("registration-message");
    errorMessage.innerHTML = ""; // Clear previous error messages

    const registerButton = document.getElementById("register-button");
    registerButton.disabled = true; // Disable register button by default

    const emailErrorMessage = document.getElementById("email-error-message");
    const passwordErrorMessage = document.getElementById("password-error-message");
    const confirmPasswordErrorMessage = document.getElementById("confirm-password-error-message");
    const idErrorMessage = document.getElementById("id-error-message");

    if (!validateEmail(email)) {
        emailErrorMessage.textContent = "Please enter a valid email address.";
    } else {
        emailErrorMessage.textContent = "";
    }

    if (!validatePassword(password)) {
        passwordErrorMessage.textContent = "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long.";
    } else {
        passwordErrorMessage.textContent = "";
    }

    if (password !== confirmPassword) {
        confirmPasswordErrorMessage.textContent = "Passwords do not match.";
    } else {
        confirmPasswordErrorMessage.textContent = "";
    }

    if (!validateID(id)) {
        idErrorMessage.textContent = "ID must be 8 digits.";
    } else {
        idErrorMessage.textContent = "";
    }

    // Enable register button if all validations pass
    if (validateEmail(email) && validatePassword(password) && password === confirmPassword && validateID(id)) {
        registerButton.disabled = false;
    }
    
    // If all validations pass, redirect to login page
    if (registerButton.disabled == false) {
        window.location.href = "login.html";
    }
}