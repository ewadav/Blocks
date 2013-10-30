// Main Server Logic

// Import express
var express = require('express');

// Import path module of node
var path = require('path');

// Instantiate Express server 
var app = express();

//  Import game logic 
var blocks = require('./blocks');

// Import the Alfonso Logger
var alfonso = require('./alfonso');

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
var userServer = require('./userServer').init(io);

io.set('log level', 1);

io.sockets.on('connection', function(socket) {
	userServer.addUser(socket.username);
	blocks.initGame(io, socket);
	alfonso.log('info', socket.id + ": is connected");
	socket.join('waitroom');
});

