import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import sr from './scrollReveal.js'

//images
import recipesHeader from './img/foodontable.jpg'

import cookiesImg from './img/cookies2.jpg'
import cookingstuff1Img from './img/cookingstuff1.jpg'
import pieImg from './img/pie2.jpg'
import ricebowlImg from './img/ricebowl.jpg'
import veggiesImg from './img/veggies2.jpg'
import platterImg from './img/platter.jpg'
import pastaImg from './img/drypasta.jpg'
import grillImg from './img/grill.jpg'
import cookingstuff2Img from './img/cookingstuff2.jpg'


let recipe1Bg = {
	backgroundImage: 'url(' + cookiesImg + ')',
	backgroundSize: 'cover'
}

let recipe2Bg = {
	backgroundImage: 'url(' + cookingstuff1Img + ')',
	backgroundSize: 'cover'
}

let recipe3Bg = {
	backgroundImage: 'url(' + pieImg + ')',
	backgroundSize: 'cover'
}

let recipe4Bg = {
	backgroundImage: 'url(' + ricebowlImg + ')',
	backgroundSize: 'cover'
}

let recipe5Bg = {
	backgroundImage: 'url(' + veggiesImg + ')',
	backgroundSize: 'cover'
}

let recipe6Bg = {
	backgroundImage: 'url(' + platterImg + ')',
	backgroundSize: 'cover'
}

let recipe7Bg = {
	backgroundImage: 'url(' + pastaImg + ')',
	backgroundSize: 'cover'
}

let recipe8Bg = {
	backgroundImage: 'url(' + grillImg + ')',
	backgroundSize: 'cover'
}

let recipe9Bg = {
	backgroundImage: 'url(' + cookingstuff2Img + ')',
	backgroundSize: 'cover'
}


class Recipes extends Component {
  props: Props;

  componentDidMount = () => {
    const headerTitleConfig = {
      origin: 'top',
      duration: 1800,
      delay: 300,
      distance: 0,
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.headerTitle, headerTitleConfig);


    const headerImgConfig = {
      origin: 'top',
      duration: 1000,
      delay: 100,
      distance: 0,
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.headerImg, headerImgConfig);

    
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
    
    sr.reveal(this.refs.listItem1, listItem1Config);
    sr.reveal(this.refs.listItem2, listItem2Config);
    sr.reveal(this.refs.listItem3, listItem3Config);
    sr.reveal(this.refs.listItem4, listItem1Config);
    sr.reveal(this.refs.listItem5, listItem2Config);
    sr.reveal(this.refs.listItem6, listItem3Config);
    sr.reveal(this.refs.listItem7, listItem1Config);
    sr.reveal(this.refs.listItem8, listItem2Config); 
    sr.reveal(this.refs.listItem9, listItem3Config);     
  }


  render () {
    return (
      <main className="main--innerpage" id="page-wrap">

        <div className="innerpage__header"> 
          <div className="headertext headertext--innerpage" ref="headerTitle">
            <h1>Recipes</h1>
          </div>
    
          <div ref="headerImg">
            <Parallax bgImage={recipesHeader} strength={300} />
          </div>
        </div>
  
  
        <div className="innerpage__maintext innerpage__maintext--recipes">
          <h2>Check out the latest recipes:</h2>
    

          <div className="recipes__list clearfix" id="recipesList">
            
            <figure className="recipes__list__item" ref="listItem1">
              <div className="recipes__list__item__hover">
                <figcaption className="recipes__list__item__inner" style={recipe1Bg}>
                  <div className="recipes__list__item__innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="list__item__links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes__list__item" ref="listItem2">
              <div className="recipes__list__item__hover">
                <figcaption className="recipes__list__item__inner" style={recipe2Bg}>
                  <div className="recipes__list__item__innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="list__item__links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes__list__item" ref="listItem3">
              <div className="recipes__list__item__hover">
                <figcaption className="recipes__list__item__inner" style={recipe3Bg}>
                  <div className="recipes__list__item__innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="list__item__links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes__list__item" ref="listItem4">
              <div className="recipes__list__item__hover">
                <figcaption className="recipes__list__item__inner" style={recipe4Bg}>
                  <div className="recipes__list__item__innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="list__item__links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes__list__item" ref="listItem5">
              <div className="recipes__list__item__hover">
                <figcaption className="recipes__list__item__inner" style={recipe5Bg}>
                  <div className="recipes__list__item__innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="list__item__links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes__list__item" ref="listItem6">
              <div className="recipes__list__item__hover">
                <figcaption className="recipes__list__item__inner" style={recipe6Bg}>
                  <div className="recipes__list__item__innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="list__item__links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes__list__item" ref="listItem7">
              <div className="recipes__list__item__hover">
                <figcaption className="recipes__list__item__inner" style={recipe7Bg}>
                  <div className="recipes__list__item__innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="list__item__links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes__list__item" ref="listItem8">
              <div className="recipes__list__item__hover">
                <figcaption className="recipes__list__item__inner" style={recipe8Bg}>
                  <div className="recipes__list__item__innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="list__item__links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
            
            <figure className="recipes__list__item" ref="listItem9">
              <div className="recipes__list__item__hover">
                <figcaption className="recipes__list__item__inner" style={recipe9Bg}>
                  <div className="recipes__list__item__innertext">
                    <h3>Proin at laoreet turpis</h3>
                    <p>Etiam gravida, ipsum at tempor finibus, purus nulla sodales elit, quis ultrices mauris quam et ex. Quisque et ornare ex. Aliquam tristique orci a dignissim tristique. Nullam elementum...</p>
                    
                    <div className="list__item__links">
                      <p><a href="#"><i className="fa fa-tasks"></i> View the recipe</a></p>
                      <p><a href="#"><i className="fa fa-envelope-o"></i> Send to a friend</a></p>
                    </div>
    
                  </div>
                </figcaption>
              </div>
            </figure>
            
            
          </div> {/* end of .recipes__list.clearfix */}
  
        </div> {/* end of .innerpage__maintext */}

      </main>
    );
  }
}



export default Recipes

