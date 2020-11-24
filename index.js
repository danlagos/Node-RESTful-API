// Primary file for API

// dependencies

const http = require(`http`);
const url = require(`url`)

// The server should respond to request with a string

// Start the server, and have it listen to port 3000

const server = http.createServer(function (req, res) {
  // Get url and parse it
  const parsedUrl = url.parse(req.url, true);

  // Get path from the url
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Get the HTTP method.  making everything lowercase for now
  const method = req.method.toLowerCase();

  // Send the response
  res.end(`Hello World\n`);

  // Log the request path
  console.log(`Request is received on path: ${trimmedPath}\n
  With method: ${method} `)
});

server.listen(3000, function () {
  console.log(`The server is lisetining on port 3000 now`)
});

