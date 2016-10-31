var mongoose = require('mongoose');
var postSchema  = new mongoose.Schema({
    title: String,
    datePosted: Date,
    body: String,
});


mongoose.model('Post', postSchema);