var signInEmail = document.getElementById("signInEmail");
var signInPassword = document.getElementById("signInPassword");
var signInBtn = document.getElementById("logIn");
var alertMsg = document.getElementById("alertMsg");
var userName;
var usersList = [];
if (localStorage.getItem("UsersList")) {
  usersList = JSON.parse(localStorage.getItem("UsersList"));
}

signInBtn.addEventListener("click", function () {
  if (isEmpty() == true) {
    getAlertMsg("All inputs are required", "red");
  } else {
    if (isExist() == true) {
      location.href = "home.html";
      getAlertMsg("Success", "green");
    } else {
      getAlertMsg("Email or password is not correct", "red");
    }
  }
});

function isEmpty() {
  if (signInEmail.value == "" || signInPassword.value == "") {
    return true;
  } else {
    return false;
  }
}
function getAlertMsg(text, color) {
  alertMsg.innerHTML = text;
  alertMsg.classList.replace("d-none", "d-block");
  alertMsg.style.color = color;
}
function isExist() {
  for (var i = 0; i < usersList.length; i++) {
    if (
      usersList[i].email == signInEmail.value &&
      usersList[i].password == signInPassword.value
    ) {
      localStorage.setItem("userName", usersList[i].userName);
      return true;
    }
  }
}
