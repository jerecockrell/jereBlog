var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	title: String,
	content: String,
	img: String,
});

module.exports = mongoose.model('Post', PostSchema);