const hs = require("http");
const fs = require("fs");
const os = require("os");
const server = hs.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello from the other side");
  } else if (req.url == "/about") {
    res.end("Hello from the About Us Page");
  } else if (req.url == "/contact") {
    res.end("Hello From the Contact page");
  } else if (req.url == "/gallery") {
    res.write("Helllo From the gallery PAge ");
    res.end("Helllo From the gallery PAge ");
  } else if (req.url == "/userapi") {
    fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
      console.log(data);
      const objData = JSON.parse(data);
      res.end(objData);
      // res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("404 Page not Found ");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
