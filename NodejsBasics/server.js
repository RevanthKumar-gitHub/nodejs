const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<html>
        <head>
            <body>
                <h1>Welcome to Nodejs Server</h1>
                <form action="/create-user" method="POST">
                    <input type="text" placeholder="username">
                    <button type="submit">sumbit</button>
                </form>
            </body>
        </head>
    </html>`
    );
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<html><head><body><ul><li>User 1</li><li>User 2</li></ul></body></head></html>`
    );

    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    let data = [];

    req.on("data", (chunk) => {
      data.push(chunk);
    });

    return req.on("end", () => {
      const body = Buffer.concat(data).toString();
      console.log("Received data:", body);
      return res.end();
    });

    // return res.end();
  }
});

server.listen(3000);
