var React = require('react');
var OnePostDisplay = require('./OnePostDisplay');

var OnePostData = React.createClass({
	getInitialState: function(){
		return {
			post: null
		}
	},
	loadPostFromServer: function(){
		var self = this;
		$.ajax({
			url: '/api/posts/' + self.props.id,
			method: 'GET'
		}).done(function(data){
			self.setState({ post: data })
		})
	},
	componentWillMount: function(){
		this.loadPostFromServer();
	},
	render: function(){
		return this.state.post ? <OnePostDisplay post={ this.state.post } /> : null;
	}
});

module.exports = OnePostData;