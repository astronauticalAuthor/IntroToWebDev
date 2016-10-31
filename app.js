var express = require('express');
var path = require('path');
var http = require('http');

var port = normalizePort(process.env.PORT || '3000');

// var db = require('./model/db');
var routes = require('./routes/index');
<<<<<<< HEAD
var executives = require('./routes/executives');
=======
var posts = require('./routes/posts');
// var cors = require('cors');
>>>>>>> df1fe82af74b2588ade4fc4cdd47289043008cd0

var app = express();

app.use(express.static('public'));
<<<<<<< HEAD
app.use('/', routes);
app.use('/executiveInfo', executives);

http.createServer(app).listen(port);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }
=======

// app.use(cors());
app.use('/', routes);
app.use('/posts', posts);

>>>>>>> df1fe82af74b2588ade4fc4cdd47289043008cd0

  return false;
}
