var React = require('react');
var AllPostsApp = require('./AllPostsApp');
var NewPost = require('./NewPost');
var OnePost = require('./OnePost');

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
			return <NewPost toggleBlogComp={ this.toggleBlogComp }/>
		} else if(this.state.activeBlogComp === 'OnePost') {
			return <OnePost />
		}
	},
	toggleBlogComp: function(compName){
		this.setState({ activeBlogComp: compName })
	},
	render: function(){
		return (
			<div>
			<button className="btn btn-primary" onClick={this.toggleBlogComp.bind(null, 'NewPost')}> New Post </button>
			<button className="btn btn-primary" onClick={this.toggleBlogComp.bind(null, 'AllPostsApp')}> All Posts </button>
			 { this.showBlogComp() }
			</div>
		)
	}
});

module.exports = BlogApp;