'use strict';
var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080);

console.log('start server');