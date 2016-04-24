var React = require('react');
var PostFormDisplay = require('./PostFormDisplay');

var PostFormData = React.createClass({
	getInitialState: function(){
		return {
			title: null,
			content: null,
			img: null,
		}
	},
	onTitleChange: function(event){
		this.setState({ title: event.target.value })
	},
	onContentChange: function(event){
		this.setState({ content: event.target.value })
	},
	onImgChange: function(event){
		this.setState({ img: event.target.value })
	},
	submitPostToServer: function(e){
		e.preventDefault();
		var postData = {
			title: this.state.title,
			content: this.state.content,
			img: this.state.img
		};

		console.log("about to submit data", postData);
		var self = this;
		$.ajax({
			url: '/api/posts',
			method: 'POST',
			data: postData
		}).done(function(data){
			console.log("success creating POST", data);
			self.props.toggleBlogComp("AllPostsApp")
		});
	},
	render: function(){
		return (
			<div>
				<PostFormDisplay onImgChange={ this.onImgChange } onContentChange={ this.onContentChange } onTitleChange={ this.onTitleChange } submitPostToServer={ this.submitPostToServer } />
			</div>
		)
	}
});

module.exports = PostFormData;	