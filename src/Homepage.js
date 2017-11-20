import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import sr from './scrollReveal.js'

//images
import grapefruit1 from './img/home/grapefruit1.jpg'
import pumpkins2 from './img/home/pumpkins2.jpg'
import personholdingsb2 from './img/home/personholdingsb2.jpg'
import cuttingboard from './img/home/cuttingboard.jpg'


class Homepage extends Component {
  props: Props;

  componentDidMount = () => {
    const config = {
      origin: 'left',
      duration: 1000,
      delay: 100,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.box1, config);
    sr.reveal(this.refs.box2, config);
    sr.reveal(this.refs.box3, config);
    sr.reveal(this.refs.box4, config);
  }


  render () {
    return (
      <main className="main--home" id="page-wrap">
        <Parallax bgImage={grapefruit1} strength={300}>
          <div className="headertext headertext--homepage" ref="box1"> 
            <h1>Welcome to The Fresh Grocer</h1>
            <h2>Your friendly neighborhood grocery store</h2>
            <p><a href="/work/freshgrocer/findstores" className="headertext textlink">Find a store near you</a></p>
          </div>
        </Parallax>
    
    
        <Parallax bgImage={pumpkins2} strength={300}>
          <div className="headertext headertext--homepage" ref="box2"> 
            <h1>Get ready for Fall</h1>
            <h2>Find the best ingredients for your holiday meals</h2>
            <p><a href="/work/freshgrocer/onsale" className="headertext textlink">Check out the latest deals</a></p>
          </div>
        </Parallax>
    
    
        <Parallax bgImage={personholdingsb2} strength={300}>
          <div className="headertext headertext--homepage" ref="box3"> 
            <h1>The freshest ingredients </h1>
            <h2>All of our products are of the highest quality</h2>
            <p><a href="/work/freshgrocer/about" className="headertext textlink">Read about our history</a></p>
          </div>
        </Parallax>


        <Parallax bgImage={cuttingboard} strength={300}>
          <div className="headertext headertext--homepage" ref="box4"> 
            <h1>Recipe ideas</h1>
            <h2>Get expert cooking advice from the best chefs in the tri-state area</h2>
            <p><a href="/work/freshgrocer/recipes" className="headertext textlink">Find a great recipe</a></p>
          </div>
        </Parallax>

      </main>
    );
  }
}



export default Homepage

