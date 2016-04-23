var React = require('react');
var PostFormData = require('./PostFormData');

/*
	-BlogApp
		-AllPostsApp
			-AllPostsData  --> gets all data and passes it down
				-PostList --> passes data to PostDisplay component
				-PostDisplay 		--> (stateless) pure render function
		-OnePost
		-NewPost
			-- PostFormData
			  -- PostFormDisplay
*/

var NewPost = React.createClass({
	render: function(){
		return <PostFormData />
	}
});

module.exports = NewPost;