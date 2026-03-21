const btn = document.querySelector(".btn");
const box = document.querySelectorAll(".box");
const container = document.querySelector(".main");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  box[0].classList.toggle("top");
  box[1].classList.toggle("middle");
  box[2].classList.toggle("bottom");
  container.classList.toggle("opened");
});
