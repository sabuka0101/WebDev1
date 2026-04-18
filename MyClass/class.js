//https://aroma-store-theme.myshopify.com/
//array-methods: join, concat, pop, push, unshift, shift, slice, splice, reverse

//const book = {
// title: 'The Great Gatsby',
//     price : 20
// }
// const updated_book = {...book, price: 25};
// const {title, price} = book;
// console.log(title, price);
// const book_info = ()=> {
// }

// spread operator, desctructuring

const orders = [
  { id: 1, user: "Nino", items: 3, total: 45, paid: true },
  { id: 2, user: "Gio", items: 5, total: 120, paid: false },
  { id: 3, user: "Saba", items: 2, total: 30, paid: true },
  { id: 4, user: "Lia", items: 10, total: 300, paid: true },
  { id: 5, user: "Dato", items: 1, total: 15, paid: false },
  { id: 6, user: "Ana", items: 4, total: 80, paid: true },
];
const result = orders.filter(
  (order) => order.paid === true && order.total >= 50 && order.items > 3,
);
const result1 = result.sort((a, b) => b.total - a.total);
const result2 = result1.map(
  (orderUser) => `${orderUser.user} - ${orderUser.total}$`,
);

console.log(result2);
