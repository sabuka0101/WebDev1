const users = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];
const body = document.body;
users.forEach((user) => {
  body.innerHTML += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${user.userId}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${user.id}</h6>
    <p class="card-text">${user.title}</p>
    <p class="card-text">${user.completed}</p>
  </div>
</div>`;
});
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
