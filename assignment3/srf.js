function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    message.textContent = ""; // Clear previous messages

    // Username validation
    if (username.length < 3) {
        message.textContent = "Username must be at least 3 characters long.";
        return false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        return false;
    }

    // Phone number validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        message.textContent = "Phone number must be 10 digits.";
        return false;
    }

    // Password validation
    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters long.";
        return false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        return false;
    }

    // If all validations pass
    alert("Registration Successful!");
    return true; // Allow form submission
}
