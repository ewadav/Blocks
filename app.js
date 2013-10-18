// Main Server Logic

// Import express
var express = require('express');

// Import path module of node
var path = require('path');

// Instantiate Express server 
var app = express();

//  Import game logic 
var blocks = require('./blocks');

// Configure express application
app.configure(function() {


	app.use(express.logger('dev'));

	app.use(express.static(path.join(__dirname, 'public')));

});

var server = require('http').createServer(app).listen(8080);

var io = require('socket.io').listen(server);
var userList = [];

io.set('log level', 1);

io.sockets.on('connection', function(socket) {
	blocks.initGame(io, socket);
	console.log(socket.id + ": is connected");

});