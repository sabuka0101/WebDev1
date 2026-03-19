const btn = document.querySelector(".btn");
const box = document.querySelector(".box");
const top = document.querySelector(".top");
const middle = document.querySelector(".middle");
const bottom = document.querySelector(".bottom");
const container = document.getElementById("main");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  box.classList.toggle("top");
  box.classList.toggle("bottom");
  box.classList.toggle("middle");
});
