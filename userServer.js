var io;
var num_of_users; 
var userList = [];
var open_rooms;
var nextRoomNumber = 0;
var maxRoomNumber = 1000000;
var roomLists = [];

exports.init = function(sio) {
	io = sio;
}

exports.addUser = function(username) {
	userList.push(username);
	num_of_users += 1;
}

exports.getNextRoomNumber = function() {
	if((nextRoomNumber + 1) == maxRoomNumber) {
		nextRoom == 0;
		return nextRoomNumber;
	} else {
		nextRoom += 1;
		return nextRoomNumber - 1;
	}
}

exports.removeUser = function(socket) {
	num_of_users -= 1;
}

exports.addNumRooms = function() {
	open_rooms += 1;
}

exports.subtractNumRooms = function() {
	open_rooms -= 1;
}

exports.socketJoinRoom = function(socket, roomId) {

}

var containsRoom = function(roomId) {
	for(var i = 0; i < roomLists.length ;i++) {
		if(roomLists[i].roomId === roomId) {
			return 
		} 
	}
}





