const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write(`<html><head>
        <body>Hello from Nodejs server</body></head></html>`);
  res.end();
});

server.listen(3000);