// Custom Node logger
 var fs = require('fs');

 var serverInfoLogFile = 'server/logs/infoLogs.json';
 var serverWarnLogFile = 'server/logs/warnLogs.json';
 var serverErrorLogFile = 'server/logs/errorLogs.json';

 var levels = ['info', 'warn', 'error'];
 var levelFiles = [serverInfoLogFile, serverWarnLogFile, serverErrorLogFile];

 exports.log = function(level, message) {
 	var levelIndex;
 	for (var i = 0; i < levels.length(); i++) {
 		if(levels[i] === level) {
 			levelIndex = i;
 		} 	
 	}

 	// if the message is a json object, ussually the error, is stringified
 	if(typeof message !== 'string') {
 		message = JSON.stringify(message);
 	}

 	// for debug purposes, will be loggin to above files levelFiles[levelIndex]
 	console.log(level + ': ' + message);


 }