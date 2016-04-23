var React = require('react');
var AllPostsApp = require('./AllPostsApp');
var NewPost = require('./NewPost');
var OnePost = require('./OnePost');
/*
	-BlogApp
		-AllPostsApp
		-ShowPost
		-NewPost
*/

var BlogApp = React.createClass({
	getInitialState: function(){
		return {
			activeBlogComp: 'AllPostsApp'
		}
	},
	showBlogComp: function(){
		if(this.state.activeBlogComp === 'AllPostsApp'){
			return <AllPostsApp />
		} else if(this.state.activeBlogComp === 'NewPost') {
			return <NewPost />
		} else if(this.state.activeBlogComp === 'OnePost') {
			return <OnePost />
		}
	},
	render: function(){
		return (
			<div>
			 { this.showBlogComp() }
			</div>
		)
	}
});

module.exports = BlogApp;