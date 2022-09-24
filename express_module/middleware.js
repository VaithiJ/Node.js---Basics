const express = require("express");

const app = express();

app.get("/", log, (req, res) => {
  res.send("HOME");
});

app.get("/about", log, (req, res) => {
  res.send("about");
});

app.listen(3001, () => {
  console.log("The server is listening to port no: 3000");
});
