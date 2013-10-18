IO.init;
//App.init;

var IO = {


	init: function() {
		IO.socket = io.connect();
		IO.bindEvents();
	},



	bindEvents:  function() {
		IO.socket.on('connected', IO.onConnected);
	}

	onConnected: function() {
		console.log(IO.socket.socketid + ": you have connected");
	}
}