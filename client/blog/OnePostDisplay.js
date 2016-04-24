var React = require('react');

var OnePostDisplay = function(props){
	return (
		<div>
			<h4>{props.post.title}</h4>
			<img className="profile-img" src={props.post.img} /> 
		</div>
		)
};

module.exports = OnePostDisplay;