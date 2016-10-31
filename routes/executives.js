var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
  res.send({
    "Advisor": "Aaron Wilkin",
  	"President": "Natasha Tepley",
  	"Vice President": "Brooke Brown",
  	"Treasurer": "Adam Finer",
  	"Director of Social Engagement": "Haley Heshelman",
  	"Director of Professional Development": "Jamie Loving",
  	"Director of Technology": "Katrina Kerrick"
	});
});

module.exports = router;
