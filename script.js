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


// Function to enable or disable the registration button based on validation
function updateRegisterButtonState() {
    console.log("updateRegisterButtonState function called");
    // Get form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const email = document.getElementById("email").value;
    const id = document.getElementById("id").value;

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Email:", email);
    console.log("ID:", id);

    // Get error message elements
    const emailErrorMessage = document.getElementById("email-error-message");
    const passwordErrorMessage = document.getElementById("password-error-message");
    const confirmPasswordErrorMessage = document.getElementById("confirm-password-error-message");
    const idErrorMessage = document.getElementById("id-error-message");

    // Get register button
    const registerButton = document.getElementById("register-button");

    // Validate email
    if (!validateEmail(email)) {
        console.log("Email validation failed");
        emailErrorMessage.textContent = "Please enter a valid email address.";
        registerButton.disabled = true;
        return;
    } else {
        emailErrorMessage.textContent = "";
    }

    // Validate password
    if (!validatePassword(password)) {
        console.log("Password validation failed");
        passwordErrorMessage.textContent = "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long.";
        registerButton.disabled = true;
        return;
    } else {
        passwordErrorMessage.textContent = "";
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        console.log("Confirm password validation failed");
        confirmPasswordErrorMessage.textContent = "Passwords do not match.";
        registerButton.disabled = true;
        return;
    } else {
        confirmPasswordErrorMessage.textContent = "";
    }

    // Validate ID
    if (!validateID(id)) {
        console.log("ID validation failed");
        idErrorMessage.textContent = "ID must be 8 digits.";
        registerButton.disabled = true;
        return;
    } else {
        idErrorMessage.textContent = "";
    }

    // If all validations pass, enable register button
    registerButton.disabled = false;
}



// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Additional validation before submission
    if (!document.getElementById("register-button").disabled) {
        // Form submission code here
        console.log("Form submitted successfully.");
        window.location.href = "login.html"; // Redirect to login page
    } else {
        console.log("Form submission failed due to validation errors.");
    }
}

// Add event listeners to input fields to update register button state
document.getElementById("username").addEventListener("input", updateRegisterButtonState);
document.getElementById("password").addEventListener("input", updateRegisterButtonState);
document.getElementById("confirm-password").addEventListener("input", updateRegisterButtonState);
document.getElementById("email").addEventListener("input", updateRegisterButtonState);
document.getElementById("id").addEventListener("input", updateRegisterButtonState);

// Add event listener to registration form submit button
document.getElementById("registration-form").addEventListener("submit", handleSubmit);
