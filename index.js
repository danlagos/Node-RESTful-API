// Primary file for API

// dependencies

const http = require(`http`);
const url = require(`url`)
const StringDecoder = require(`string_decoder`).StringDecoder;

// The server should respond to request with a string

const server = http.createServer(function (req, res) {

  // Get url and parse it
  const parsedUrl = url.parse(req.url, true);

  // Get path from the url
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  //  Get the query string as an object - BROKEN
  const queryStringObject = parsedUrl.query;

  // Get the HTTP method.  making everything lowercase for now
  const method = req.method.toLowerCase();

  //Get the header as an object
  const headers = req.headers;

  // get payload if there is any
  const decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', function (data) {
    buffer += decoder.write(data);
  });
  req.on('end', function () {
    buffer += decoder.end();

    // choose the handler this req should go to.  if one is not found use the no found handler

    //  stopped here

    // Send the response
    res.end(`Hello World\n`);

    // Log the request path
    console.log(`Request received with payload: ${buffer}`)
  });

});

// Start the server, and have it listen to port 3000
server.listen(3000, function () {
  console.log(`The server is lisetining on port 3000 now`)
});

// Define the handlers
let handlers = {};

// sample handler
handlers.sample = function (data, callback) {
  // callback a http status code, and a payload object
  callback(406, { 'name ': 'sample handler' });
};

//  Not found handler
handlers.notFound = function (data, callback) {
  callback(404);
};

// Define a request router
let router = {
  'sample': handlers.sample
}
