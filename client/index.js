var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./Home')

require('./styles.scss');

var App = React.createClass({
	render: function(){
		return (
				<Home />			
		)
	}
});

ReactDOM.render(<App/>, document.getElementById('app'));