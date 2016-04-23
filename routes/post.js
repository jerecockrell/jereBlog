var express = require('express');
var router = express.Router();

var Post = require('../models/post');

router.route('/')
	.get(function(req, res){
		Post.find(function(err, posts){
			if(err){
				console.log("err finding posts", err);
			} else {
				res.json(posts)
			}
		})


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

router.route('/:post_id')
	.get(function(req, res){
		Post.findById( req.params.post_id, function(err, post){
			if(err){
				console.log(err)
			} else {
				res.json(post)
			}
		})
	});


module.exports = router;

