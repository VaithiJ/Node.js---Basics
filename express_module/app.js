const { response } = require("express");
const express = require("express");
const { Server } = require("http");
const path = require("path");
const app = express();

app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(
//     path.resolve(
//       __dirname,
//       "./node-express-course/02-express-tutorial/navbar-app/index.html"
//     )
//   );
// });

app.all("*", (req, res) => {
  res.status(404).send("Error not found");
});

app.listen(3000, () => {
  console.log("server is listening...");
});
