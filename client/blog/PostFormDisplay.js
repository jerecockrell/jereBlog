var React = require('react');

var PostFormDisplay = function(props){
	return (
		<form onSubmit={ props.submitPostToServer } role="form">
			<legend>New Blog Post</legend>
		
			<div className="form-group">
				<label >Title</label>
				<input onChange={ props.onTitleChange } type="text" className="form-control" id="" placeholder="title" />
			</div>
		
			<div className="form-group">
				<label >Content</label>
				<input onChange={ props.onContentChange } type="text" className="form-control" id="" placeholder="content" />
			</div>

			<div className="form-group">
				<label >Image</label>
				<input onChange={ props.onImgChange } type="text" className="form-control" id="" placeholder="image" />
			</div>
			
		
			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
		)
};

module.exports = PostFormDisplay;