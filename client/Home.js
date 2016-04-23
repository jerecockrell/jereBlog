var React = require('react');

// HOME 
// 	Jumbotron
// 	Skills
// 	Portfolio

var Home = React.createClass({
	render: function(){
		return (
			<div>
				<div className="jumbotron">
					<div className="container">
						<h1>Jere Cockrell</h1>
						<p>occupation...</p>
						<p>
							<a className="btn btn-primary btn-lg">Skills</a>
						</p>
					</div>
				</div>
					<div className="container">
						<div className="row">
						<h2> Skills </h2>
							<div className="col-sm-6">
								<div className="card myCard">
								  <img className="card-img-top profileImg" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAATTAAAAJDFmMTE1YzcyLWZmYjktNDhjNC05OWEwLWMxYjEzNDI5MzgwMQ.jpg" alt="Card image cap" />
								  <div className="card-block">
								    <h4 className="card-title">Jr Full Stack Dev</h4>								    
								  </div>
								</div>
							</div>
							<div className="col-sm-6">
								<h3>Right Side</h3>
								<p>Lorem ipsum blabla</p>
								<p>Lorem ipsum blabla</p>
							</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Home;