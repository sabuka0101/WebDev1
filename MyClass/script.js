const form = document.querySelector("form");
const username = document.form.username;
const password = document.form.password;
const message = document.getElementById("error-message");

function Login(event) {
  event.preventDefault();

  if (username.value === "" || password.value === "") {
    message.textContent = "Please fill all the inputs";
    message.style.color = "rgb(238, 56, 56)";
  } else if (username.value.length <= 4) {
    message.textContent = "Username length must be more than 4";
    message.style.color = "rgb(238, 56, 56)";
  } else if (password.value.length <= 6) {
    message.textContent = "Password length must be more than 6";
    message.style.color = "rgb(238, 56, 56)";
  } else {
    message.textContent = "Login successful";
    message.style.color = "rgb(28, 179, 28)";
  }
}
