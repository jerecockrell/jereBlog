var React = require('react');
var PostList = require('./PostList');

var AllPostsData = React.createClass({
	getInitialState: function(){
		return {
			allPosts: null
		}
	},
	loadPostsFromServer: function(){
		var self = this;
		$.ajax({
			url: '/api/posts',
			method: 'GET'
		}).done(function(data){
			console.log('Found data', data)
			self.setState({ allPosts: data })
		})
	},
	componentWillMount: function(){
		this.loadPostsFromServer();
	},
	render: function(){
		return this.state.allPosts ? <PostList posts={ this.state.allPosts } toggleBlogComp={ this.props.toggleBlogComp }/> : null;
	}
});

module.exports = AllPostsData;