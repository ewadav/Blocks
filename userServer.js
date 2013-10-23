var num_of_users; 
var userList = [];
var open_rooms;
var nextRoomNumber = 0;
var maxRoomNumber = 1000000;

exports.addUser = function(socket) {
	userList.push(socket);
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




