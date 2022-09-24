const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server online...");

  if (req.url === "/") {
    res.end("Hello there");
  }
  if (req.url === "/about") {
    res.end("Welcome to about");
  }
  res.end("error");
});

server.listen(3000, () => {
  console.log("listening on 3000.....");
});
