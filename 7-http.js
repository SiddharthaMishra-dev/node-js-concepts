const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to SIDHIM industries");
  }
  if (req.url === "/about") {
    res.end("Our company is founded in 1995");
  }
  res.end(`
        <h1>Oops!!!</h1>
        <p>Can't find the page you are looking for</p>
        <a href="/">Back home</a>
    `);
});
server.listen(5000);
