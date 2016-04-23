var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./Home');
var Navbar = require('./Navbar');
var Footer = require('./Footer');

require('./styles.scss');

var App = React.createClass({
	render: function(){
		return (
			<div>
			  <Navbar />			
				<Home />
				<Footer />	
			</div>		
		)
	}
});

ReactDOM.render(<App/>, document.getElementById('app'));