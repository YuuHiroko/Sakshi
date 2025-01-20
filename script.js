const correctPassword = "munchkin";

// Display loader and then show the password modal
window.addEventListener("load", () => {
  // Hide the spinner loader after the page is fully loaded
  document.getElementById("loader").style.display = "none";

  // Display the password modal
  document.getElementById("passwordModal").style.display = "flex";
});

// Verify the password and display the content
function verifyPassword() {
  const userPassword = document.getElementById("passwordInput").value; // Get user input
  const errorMessage = document.getElementById("errorMessage"); // Error message element

  if (userPassword === correctPassword) {
    // If password is correct, hide the modal and display the page content
    document.getElementById("passwordModal").style.display = "none";
    document.body.style.display = "block"; // Show the content
  } else {
    // Display an error message for incorrect password
    errorMessage.textContent = "Incorrect password. Please try again.";
  }
}
