var express = require('express');
var greet = require('./customModule');

var app = express();

app.use(express.static(__dirname));

greet.greetings();

app.listen(3000);