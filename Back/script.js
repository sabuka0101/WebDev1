import express from "express";

const app = express();
app.use(express.json());

const products = [
  { id: 0, name: "computer", price: 35 },
  { id: 1, name: "mouse", price: 30 },
  { id: 2, name: "keyboard", price: 20 },
  { id: 3, name: "screen", price: 25 },
];

const users = [
  { id: 0, name: "saba", pass: "saba123" },
  { id: 1, name: "tazo", pass: "tazo123" },
];

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  const parsedId = parseInt(req.params.id);
  res.send(products[parsedId]);
});

app.post("/products", (req, res) => {
  const { id, ...body } = req.body;
  const newId = products.length;
  products.push({ id: newId, ...body });
  console.log(products);
  res.send(products);
});
app.patch("/products/:id", (req, res) => {
  const {
    params: { id },
  } = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    res.send("send number");
  }
  let product = products.find((product) => product.id === parsedId);
  if (!product) {
    res.send("info doesnt exist");
  }
  products[parsedId] = { ...products[parsedId], price: req.body.price };
  res.send("updated successfully");
});

app.listen(3000, () => {
  console.log("app is listening at 3000 http://localhost:3000");
});
