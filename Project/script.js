import { cartInfo, cardsInfo } from "./data.js";
const cards = document.getElementById("cards");

for (let i = 0; i < cardsInfo.length; i++) {
  cards.innerHTML += `<div class="card">
  <img class="cardImg" />
  <p class="cardTitle">${cardsInfo[i].title}</p>
  <p class="cardDescription">${cardsInfo[i].description}</p>
  <p class="cardPrice">$${cardsInfo[i].price}.00</p>
  <button class="cardBtn">Add to cart</button>
  </div>`;
}
const addBtn = document.querySelectorAll(".cardBtn");
addBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("item is adding to cart");
  });
});
