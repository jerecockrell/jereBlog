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
	})
	.put(function(req, res){
		Post.findById( req.params.post_id, function(err, post){

			post.title = req.body.title ? req.body.title : post.title;
			post.content = req.body.content ? req.body.content : post.content;
			post.img = req.body.img ? req.body.img : post.img;

			post.save(function(err, updatedPost){
				if(err){
					console.log("error updating post", err)
				} else {
					res.json(updatedPost)
				}
			})
		})
	})


module.exports = router;

