import React from 'react'


function RecipeBox(props) {
	return (
	  <figure className="recipe" ref={props.reference}>
	    <div className="recipe-border">
	      <figcaption className="recipe-inner" style={props.bgImage}>
	        <div className="recipe-innertext">
	          <h3>Proin at laoreet turpis</h3>
	          <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
	          
	          <div className="recipe-links">
							<p>
								<button className="btn-recipe">
									<i className="fa fa-tasks"></i> View the recipe
								</button>
							</p>
	            <p>
	            	<button className="btn-recipe">
	            		<i className="fa fa-envelope-o"></i> Send to a friend
	            	</button>
	            </p>
	          </div>

	        </div>
	      </figcaption>
	    </div>
	  </figure>
	);
}


export default RecipeBox