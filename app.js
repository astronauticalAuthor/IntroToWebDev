var express = require('express');
const bodyParser= require('body-parser');
var path = require('path');
var http = require('http');

var port = normalizePort(process.env.PORT || '3000');

var db = require('./model/db');
var pages = require('./routes/index');
var executives = require('./routes/executives');
var posts = require('./routes/posts');
var login = require('./routes/login');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.use('/', pages);
app.use('/executiveInfo', executives);
app.use('/posts', posts);
// app.post('/posts', (req, res) => {
// 	  db.save(req.body, (err, result) => {
//     if (err) return console.log(err)
//     console.log('saved to database')
//     res.redirect('/blog')
//   })
// });

app.use('/login/login', login);

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
}