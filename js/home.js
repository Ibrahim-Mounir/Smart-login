var welcomeMsg = document.getElementById("welcomeMsg");
var logOutBrn = document.getElementById("logOut");
var userName = localStorage.getItem("userName");
if (userName) {
  welcomeMsg.innerHTML = `Welcome ${userName}`;
}
logOutBrn.addEventListener("click", function () {
  location.href = "login.html";
  localStorage.removeItem("userName");
});
