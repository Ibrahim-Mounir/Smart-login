var signUpName = document.getElementById("name");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var alertMsg = document.getElementById("alertMsg");
var signUpBtn = document.getElementById("signUp");

var usersList = [];
if (localStorage.getItem("UsersList") != null) {
  usersList = JSON.parse(localStorage.getItem("UsersList"));
}

signUpBtn.addEventListener("click", function () {
  if (isEmpty() == false) {
    if (isExist() != true) {
      var user = {
        userName: signUpName.value,
        email: signUpEmail.value,
        password: signUpPassword.value,
      };

      usersList.push(user);
      localStorage.setItem("UsersList", JSON.stringify(usersList));
      getAlertMsg("Success", "green");
      location.href = "login.html";
      clear();

      console.log(usersList);
    } else {
      getAlertMsg("This email already exists", "red");
    }
  } else {
    getAlertMsg("All Inputs are required", "red");
  }
});
function getAlertMsg(text, color) {
  alertMsg.innerHTML = text;
  alertMsg.classList.replace("d-none", "d-block");
  alertMsg.style.color = color;
}
function isEmpty() {
  if (
    signUpEmail.value == "" ||
    signUpName.value == "" ||
    signUpPassword.value == ""
  ) {
    return true;
  } else {
    return false;
  }
}
function isExist() {
  for (let i = 0; i < usersList.length; i++) {
    if (usersList[i].email == signUpEmail.value) {
      return true;
    }
  }
}
function clear() {
  signUpEmail.value = "";
  signUpName.value = "";
  signUpPassword.value = "";
}
