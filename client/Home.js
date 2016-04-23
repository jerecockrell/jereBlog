var React = require('react');

// HOME 
// 	Jumbotron
// 	Skills
// 	Portfolio

var Home = React.createClass({
	render: function(){
		return (
			<div className="jumbotron">
				<div className="container">
					<h1>Jere Cockrell</h1>
					<p>occupation...</p>
					<p>
						<a className="btn btn-primary btn-lg">Skills</a>
					</p>
				</div>
			</div>
		)
	}
});

module.exports = Home;