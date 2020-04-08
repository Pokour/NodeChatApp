// var express = require('express');
// var greet = require('./customModule');

// var app = express();

// app.use(express.static(__dirname));

// greet.greetings();

// app.listen(3000);

const http = require('http');

const server = http.createServer( (req, res) => {
    console.log(req.url, req.method, req.headers);
});

server.listen(3000);  