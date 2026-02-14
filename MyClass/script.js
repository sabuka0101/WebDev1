const products = [
  {
    name: "Headphones",
    price: 120,
    discount: 20,
    inStock: true,
  },
  {
    name: "Keyboard",
    price: 80,
    discount: 10,
    inStock: false,
  },
  {
    name: "Mouse",
    price: 40,
    discount: 5,
    inStock: true,
  },
  {
    name: "Monitor",
    price: 300,
    discount: 50,
    inStock: true,
  },
];
for (i = 0; i < products.length; i++) {
  if (products[i].inStock === true) {
    console.log(
      `${products[i].name} is available. Final price: ${products[i].price - (products[i].price * products[i].discount) / 100}`,
    );
  } else {
    console.log(`${products[i].name} isn't available`);
  }
}

//---------------------------------------------------

const cart = {
  user: "Ana",
  items: ["Headphones", "Mouse", "Keyboard"],
  prices: [120, 40, 80],
};
let total = 0;

for (i = 0; i < cart.items.length; i++) {
  total += cart.prices[i];
  console.log(`${cart.user} is buying ${cart.items[i]}`);
}
console.log(`The total is ${total}$`);
