function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password && username === "admin" && password === "123") {
    //localStorage.setItem("loggedIn", "true");
    //писати куки
    window.location.href = "welcome.html";
  } else {
    alert("Введите логин и пароль!");
  }
}

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", () => {
  login();
});
