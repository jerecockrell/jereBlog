var React = require('react');

var links = ['Home', 'Blog', 'Contact'];

var Navbar = React.createClass({
	render: function(){
		var self = this;
		var clinks = links.map(function(item){
			return (
				<li className="nav-item">
			      <a className="nav-link" onClick={ self.props.toggleMainComp.bind(null, item) }>{ item }</a>
			  </li>
			)
		});
		return (
			<nav className="navbar navbar-light bg-faded">
			  <a className="navbar-brand" href="#">Navbar</a>
			  <ul className="nav navbar-nav">
			    { clinks }
			  </ul>
      </nav>
    )
	}
});

module.exports = Navbar;