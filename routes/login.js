var express = require('express');
var path = require('path');
var router = express.Router();

var users = [];

function makeGuid() {
	var guid = '';
	for (var x = 0; x < 32; x++) {
		guid += Math.floor((1 + Math.random()) * 0x10000)
	}

	return guid;
}

router.post('/', function(req, res) {
  if (req.body.username == 'admin' && req.body.password == 'admin') {
  	var g = makeGuid();
  	users.push(g);
  	res.json({
  		"loggedIn": "true",
  		"guid": g
  	});
  }
  else {
  	res.json({
  		"loggedIn": "false"
  	})
  }
});

router.post('/checkLoggedIn', function(req, res) {
	var found = users.indexOf(req.body.guid) > -1;
	res.json({
		"loggedIn": found
	});
});



module.exports = router;
