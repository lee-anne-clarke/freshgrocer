import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import { 
	innerpTitleConfig, 
	headerImgConfig,
	mainSubheader } from './sr/srConfig'
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

  componentDidMount = () => {
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

		sr.reveal(this.innerpTitle, innerpTitleConfig);
    sr.reveal(this.headerImg, headerImgConfig);
    sr.reveal(this.mainSubheader, mainSubheader);
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


  render () {
    return (
      <main className="innerpage" id="page-wrap">

        <div className="u-relative"> 
          <div className="innerpage__title" ref={(r) => { this.innerpTitle = r; }}>
            <h1>Recipes</h1>
          </div>
    
          <div ref={(r) => { this.headerImg = r; }}>
            <Parallax bgImage={recipesHeader} strength={300} />
          </div>
        </div>
  
  
        <div className="maintext maintext--recipes">
          <h2 className="u-text-left" ref={(r) => { this.mainSubheader = r; }}>Check out the latest recipes:</h2>
    
          <div className="recipes-list u-clearfix" id="recipesList">
            
            <figure className="recipes-li" ref={(r) => { this.listItem1 = r; }}>
              <div className="recipes-li-reveal">
                <figcaption className="recipes-li-inner" style={recipe1Bg}>
                  <div className="recipes-li-innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="recipes-li-links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>

                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes-li" ref={(r) => { this.listItem2 = r; }}>
              <div className="recipes-li-reveal">
                <figcaption className="recipes-li-inner" style={recipe2Bg}>
                  <div className="recipes-li-innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="recipes-li-links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes-li" ref={(r) => { this.listItem3 = r; }}>
              <div className="recipes-li-reveal">
                <figcaption className="recipes-li-inner" style={recipe3Bg}>
                  <div className="recipes-li-innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="recipes-li-links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes-li" ref={(r) => { this.listItem4 = r; }}>
              <div className="recipes-li-reveal">
                <figcaption className="recipes-li-inner" style={recipe4Bg}>
                  <div className="recipes-li-innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="recipes-li-links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes-li" ref={(r) => { this.listItem5 = r; }}>
              <div className="recipes-li-reveal">
                <figcaption className="recipes-li-inner" style={recipe5Bg}>
                  <div className="recipes-li-innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="recipes-li-links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes-li" ref={(r) => { this.listItem6 = r; }}>
              <div className="recipes-li-reveal">
                <figcaption className="recipes-li-inner" style={recipe6Bg}>
                  <div className="recipes-li-innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="recipes-li-links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes-li" ref={(r) => { this.listItem7 = r; }}>
              <div className="recipes-li-reveal">
                <figcaption className="recipes-li-inner" style={recipe7Bg}>
                  <div className="recipes-li-innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="recipes-li-links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes-li" ref={(r) => { this.listItem8 = r; }}>
              <div className="recipes-li-reveal">
                <figcaption className="recipes-li-inner" style={recipe8Bg}>
                  <div className="recipes-li-innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="recipes-li-links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes-li" ref={(r) => { this.listItem9 = r; }}>
              <div className="recipes-li-reveal">
                <figcaption className="recipes-li-inner" style={recipe9Bg}>
                  <div className="recipes-li-innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="recipes-li-links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
          </div> {/* end of .recipes-list.clearfix */}
  
        </div> {/* end of .maintext */}

      </main>
    );
  }
}


export default Recipes

