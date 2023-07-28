//inputs
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("confirmPassword");
// Boxes & Buttons
var signUpButton = document.getElementById("signUp")
var okButton = document.getElementById("ok")
var registrationAlert = document.getElementById("registrationAlert")
var validationBoxInfo = document.getElementById("ValidationBoxInfo")
//Arrays
var users = [];
// Regex
var nameRegex = /^\D{3,}$/;
var emailRegex = /^\w+@(\w{2,256})(\.\w{2,6})$/;
var passRegex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?\/_₹]).{6,32}$/;



// Get Users Array from Local Storage
if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

//Sign Up
signUpButton.addEventListener("click", signup)

function signup() {
  if (checkForDuplicatesEmail() == true) {
    validationBoxInfo.innerHTML = `<h6>Email address is already registered</h6>`
  }
  else if (validateNameInput() && validateEmailInput() && validatePasswordInput() && validateConfirmPasswordInput()) {
    var user = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    clear();
    registrationAlert.classList.replace("d-none", "d-block")
  }
  else {
    validationBoxInfo.innerHTML = `<h6>Please enter a valid data !!</h6>`
  }
}

//  Registration Alert Button
okButton.addEventListener("click", function () { window.location.href = "index.html" })

// Email Duplicate Checker
function checkForDuplicatesEmail() {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase() == emailInput.value.toLowerCase()) {
      return true;
    }
  }
}

//Name Validation
nameInput.addEventListener("blur", validateNameInput)

function validateNameInput() {
  if (nameRegex.test(nameInput.value)) {
    nameInput.classList.replace("is-invalid", "is-valid")
    validationBoxInfo.innerHTML = ``
    return true;
  }
  else {
    nameInput.classList.add("is-invalid")
    validationBoxInfo.innerHTML = `
    <li>The Name must contain at least 3 characters.</li>
    <li>The Name must not contain any Digit</li>
    `
  }
}

//Email Validation
emailInput.addEventListener("blur", validateEmailInput)

function validateEmailInput() {
  if (emailRegex.test(emailInput.value)) {
    emailInput.classList.replace("is-invalid", "is-valid")
    validationBoxInfo.innerHTML = ``
    return true;
  }
  else {
    emailInput.classList.add("is-invalid")
    validationBoxInfo.innerHTML = `<h6>Please enter a valid email address</h6>`
  }
}

//password Validation
passwordInput.addEventListener("blur", validatePasswordInput)

function validatePasswordInput() {
  if (passRegex.test(passwordInput.value)) {
    passwordInput.classList.replace("is-invalid", "is-valid")
    validationBoxInfo.innerHTML = ``
    return true;
  }
  else {
    passwordInput.classList.add("is-invalid")
    validationBoxInfo.innerHTML = `
    <li>Password must not contain Whitespaces.</li>
    <li>Password must have at least one Uppercase Character.</li>
    <li>Password must have at least one Lowercase Character.</li>
    <li>Password must contain at least one Digit.</li>
    <li>Password must contain at least one Special Symbol.</li>
    <li>Password must be 6-32 Characters Long.</li>
    `;
  }
}

// Confirm Password Validation
confirmPasswordInput.addEventListener("blur", validateConfirmPasswordInput)

function validateConfirmPasswordInput() {
  if (confirmPasswordInput.value == passwordInput.value) {
    confirmPasswordInput.classList.replace("is-invalid", "is-valid")
    validationBoxInfo.innerHTML = ``
    return true;
  }
  else {
    confirmPasswordInput.classList.add("is-invalid")
    validationBoxInfo.innerHTML = `<h6>Passwords do NOT match</h6>`;
  }
}

// clear signup inputs
function clear() {
  nameInput.value = ""
  emailInput.value = ""
  passwordInput.value = ""
  confirmPasswordInput.value = ""
}