var express = require('express');
var router = express.Router();

var Post = require('../models/post');

router.route('/')
	.get(function(req, res){
		res.json({message: "Post router working"})
	});

module.exports = router;

