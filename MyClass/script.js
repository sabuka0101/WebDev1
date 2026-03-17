const cardsInfo = [
  {
    title: "MMA Gloves",
    price: 60,
    description: "This is really great MMA Gloves for sparring",
  },
  {
    title: "Boxing Gloves",
    price: 75,
    description: "This is really great Boxing Gloves for sparring",
  },
];

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
