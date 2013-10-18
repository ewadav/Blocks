var io;
var gameSocket;

exports.initGame = function(sio, socket) {
	io = sio;
	gameSocket = socket;
	gameSocket.emit('connected', {message: socket.id + " : You are connected"});
	

}