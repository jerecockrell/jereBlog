
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var options = {
  server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};  
var mongodbUri = process.env.MONGODB_URI || "mongodb://localhost/jereblog";
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

console.log(mongooseUri);

mongoose.connect(mongooseUri, options, function(err, data){
  if(err){
    console.log('connection error', err)
  } else {
    console.log('connection', data);
  }
}); 

var Post = require('./models/post');
var PostRouter = require('./routes/post');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

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
