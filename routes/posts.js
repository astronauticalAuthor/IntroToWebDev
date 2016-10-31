var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'); // mongodb connection
var db = require('../model/db');

// READY to build our API

router.get('/', function(req, res) {
    console.log('try');
    mongoose.model('Post').find({}, function (err, posts) {
        if (err) {
            return console.log(err); // CONSIDER: Might want to call next with error.  can add status code and error message.
        } else {
            res.format({
                json: function () {
                    res.json(posts);
                }
            });
        }
    });
});

    // .post(function (req, res) {
    //     mongoose.model('Post').create({
    //         title: req.body.title,
    //         datePosted: new Date(),
    //         body: req.body.body
    //     }, function (err, post) {
    //         if (err) {
    //             res.send('Problem adding post to db');
    //         } else {
    //             res.redirect('/blog');
    //         }
    //     });
    // })
    // .delete(function (req,res) {
    //     mongoose.model('Post').findByIdAndRemove(req.id)
    //         .exec(
    //             function (err, post) {
    //                 if (err) {
    //                     res.status(404);
    //                     handleError(err, res, 'GET error, problem retrieving data');
    //                 }
    //                 //else
    //                 res.status(204);
    //                 res.format({
    //                     json: function () {
    //                         res.json(null);
    //                     }
    //                 })
    //             }
    //         );
    // });
module.exports = router;