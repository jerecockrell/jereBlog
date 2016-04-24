var React = require('react');
var PostDisplay = require('./PostDisplay');

var PostList = function(props) {
	var posts = props.posts.map(function(item){
		return <PostDisplay title={item.title} content={item.content} img={item.img} toggleBlogComp={ props.toggleBlogComp } id={ item._id } />
	});

	return (
		<div className="myFlexBox">
			{ posts }
		</div>
	)
};

module.exports = PostList;