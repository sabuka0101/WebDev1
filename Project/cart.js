const cartContainer = document.querySelector(".card");
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const total = document.getElementById("total");
const subTotal = document.getElementById("subTotal");
const shipping = document.getElementById("shipping");
let totalPrice = 0;
let subTotalPrice = 0;
let shippingPrice = 10;
totalPrice += shippingPrice;
if (cart.length > 0) {
  shipping.textContent = `$${shippingPrice}.00`;
}

for (let i = 0; i < cart.length; i++) {
  totalPrice += cart[i].price;
  subTotalPrice += cart[i].price;
  subTotal.textContent = `$${subTotalPrice}.00`;
  total.textContent = `$${totalPrice}.00`;
  cartContainer.innerHTML += `<article class="cart-item">
  <div class="item-image"><img src="${cart[i].img}" class="cartImg"/></div>
  <h2 class="item-name">${cart[i].title}</h2>
  <p class="item-meta">Quantity: 1</p>
  <p class="item-price">$${cart[i].price}.00</p>
</article>`;
}
