var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); // mongodb connection
var db = require('../model/db');

// READY to build our API

router.get('/', function(req, res) {
    mongoose.model('Post').find({}, function (err, posts) {
        if (err) {
            console.log(err); // CONSIDER: Might want to call next with error.  can add status code and error message.
        } else {
            res.format({
                json: function () {
                    res.json(posts);
                }
            });
        }
    });
});

router.post('/', function (req, res) {
    mongoose.model('Post').create({
        title: req.body.title,
        datePosted: new Date().toDateString(),
        body: req.body.body
    }, function (err, post) {
        if (err) {
            res.send('Problem adding post to db');
        } else {
            res.redirect('/blog');
        }
    });
})

router.put('/:id', function (req, res) {
    mongoose.model('Post').findById(req.params.id, function (err, post) {
        if (err) {
            res.send('false');
        }
        else {
            post.update(req.body, function (error, newpost) {
                if (error) {
                    res.send('false');
                }
                else {
                    res.send('true');
                }
            });
        }        
    });
});

router.delete('/:id', function (req, res) {
    mongoose.model('Post').remove({ _id: req.params.id }, function (err) {
        if (err) {
            res.send('false');
        }
        else {
            res.send('true');
        }
    });
});

module.exports = router;