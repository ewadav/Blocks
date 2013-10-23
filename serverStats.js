var num_of_users; 
var userList = [];
var open_rooms;

exports.addUser = function(socket) {
	userList.push(socket);
	num_of_users += 1;
}


