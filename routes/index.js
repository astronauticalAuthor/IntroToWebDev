var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '/public/html/index.html'));
  // res.sendFile(path.join(__dirname, '..', '/static/styles/style.css'));
});

router.get('/about', function(req, res) {
	res.sendFile(path.join(__dirname, '..', 'public/html/about.html'));
});

router.get('/rush', function(req, res) {
	res.sendFile(path.join(__dirname, '..', 'public/html/rush.html'));
});

router.get('/executives', function(req, res) {
	res.sendFile(path.join(__dirname, '..', 'public/html/execs.html'));
});

router.get('/blog', function(req, res) {
	res.sendFile(path.join(__dirname, '..', 'public/html/blog.html'));
});

module.exports = router;
