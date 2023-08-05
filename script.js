document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const inputBoxes = document.querySelectorAll(".input-box");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    inputBoxes.forEach((inputBox) => {
      const input = inputBox.querySelector("input");
      const errorElement = inputBox.querySelector(".error-message");
      errorElement.textContent = "";
      inputBox.classList.remove("error");
    });

    const firstNameInput = document.getElementById("fname");
    const firstNameError = document.getElementById("fname-error");
    const lastNameInput = document.getElementById("lname");
    const lastNameError = document.getElementById("lname-error");
    const emailInput = document.getElementById("Email");
    const emailError = document.getElementById("email-error");
    const passwordInput = document.getElementById("userpassword");
    const passwordError = document.getElementById("userpassword-error");

    if (firstNameInput.value.trim() === "") {
      displayErrorMessage(firstNameError, "First Name cannot be empty.");
    } else if (!isNaN(firstNameInput.value)) {
      displayErrorMessage(firstNameError, "Invalid inputs!");
    }

    if (lastNameInput.value.trim() === "") {
      displayErrorMessage(lastNameError, "Last Name cannot be empty.");
    } else if (!isNaN(lastNameInput.value)) {
      displayErrorMessage(lastNameError, "Invalid inputs!");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      displayErrorMessage(emailError, "Email cannot be empty.");
    } else if (!emailRegex.test(emailInput.value)) {
      displayErrorMessage(emailError, "Looks like this is not an email.");
    }

    if (passwordInput.value.trim() === "") {
      displayErrorMessage(passwordError, "Password cannot be empty.");
    } else if (passwordInput.value.length < 6) {
      displayErrorMessage(passwordError, "Password should not be less than 6 characters.");
    }
  });

  function displayErrorMessage(errorElement, message) {
    errorElement.textContent = message;
    errorElement.parentElement.classList.add("error");
  }

  inputBoxes.forEach((inputBox) => {
    const input = inputBox.querySelector("input");
    const errorElement = inputBox.querySelector(".error-message");
    input.addEventListener("input", function () {
      errorElement.textContent = "";
      inputBox.classList.remove("error");
    });
  });
});
