var React = require('react');
var OnePostData = require('./OnePostData');
/*
	-BlogApp
		-AllPosts
		-ShowPost
		-NewPost
*/

var OnePost = React.createClass({
	render: function(){
		return <OnePostData id={this.props.id} />
	}
});

module.exports = OnePost;