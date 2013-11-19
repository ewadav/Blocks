// Main Server Logic

// Import express
var express = require('express');

// Import path module of node
var path = require('path');

// Instantiate Express server 
var app = express();

//  Import game logic 
var blocks = require('./game/blocks');

// Import the Alfonso Logger
var alfonso = require('./server/alfonso');

// Configure express application
app.configure(function() {


	app.use(express.logger('dev'));

	app.use(express.static(path.join(__dirname, 'public')));

});

// Instatiate server to listen to port 8080
var server = require('http').createServer(app).listen(8080);

// Instantiate socketIO to listen to server
var io = require('socket.io').listen(server);

// Import user/game-lobby logic
var userServer = require('./server/userServer').init(io, alfonso);
console.log(userServer);

io.set('log level', 1);

io.sockets.on('connection', function(socket) {
	blocks.initGame(io, socket);
	alfonso.log('info', socket.id + ": is connected");
	socket.join('waitroom');

	socket.on('addUser', function(username) {
		socket.username = username;
		userServer.addUser(socket.username);
		alfonso.log('info', username + ": added to stack");
	});

});

