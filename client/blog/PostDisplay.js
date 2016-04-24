var React = require('react');

var PostDisplay = function(props){
	console.log(props);
	return (
		<div className="card col-sm-3">
      <img className="card-img-top" src={props.img} alt="Card image cap" />
      <div className="card-block">
      	<h4 className="card-title">{props.title}</h4>
    		<a onClick={props.toggleBlogComp.bind(null, "OnePost", props.id)} className="btn btn-primary">Show</a>
  	</div>
		</div>
	)
};

module.exports = PostDisplay;