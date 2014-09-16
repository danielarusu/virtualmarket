var http = require('http');
var express = require('express');
var jwt = require('jwt-simple');
var restful = require('node-restful');
var path = require('path');
var fs = require('fs');

GLOBAL.app = express();

var port = 8080;

app.use('/', express.static(path.resolve('../client')));

/*app.get('*', function(req, res){
    res.sendfile('./client/index.html');
})*/

app.listen(port);

console.log('Server started on port' + port);