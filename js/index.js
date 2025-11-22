import { setCookie, getCookie } from "./cookies.js";

window.onload = () => {
  if (getCookie("loggedIn") === "true") {
    window.location.href = "welcome.html";
  }
};

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password && username === "admin" && password === "123") {
    //писати куки
    setCookie("loggedIn", true, 2);
    setCookie("login", username, 2);
    window.location.href = "welcome.html";
  } else {
    alert("Введите логин и пароль!");
  }
}

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", () => {
  login();
});
