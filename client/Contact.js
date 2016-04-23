var React = require('react');

var Contact = React.createClass({
	render: function(){
		return (
			<div className="container">
				<form role="form">
					<legend>Contact me</legend>
					
					<div className="form-group">
						<label for="">label</label>
						<input type="text" className="form-control" id="" placeholder="Input field" />
					</div>	
					<div className="form-group">
						<label for="">label</label>
						<input type="text" className="form-control" id="" placeholder="Input field" />
					</div>				
					
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>

		)
	}
});

module.exports = Contact;