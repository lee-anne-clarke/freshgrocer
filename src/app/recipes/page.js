'use client'

import React, { useEffect } from 'react'
import MainPage from '../components/MainPage'
import RecipeBox from './RecipeBox'

import recipesHeader from '../../img/recipes/foodontable.jpg'
import recipeImg1 from '../../img/recipes/cookies2.jpg'
import recipeImg2 from '../../img/recipes/cookingstuff1.jpg'
import recipeImg3 from '../../img/recipes/pie2.jpg'
import recipeImg4 from '../../img/recipes/ricebowl.jpg'
import recipeImg5 from '../../img/recipes/veggies2.jpg'
import recipeImg6 from '../../img/recipes/platter.jpg'
import recipeImg7 from '../../img/recipes/drypasta.jpg'
import recipeImg8 from '../../img/recipes/grill.jpg'
import recipeImg9 from '../../img/recipes/cookingstuff2.jpg'


export default function Recipes() {

  useEffect(() => {
  	document.title = "Recipes | The Fresh Grocer"  
  }, [])


  return (
		<MainPage
			title="Recipes" 
			headerImg={recipesHeader}>

			<section className="container">
				<h2 className="u-text-left">Check out the latest recipes:</h2>

        <div className="recipes-wrap u-clearfix">
        	<RecipeBox bgImage={recipeImg1} />

        	<RecipeBox bgImage={recipeImg2} />

        	<RecipeBox bgImage={recipeImg3} />

        	<RecipeBox bgImage={recipeImg4} />

        	<RecipeBox bgImage={recipeImg5} />

        	<RecipeBox bgImage={recipeImg6} />

        	<RecipeBox bgImage={recipeImg7} />

        	<RecipeBox bgImage={recipeImg8} />

        	<RecipeBox bgImage={recipeImg9} />
        </div>
      </section>
      
		</MainPage>
  );
  
}



