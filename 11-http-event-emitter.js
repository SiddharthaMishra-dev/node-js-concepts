const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Home page");
});
server.listen(5000);
