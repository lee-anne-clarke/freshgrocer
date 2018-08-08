import React, { Component } from 'react'
import MainPage from './MainPage'
import { 
	mainHeaderImgConfig, 
	innerpTitleConfig, 
	mainSubheaderConfig } from './sr/srConfig'
import sr from './sr/ScrollReveal'
import uuid from 'uuid'

//images
import onsaleHeader from '../img/onsale/fruitsveggies2.jpg'


class OnSale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onSaleItems: [
			{ 
				id: uuid(), 
				imgSrc: require("../img/onsale/pumpkins1.jpg"),
				imgAlt: 'pumpkins',
			},
			{ 
				id: uuid(), 
				imgSrc: require("../img/onsale/pastries1.jpg"),
				imgAlt: 'pastries',
			},
			{ 
				id: uuid(), 
				imgSrc: require("../img/onsale/tomatoes1.jpg"),
				imgAlt: 'tomatoes',
			},
			{ 
				id: uuid(), 
				imgSrc: require("../img/onsale/fruitsveggies1.jpg"),
				imgAlt: 'fruitsveggies',
			},
			{ 
				id: uuid(), 
				imgSrc: require("../img/onsale/strawberries1.jpg"),
				imgAlt: '',
			},
			{ 
				id: uuid(), 
				imgSrc: require("../img/onsale/pie2.jpg"),
				imgAlt: 'strawberries',
			},
			{ 
				id: uuid(), 
				imgSrc: require("../img/onsale/apples.jpg"),
				imgAlt: 'apples',
			},
			{ 
				id: uuid(), 
				imgSrc: require("../img/onsale/coffebeans.jpg"),
				imgAlt: 'coffebeans',
			},
			{ 
				id: uuid(), 
				imgSrc: require("../img/onsale/cupcakes.jpg"),
				imgAlt: 'cupcakes',
			},
     ],
    }
  }

  componentDidMount = () => {
  	document.title = "Items On Sale | The Fresh Grocer"

  	//Scroll Reveal

    sr.reveal(this.mainHeaderImg, mainHeaderImgConfig);
    sr.reveal(this.innerpTitle, innerpTitleConfig);
    sr.reveal(this.mainSubheader, mainSubheaderConfig);
  }


  render() {
  	const { onSaleItems } = this.state

    return (
			<MainPage
				title="On Sale" 
				paraBgImg={onsaleHeader}>

        <section className="container">
        	<h2 ref={(r) => { this.mainSubheader = r; }}>Check out this week's featured items on sale:</h2>

	        <div className="onsale-items u-clearfix">

		      	{onSaleItems.map(({ id, imgSrc, imgAlt }) => (
						  <div className="onsale-item" key={id}>
						    <div className="onsale-item-inner">
						      <img className="onsale-item-img" src={imgSrc} alt={imgAlt} />
						      <div className="onsale-item-innertext">
						        <h3>Vestibulum laoreet gravida pretium</h3>
						        <p>Ut purus nulla, hendrerit eget blandit sit amet 
						          <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
						      </div>
						    </div>
						  </div>
		      	))}
	          
	        </div>
        </section>
				
			</MainPage>
    );
  }
}


export default OnSale

