var mongoose = require('mongoose');
var modelSchema = mongoose.Schema;

var userPostSchema = new modelSchema({
    name: String,
    email: String,
    age: Number,
    website: String,
    post: String
},{collection: 'userPosts'});

module.exports = mongoose.model('UserPost', userPostSchema);