var React = require('react');
var PostFormDisplay = require('./PostFormDisplay');

var PostFormData = React.createClass({
	render: function(){
		return (
			<div>
				<PostFormDisplay />
			</div>
		)
	}
});

module.exports = PostFormData;	