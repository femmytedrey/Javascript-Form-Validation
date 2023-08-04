document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const firstNameInput = document.getElementById("fname");
    const firstNameError = document.getElementById("fname-error")
    const lastNameInput = document.getElementById("lname");
    const lastNameError = document.getElementById("lname-error");
    const emailInput = document.getElementById("Email");
    const emailError = document.getElementById("email-error")
    const passwordInput = document.getElementById("userpassword");
    const passwordError = document.getElementById("userpassword-error");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Clear any previous error message
      firstNameError.textContent = "";
      lastNameError.textContent = "";
      emailError.textContent = "";
      passwordError.textContent = "";

      

      if (firstNameInput.value.trim() === ""){
        firstNameError.textContent = "First Name cannot be empty.";
        firstNameInput.style.border = "2px solid red";
      }else if(!isNaN(firstNameInput.value)){
        firstNameError.textContent ="Invalid inputs!";
        firstNameInput.style.border = "2px solid red"
      }
      else{
        firstNameInput.style.border = "2px solid #eaeaea"
      }

      
      if (lastNameInput.value.trim() === "") {
        lastNameError.textContent = "Last Name cannot be empty.";
        lastNameInput.style.border = "2px solid red";
      } else if(!isNaN(lastNameInput.value)){
        lastNameError.textContent = "Invalid inputs!";
        lastNameInput.style.border = "2px solid red";
      }else {
        lastNameInput.style.border = "2px solid #eaeaea";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(emailInput.value.trim() ===""){
        emailError.textContent = "Email cannot be empty";
        emailInput.style.border = "2px solid red";
      } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Looks like this is not an email";
        emailInput.style.border = "2px solid red";
      } else{
        emailInput.style.border = "2px solid #eaeaea";
      }

      if(passwordInput.value.trim() === ""){
        passwordError.textContent = "Password cannot be empty.";
        passwordInput.style.border = "2px solid red";
      } else if(passwordInput.value.length < 6){
        passwordError.textContent = "Password should not be less than 6 characters";
        passwordInput.style.border = "2px solid red";
      } else {
        emailInput.style.border = "2px solid #eaeaea";
      }

      
    });

    firstNameInput.addEventListener("input", function(){
        firstNameError.textContent = "";
        firstNameInput.style.border = "2px solid #eaeaea"
    });
    lastNameInput.addEventListener("input", function () {
      
        lastNameError.textContent = "";
        lastNameInput.style.border = "2px solid #eaeaea";
    });
    emailInput.addEventListener("input", function(){
        emailError.textContent = "";
        emailInput.style.border = "2px solid #eaeaea"
    });
    passwordInput.addEventListener("input", function(){
        passwordError.textContent = "";
        passwordInput.style.border = "2px solid #eaeaea"
    })

    
});
  