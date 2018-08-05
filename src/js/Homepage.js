import React, { Component } from 'react'
import HomeBox from './boxes/HomeBox'
import sr from './sr/ScrollReveal'

//images
import grapefruit1 from '../img/home/grapefruit1.jpg'
import pumpkins2 from '../img/home/pumpkins2.jpg'
import personholdingsb2 from '../img/home/personholdingsb2.jpg'
import cuttingboard from '../img/home/cuttingboard.jpg'


class Homepage extends Component {

  componentDidMount = () => {
  	document.title = "Welcome to The Fresh Grocer"

    //Scroll Reveal
		const homeConfig1 = {
		  origin: 'left',
		  duration: 1000,
		  delay: 350,
		  distance: '500px',
		  scale: 1,
		  easing: 'ease',
		}

		const homeConfig = {
		  origin: 'left',
		  duration: 1000,
		  delay: 100,
		  distance: '500px',
		  scale: 1,
		  easing: 'ease',
		}

    sr.reveal(this.box1, homeConfig1);
    sr.reveal(this.box2, homeConfig);
    sr.reveal(this.box3, homeConfig);
    sr.reveal(this.box4, homeConfig);
  }


  render() {
    return (
      <main className="homepage" id="page-wrap">

        <HomeBox 
        	bgImage={grapefruit1} 
        	headline="Welcome to The Fresh Grocer"
        	subhead="Your friendly neighborhood grocery store"
        	btnUrl="findstores"
        	btnText="Find a store near you" 
        	reference={(r) => { this.box1 = r; }}
        />
        
        <HomeBox 
        	bgImage={pumpkins2}
        	headline="Get ready for Fall"
        	subhead="Find the best ingredients for your holiday meals"
        	btnUrl="onsale"
        	btnText="Check out the latest deals"
        	reference={(r) => { this.box2 = r; }}
        />

        <HomeBox 
        	bgImage={personholdingsb2} 
        	headline="The freshest ingredients"
        	subhead="All of our products are of the highest quality"
        	btnUrl="about"
        	btnText="Read about our history"
        	reference={(r) => { this.box3 = r; }}
        />

        <HomeBox 
        	bgImage={cuttingboard}
        	headline="Recipe ideas"
        	subhead="Get expert cooking advice from the best chefs in the tri-state area"
        	btnUrl="recipes"
        	btnText="Find a great recipe"
        	reference={(r) => { this.box4 = r; }}
        />

      </main>
    );
  }
}


export default Homepage

