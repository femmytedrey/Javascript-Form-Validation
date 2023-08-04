// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("form");
//     const firstNameInput = document.getElementById("fname");
//     const firstNameError = document.getElementById("fname-error");
  
//     form.addEventListener("submit", function (event) {
//       event.preventDefault(); // Prevent form submission for now, we'll handle it manually
  
//       // Clear any previous error message
//       firstNameError.textContent = "";
  
//       // Validation check for First Name
//       if (firstNameInput.value.trim() === "") {
//         firstNameError.textContent = "First Name is required.";
//         firstNameInput.classList.add("error");
//       } else {
//         firstNameInput.classList.remove("error");
//       }
  
//       // If the form is valid, submit it (you can replace this with your desired form submission logic)
//       if (!firstNameError.textContent) {
//         form.submit();
//       }
//     });
  
//     // Event listener to remove error message and red border on input focus
//     firstNameInput.addEventListener("input", function () {
//       if (firstNameInput.classList.contains("error")) {
//         firstNameError.textContent = "";
//         firstNameInput.classList.remove("error");
//       }
//     });
//   });
  
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
        firstNameError.textContent = "First Name is required and must be an alphabet.";
        firstNameInput.style.border = "2px solid red";
      }else if(!isNaN(firstNameInput.value)){
        firstNameError.textContent ="Invalid inputs!";
        firstNameInput.style.border = "2px solid red"
      }
      else{
        firstNameInput.style.border = "2px solid #eaeaea"
      }

      
      if (lastNameInput.value.trim() === "") {
        lastNameError.textContent = "Last Name is required and must be an alphabet.";
        lastNameInput.style.border = "2px solid red";
      } else if(!isNaN(lastNameInput.value)){
        lastNameError.textContent = "Invalid inputs!";
        lastNameInput.style.border = "2px solid red";
      }else {
        lastNameInput.style.border = "2px solid #eaeaea";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(emailInput.value.trim() ===""){
        emailError.textContent = "Email required";
        emailInput.style.border = "2px solid red";
      } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Looks like this is not an email";
        emailInput.style.border = "2px solid red";
      } else{
        emailInput.style.border = "2px solid #eaeaea";
      }

      
    });

    firstNameInput.addEventListener("input", function(){
        firstNameError.textContent = "";
        firstNameInput.style.border = "2px solid #eaeaea"
    })
    lastNameInput.addEventListener("input", function () {
      
        lastNameError.textContent = "";
        lastNameInput.style.border = "2px solid #eaeaea";
    });
    
});
  