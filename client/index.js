var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./Home');
var Navbar = require('./Navbar');
var Footer = require('./Footer');
var Contact = require('./Contact');

require('./styles.scss');

var App = React.createClass({
	getInitialState: function(){
		return {
			activeParentComp: 'Home'
		}
	},
	showComp: function(){
		if(this.state.activeParentComp === 'Home'){
			return <Home />
		} else if (this.state.activeParentComp === 'Contact'){
			return <Contact />
	  }
	},
	toggleMainComp: function(compName){
		this.setState({ activeParentComp: compName })
	},
	render: function(){
		return (
			<div>
			  <Navbar toggleMainComp={ this.toggleMainComp }/>			
					{ this.showComp() }
				<Footer />	
			</div>		
		)
	}
});

ReactDOM.render(<App/>, document.getElementById('app'));