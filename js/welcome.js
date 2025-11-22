import { getCookie } from "./cookies.js";
window.onload = () => {
  if (getCookie("loggedIn") !== "true") {
    window.location.href = "index.html";
  } else {
    const login = document.getElementById("login");
    login.textContent = getCookie("login");
  }
};

function logout() {
  window.location.href = "index.html";
}
