const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("Home page");
  }
  if (req.url === "/about") {
    res.end("About Page");
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000.....");
});
