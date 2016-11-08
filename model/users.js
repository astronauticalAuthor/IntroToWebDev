var mongoose = require('mongoose');
var userSchema  = new mongoose.Schema({
    username: String,
    password: String,
    alumnusStatus: Boolean,
    gradYear: Number,
    profPoints: Number,
    big: {
    	type: mongoose.Schema.Types.ObjectId,
    	ref: 'User'
    },
    littles: [{
    	type: mongoose.Schema.Types.ObjectId,
    	ref: 'User'
    }],
    initiationClass: {type: Number, enum: [0,1,2,3,4,5,6]},
    gradYear: {type: Number, enum: [2016, 2017, 2018, 2019, 2020, 2021]}
});


mongoose.model('User', userSchema);