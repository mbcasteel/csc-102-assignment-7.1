function strings(){
     // Get values
    let first = document.getElementById("firstName").value;
    let last = document.getElementById("lastName").value;

    // Combine into one string
    let fullName = first + " " + last;

    // Display the result
    document.getElementById("results").textContent = "Full name: " + fullName;
}

function strings() {
    let first = document.getElementById("firstName").value;
    let last = document.getElementById("lastName").value;
    let zip = document.getElementById("zipCode").value;

    // Check ZIP code (must be exactly 5 digits)
    let zipValid = /^\d{5}$/.test(zip);

    if (!zipValid) {
        document.getElementById("results").textContent =
            "ZIP code must be exactly 5 digits.";
        return; // stop the function
    }

    // If ZIP is valid, combine names
    let fullName = first + " " + last;

    //Check if full name is < 20 characters
    if (fullName.length < 20) {
        document.getElementById("results").textContent =
            "Warning: Full name is less than 20 characters (" +
            fullName.length + " characters).";
        return;
    }

    document.getElementById("results").textContent =
        "Full name: " + fullName + " | ZIP: " + zip;
}

