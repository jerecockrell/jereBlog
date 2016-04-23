var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./Home');
var Navbar = require('./Navbar');
var Footer = require('./Footer');
var Contact = require('./Contact');

require('./styles.scss');

var App = React.createClass({
	render: function(){
		return (
			<div>
			  <Navbar />			
					<Home />
					<Contact />
				<Footer />	
			</div>		
		)
	}
});

ReactDOM.render(<App/>, document.getElementById('app'));