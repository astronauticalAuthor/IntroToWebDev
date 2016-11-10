var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'); // mongodb connection
var db = require('../model/db');

// READY to build our API

router.get('/', function(req, res) {
    console.log('find user?');
    mongoose.model('User').find({}, function (err, users) {
        if (err) {
            return console.log(err); // CONSIDER: Might want to call next with error.  can add status code and error message.
        } else {
            res.format({
                json: function () {
                    res.json(users);
                }
            });
        }
    });
});

module.exports = router;