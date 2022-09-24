const express = require("express");
const authorise = require("./authorise");
const morgan = require("morgan");
const log = require("./log");

const {
  products,
  people,
} = require("../node-express-course/02-express-tutorial/data.js");

const app = new express();

//res.send = sends all arrays and stuffs
//res.json = similar to res.send and sends json files

app.use(morgan("tiny")); //morgan(tiny) returns time period for each callbacks in milliseconds - example of  third party middleware
app.use(log);

app.get("/", authorise, (req, res) => {
  //res.status(200).json([{ name: "vaithi" }, { name: "sj" }]);
  //res.json([products, people]);
  res.send("<h1>Home page</h1> <a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const oneByone = products.find((product) => product.id === Number(id));

  if (!oneByone) {
    res.status(404).send("Product not found");
  }
  res.json(oneByone);
});

app.get("/api/products/:id/reviews/:reviewID", (req, res) => {
  res.json("<h1>REVIEW</h1>");
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
}); //we cannot emit two res. events which results in an error...

app.listen(3000, () => {
  console.log("server is listening on port 3000....");
});
