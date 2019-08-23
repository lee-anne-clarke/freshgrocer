import React, { Component } from 'react'
import MainPage from './MainPage'
import RecipeBox from './boxes/RecipeBox'
import { 
	mainHeaderImgConfig, 
	innerpTitleConfig, 
	mainSubheaderConfig } from './sr/srConfig'
import sr from './sr/ScrollReveal'

//images
import recipesHeader from '../img/recipes/foodontable.jpg'

import {
	recipe1Bg,
	recipe2Bg,
	recipe3Bg,
	recipe4Bg,
	recipe5Bg,
	recipe6Bg,
	recipe7Bg,
	recipe8Bg,
	recipe9Bg
} from './recipesBgImages'


class Recipes extends Component {

  componentDidMount() {
  	document.title = "Recipes | The Fresh Grocer"

 		//Scroll Reveal
    const listItem1Config = {
      origin: 'top',
      duration: 1000,
      delay: 90,
      scale: 1,
      easing: 'ease',
    }

    const listItem2Config = {
      origin: 'top',
      duration: 1000,
      delay: 200,
      scale: 1,
      easing: 'ease',
    }
    
    const listItem3Config = {
      origin: 'top',
      duration: 1000,
      delay: 400,
      scale: 1,
      easing: 'ease',
    }

		sr.reveal(this.mainHeaderImg, mainHeaderImgConfig);
		sr.reveal(this.innerpTitle, innerpTitleConfig);
    sr.reveal(this.mainSubheader, mainSubheaderConfig);
    sr.reveal(this.listItem1, listItem1Config);
    sr.reveal(this.listItem2, listItem2Config);
    sr.reveal(this.listItem3, listItem3Config);
    sr.reveal(this.listItem4, listItem1Config);
    sr.reveal(this.listItem5, listItem2Config);
    sr.reveal(this.listItem6, listItem3Config);
    sr.reveal(this.listItem7, listItem1Config);
    sr.reveal(this.listItem8, listItem2Config); 
    sr.reveal(this.listItem9, listItem3Config);     
  }


  render() {
    return (
			<MainPage
				title="Recipes" 
				headerImg={recipesHeader}>

				<section className="container">
					<h2 className="u-text-left" ref={(r) => { this.mainSubheader = r; }}>Check out the latest recipes:</h2>

	        <div className="recipes-wrap u-clearfix">

	        	<RecipeBox 
	        		reference={(r) => { this.listItem1 = r; }} 
	        		bgImage={recipe1Bg}
	        	/>

	        	<RecipeBox 
	        		reference={(r) => { this.listItem2 = r; }} 
	        		bgImage={recipe2Bg}
	        	/>

	        	<RecipeBox 
	        		reference={(r) => { this.listItem3 = r; }} 
	        		bgImage={recipe3Bg}
	        	/>

	        	<RecipeBox 
	        		reference={(r) => { this.listItem4 = r; }} 
	        		bgImage={recipe4Bg}
	        	/>

	        	<RecipeBox 
	        		reference={(r) => { this.listItem5 = r; }} 
	        		bgImage={recipe5Bg}
	        	/>

	        	<RecipeBox 
	        		reference={(r) => { this.listItem6 = r; }} 
	        		bgImage={recipe6Bg}
	        	/>

	        	<RecipeBox 
	        		reference={(r) => { this.listItem7 = r; }} 
	        		bgImage={recipe7Bg}
	        	/>

	        	<RecipeBox 
	        		reference={(r) => { this.listItem8 = r; }} 
	        		bgImage={recipe8Bg}
	        	/>

	        	<RecipeBox 
	        		reference={(r) => { this.listItem9 = r; }} 
	        		bgImage={recipe9Bg}
	        	/>

	        </div>

	      </section>
					
			</MainPage>
    );
  }
}


export default Recipes

