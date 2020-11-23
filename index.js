// Primary file for API

// dependencies

const http = require('http');

// The server should respond to request with a string

// Start the server, and have it listen to port 3000

const server = http.createServer(function (req, res) {
  res.end(`Hello World\n`);
});

server.listen(3000, function () {
  console.log(`The server is lisetining on port 3000 now`)
});