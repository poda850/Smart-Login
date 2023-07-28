//inputs
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
// Boxes & Buttons 
var loginButton = document.getElementById("login")
var passwordVisiablityButton = document.getElementById("passwordVisiablity")
var validationBoxInfo = document.getElementById("ValidationBoxInfo")
//Arrays
var users = [];
var checkedUser = [];



// Get Users Array from Local Storage
if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

//Login
loginButton.addEventListener("click", login)

function login() {
  if (emailInput.value == "" || passwordInput.value == "") {
    validationBoxInfo.innerHTML = `<h6>All inputs is required</h6>`
  } else if (check() == true) {
    window.location.href = "Home.html"
  }
  else {
    validationBoxInfo.innerHTML = `<h6>incorrect email or password</h6>`
  }
}

// Email & Password Checker
emailInput.addEventListener("blur", check)
passwordInput.addEventListener("blur", check)

function check() {
  for (var i = 0; i < users.length; i++) {
    if (emailInput.value == "" || passwordInput.value == "") {
      validationBoxInfo.innerHTML = `<h6>All inputs is required</h6>`
    } else if (users[i].email.toLowerCase() == emailInput.value.toLowerCase() && users[i].password == passwordInput.value) {
      checkedUser.splice(0, 1, users[i])
      localStorage.setItem("checkeduser", JSON.stringify(checkedUser))
      return true;
    }
  }
}

// password Visiablity Button
passwordVisiablityButton.addEventListener("click", function () {
  if (passwordInput.type == "password") {
    passwordInput.type = "text"
    passwordVisiablityButton.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
  }
  else if (passwordInput.type == "text") {
    passwordInput.type = "password"
    passwordVisiablityButton.innerHTML = `<i class="fa-solid fa-eye"></i>`
  }
})