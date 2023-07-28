// Boxes & Buttons 
var logoutButton = document.getElementById("logout")
//Arrays
var checkedUser = [];



// Get Users Array from Local Storage
if (localStorage.getItem("checkeduser") != null) {
  checkedUser = JSON.parse(localStorage.getItem("checkeduser"));
  document.getElementById("userName").innerHTML = `${checkedUser[0].name}`
}

//Logout
logoutButton.addEventListener("click", function () {
  window.location.href = "index.html"
  checkedUser.splice(0, 1)
  localStorage.setItem("checkeduser", JSON.stringify(checkedUser))
})