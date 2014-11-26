var http = require('http');
var express = require('express');
var jwt = require('jwt-simple');
var restful = require('node-restful');
var mongoose = restful.mongoose;
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

var database = require('./config/config.js')


GLOBAL.app = express();

var port = 8080;

app.use('/', express.static(path.resolve('../client')));
app.use('/app', express.static(path.resolve('../client/app')));
app.use('/js', express.static(path.resolve('../client/app/js')));
app.use('/templates', express.static(path.resolve('../client/app/templates')));

app.all('/*', function(req, res, next){
    res.sendfile('index.html', {root: '../client'});
})
/*app.get('*', function(req, res){
    res.sendfile('./client/index.html');
})*/

app.listen(port);

console.log('\nServer started on port ' + port);