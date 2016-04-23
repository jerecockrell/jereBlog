var express = require('express');
var router = express.Router();

var Post = require('../models/post');

router.route('/')
	.get(function(req, res){
		res.json({message: "Post router working"})
	})
	.post(function(req, res){
		console.log('About to post')
		var post = new Post({
			title: req.body.title,
			content: req.body.content,
			img: req.body.img,
		});
		console.log('Here is my post: ' + post)

		post.save(function(err, post){
			if(err){
				console.log(err)
			} else {
				res.json(post)
			}
		});

	});



module.exports = router;

