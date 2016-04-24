var React = require('react');
var AllPostsData = require('./AllPostsData');

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

var AllPostsApp = React.createClass({
	render: function(){
		return (
			<AllPostsData toggleBlogComp={ this.props.toggleBlogComp } />
		)
	}
});

module.exports = AllPostsApp;