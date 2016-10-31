var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), // mongodb connection
    bodyParser = require('body-parser'), // parse info from POST
    methodOverride = require('method-override');  // used to manipulate POST data

router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body == 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

// READY to build our API
router.route('/:id')
    .get(function (req, res) {
        mongoose.model('Post').findById(req.id, function (err, post) {
            if (err) {
                res.status(404);
                handleError(err, res, 'GET error, problem retrieving data');
            }
            //else
            res.format({
                json:function() {
                    res.json(post);
                }
            });
        })
    })
    .post(function (req, res) {
        mongoose.model('Post').create({
            title: req.body.title,
            datePosted: new Date(),
            body = req.body.body
        }, function (err, post) {
            if (err) {
                res.send('Problem adding post to db');
            } else {
                res.redirect('/blog');
            }
        });
    })
    .delete(function (req,res) {
        mongoose.model('Post').findByIdAndRemove(req.id)
            .exec(
                function (err, post) {
                    if (err) {
                        res.status(404);
                        handleError(err, res, 'GET error, problem retrieving data');
                    }
                    //else
                    res.status(204);
                    res.format({
                        json: function () {
                            res.json(null);
                        }
                    })
                }
            );
    });
