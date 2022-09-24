const http = require("http");
const { readFileSync } = require("fs");

const homepage = readFileSync(
  "./node-express-course/02-express-tutorial/navbar-app/index.html"
);

const homestyles = readFileSync(
  "./node-express-course/02-express-tutorial/navbar-app/styles.css"
);

const homeimgae = readFileSync(
  "./node-express-course/02-express-tutorial/navbar-app/logo.svg"
);

const homejs = readFileSync(
  "./node-express-course/02-express-tutorial/navbar-app/browser-app.js"
);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });

    res.write(homepage);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1> about page </h1>");
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homestyles);
    res.end();
  } else if (req.url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeimgae);
    res.end();
  } else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homejs);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not Found</h1>");
    res.end();
  }
});

server.listen(3000);
