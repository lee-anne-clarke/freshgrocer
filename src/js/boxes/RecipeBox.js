import React from 'react'


function RecipeBox(props) {
	return (
	  <figure className="recipe" ref={props.reference}>
	    <div className="recipe-reveal">
	      <figcaption className="recipe-inner" style={props.bgImage}>
	        <div className="recipe-innertext">
	          <h3>Proin at laoreet turpis</h3>
	          <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
	          
	          <div className="recipe-links">
	            <p><a className="btn-recipe" href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
	            <p><a className="btn-recipe" href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
	          </div>

	        </div>
	      </figcaption>
	    </div>
	  </figure>
	);
}


export default RecipeBox