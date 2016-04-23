
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jereblog');

var Post = require('./models/post');
var PostRouter = require('./routes/post');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/api/posts', PostRouter);

var port = process.env.PORT || 3000;
var hostname = process.env.HOSTNAME || "localhost";

app.listen(port, function(err){
	if(err){
		console.log(err, "error starting server")
	} else {
		console.log("App listening at http://" + hostname + ":" + port)
	}
});
