var express = require('express');
var path = require('path');
var http = require('http');

// var db = require('./model/db');
var routes = require('./routes/index');
var posts = require('./routes/posts');
var cors = require('cors');

var app = express();


app.use(express.static('public'));

app.use(cors());
app.use('/', routes);
app.use('/posts', posts);

// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

http.createServer(app).listen(3000);