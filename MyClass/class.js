const btn = document.querySelector(".btn");
const icon = document.querySelector(".icon");

btn.addEventListener("click", () => {
  icon.classList.toggle("fa-cart-arrow-down");
  icon.classList.toggle("fa-check");
  icon.classList.toggle("animate");
  icon.classList.toggle("show");
  btn.classList.toggle("active");
});
