import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Parallax } from 'react-parallax'
import sr from './sr/ScrollReveal'

//images
import grapefruit1 from '../img/home/grapefruit1.jpg'
import pumpkins2 from '../img/home/pumpkins2.jpg'
import personholdingsb2 from '../img/home/personholdingsb2.jpg'
import cuttingboard from '../img/home/cuttingboard.jpg'


class Homepage extends Component {

  componentDidMount = () => {
    //Scroll Reveal
		const homeConfig = {
		  origin: 'left',
		  duration: 1000,
		  delay: 100,
		  distance: '500px',
		  scale: 1,
		  easing: 'ease',
		}

    sr.reveal(this.box1, homeConfig);
    sr.reveal(this.box2, homeConfig);
    sr.reveal(this.box3, homeConfig);
    sr.reveal(this.box4, homeConfig);
  }


  render () {
    return (
      <main className="homepage" id="page-wrap">

        <Parallax bgImage={grapefruit1} strength={300}>
          <section className="homepage__callout" ref={(r) => { this.box1 = r; }}> 
            <h1>Welcome to The Fresh Grocer</h1>
            <h2>Your friendly neighborhood grocery store</h2>
            <p>
            	<NavLink to="/findstores" className="btn" activeClassName="active">Find a store near you</NavLink>
            </p>
          </section>
        </Parallax>
    
        <Parallax bgImage={pumpkins2} strength={300}>
          <section className="homepage__callout" ref={(r) => { this.box2 = r; }}> 
            <h1>Get ready for Fall</h1>
            <h2>Find the best ingredients for your holiday meals</h2>
            <p>
            	<NavLink to="/onsale" className="btn" activeClassName="active">Check out the latest deals</NavLink>
            </p>
          </section>
        </Parallax>
    
        <Parallax bgImage={personholdingsb2} strength={300}>
          <section className="homepage__callout" ref={(r) => { this.box3 = r; }}> 
            <h1>The freshest ingredients</h1>
            <h2>All of our products are of the highest quality</h2>
            <p>
            	<NavLink to="/about" className="btn" activeClassName="active">Read about our history</NavLink>
            </p>
          </section>
        </Parallax>

        <Parallax bgImage={cuttingboard} strength={300}>
          <section className="homepage__callout" ref={(r) => { this.box4 = r; }}> 
            <h1>Recipe ideas</h1>
            <h2>Get expert cooking advice from the best chefs in the tri-state area</h2>
            <p>
            	<NavLink to="/recipes" className="btn" activeClassName="active">Find a great recipe</NavLink>
            </p>
          </section>
        </Parallax>

      </main>
    );
  }
}


export default Homepage

