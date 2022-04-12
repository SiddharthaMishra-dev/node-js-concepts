const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request");
  res.end("Welcome to Sidhim Industries");
});
server.listen(5000, () => {
  console.log("Server listening on port:5000");
});
