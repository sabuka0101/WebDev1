import { cardsInfo } from "./data.js";
const cards = document.getElementById("cards");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

for (let i = 0; i < cardsInfo.length; i++) {
  const isInCart = cart.some((item) => item.id === cardsInfo[i].id);

  const iconClass = isInCart ? "fa-check" : "fa-cart-arrow-down";
  const activeClass = isInCart ? "active" : "";
  cards.innerHTML += `<div class="card">
   <img class="cardImg" src="${cardsInfo[i].img}"/>
   <p class="cardTitle">${cardsInfo[i].title}</p>
   <p class="cardDescription">${cardsInfo[i].description}</p>
   <p class="cardPrice">$${cardsInfo[i].price}.00</p>
   <div class="cardBtns">
    <button class="buyBtn">Buy Now</button>
    <button class="addBtn ${activeClass}" data-id=${cardsInfo[i].id}><i class="fa-solid ${iconClass} icon"></i></button>
   </div>
  </div>`;
}

const addBtn = document.querySelectorAll(".addBtn");
addBtn.forEach((addbtn) => {
  addbtn.addEventListener("click", () => {
    const icon = addbtn.querySelector(".icon");
    icon.classList.toggle("fa-cart-arrow-down");
    icon.classList.toggle("fa-check");
    icon.classList.toggle("animate");
    icon.classList.toggle("show");
    addbtn.classList.toggle("active");
    const dataId = parseInt(addbtn.getAttribute("data-id"));
    const product = cardsInfo.find((item) => item.id === dataId);
    const itemIndex = cart.findIndex((item) => item.id === dataId);

    if (itemIndex === -1) {
      cart.push(product);
    } else {
      cart.splice(itemIndex, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  });
});
const buyBtn = document.querySelectorAll(".buyBtn");
buyBtn.forEach((buybtn) => {
  buybtn.addEventListener("click", () => {
    console.log("item is adding to cart");
  });
});
