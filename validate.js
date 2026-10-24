
const form = document.getElementById("signupForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const goalInput = document.getElementById("goal");
const passwordInput = document.getElementById("password");

function isEmpty(value) {
    return value.trim() === "";
}

function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function isStrongPassword(password) {
    return password.length >= 8;
}

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
    });

    document.getElementById("successMessage").textContent = "";
}

function validateForm() {
    let isValid = true;
    clearErrors();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const goal = goalInput.value;
    const password = passwordInput.value;

    if (isEmpty(name)) {
        showError("nameError", "Name is required");
        isValid = false;
    } else if (name.length < 3) {
        showError("nameError", "Name must have at least 3 characters");
        isValid = false;
    }

    if (isEmpty(email)) {
        showError("emailError", "Email is required");
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError("emailError", "Enter a valid email address");
        isValid = false;
    }

    if (isEmpty(goal)) {
        showError("goalError", "Please select a fitness goal");
        isValid = false;
    }

    if (isEmpty(password)) {
        showError("passError", "Password is required");
        isValid = false;
    } else if (!isStrongPassword(password)) {
        showError("passError", "Password must have at least 8 characters");
        isValid = false;
    }

    return isValid;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validateForm()) {
        document.getElementById("successMessage").textContent =
            "Signup successful! Welcome to FitZone.";

        form.reset();
    }
});
