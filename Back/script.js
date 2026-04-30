import express from "express";

const app = express();
app.use(express.json());

const products = [
  { id: 1, name: "mouse", price: 30 },
  { id: 2, name: "keyboard", price: 20 },
  { id: 3, name: "screen", price: 25 },
];
app.get("/products", (req, res) => {
  res.send(products);
});
app.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  const parsedId = parseInt(req.params.id);
  res.send(products[parsedId]);
});

app.set("view engine", "ejs");
app.get("/users", (req, res) => {
  res.send(users);
});
app.post("/users", (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("app is listening at 3000 http://localhost:3000");
});
