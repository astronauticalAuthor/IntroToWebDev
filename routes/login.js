var express = require('express');
var path = require('path');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../model/db');

var loggedInUsers = [];

function makeGuid() {
	var guid = '';
	for (var x = 0; x < 32; x++) {
		guid += Math.floor((1 + Math.random()) * 0x10000)
	}

	return guid;
}

router.post('/', function(req, res) {
  mongoose.model('User').find({}, function (err, users) {
    var found = false;

    for (var x = 0; x < users.length; x++) {
      if (req.body.username == users[x].username && req.body.password == users[x].password) {
        found = true;
      }
    }

    if (!found) {
      res.json({
        "loggedIn": "false"
      });
    }
    else {
      var g = makeGuid();
      loggedInUsers.push(g);
      res.json({
        "loggedIn": "true",
        "guid": g
      });
    }
  });
});

router.post('/checkLoggedIn', function(req, res) {
	var found = loggedInUsers.indexOf(req.body.guid) > -1;
	res.json({
		"loggedIn": found
	});
});

module.exports = router;
