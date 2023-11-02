/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function () {
  // Get the form and the message div
  const form = document.querySelector(".newsletter form");
  const messageDiv = document.querySelector(".newsletter .message");

  // Listen for the form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the email input value
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value.trim(); // Trim to remove leading/trailing spaces

    // Check if the email is empty
    if (!email) {
      // Display an error message if the email is empty
      messageDiv.textContent = "Please enter a valid email address.";
    } else {
      // Display a success message with the entered email
      messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;

      // You can also reset the form if needed
      form.reset();
    }
  });
});
