"use strict";

var IO = {

	init: function() {
		IO.socket = io.connect();
		IO.bindEvents();
	},



	bindEvents:  function() {
		IO.socket.on('connected', IO.onConnected());
	},

	onConnected: function(data) {
		console.log('connected');
	}
}


var App = {

	gameId: 0,

	mySocketId: '',

	init: function() {
		App.cacheElements();
		App.showInitScreen();
		App.bindEvents();

		//Initialize FastClick
	},

	cacheElements: function() {
		App.$doc = $(document);

		//Templates
		App.$gameArea = $('#gameArea');
		App.$templateIntroScreen = $('#intro-screen-template').html();
		App.$temaplateWaitScreen = $('#game-lobby-wait-template').html();
	},

	bindEvents: function() {
		//App.$doc.on('click', '#btn-create-game', App.onJoinClick);
	},

	showInitScreen: function() {
		App.$gameArea.html(App.$templateIntroScreen);
		console.log('intro template inserted');
	}
}

IO.init();
App.init();