var React = require('react');

var PostFormDisplay = function(props){
	return (
		<form role="form">
			<legend>New Blog Post</legend>
		
			<div className="form-group">
				<label >Title</label>
				<input type="text" className="form-control" id="" placeholder="title" />
			</div>
		
			<div className="form-group">
				<label >Content</label>
				<input type="text" className="form-control" id="" placeholder="content" />
			</div>

			<div className="form-group">
				<label >Image</label>
				<input type="text" className="form-control" id="" placeholder="image" />
			</div>
			
		
			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
		)
}

module.exports = PostFormDisplay;