import React, { Component } from 'react'
import MainPage from './MainPage'
import onSaleData from './onSaleData'
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
    this.state = { onSaleData }
  }

  componentDidMount() {
  	document.title = "Items On Sale | The Fresh Grocer"

  	//Scroll Reveal

    sr.reveal(this.mainHeaderImg, mainHeaderImgConfig);
    sr.reveal(this.innerpTitle, innerpTitleConfig);
    sr.reveal(this.mainSubheader, mainSubheaderConfig);
  }


  render() {
  	const { onSaleData } = this.state

    return (
			<MainPage
				title="On Sale" 
				headerImg={onsaleHeader}>

        <section className="container">
        	<h2 ref={(r) => { this.mainSubheader = r; }}>Check out this week's featured items on sale:</h2>

	        <div className="onsale-items u-clearfix">

		      	{onSaleData.map(({ imgSrc, imgAlt }) => (
						  <div className="onsale-item" key={uuid()}>
						    <div className="onsale-item-inner">
						      <img className="onsale-item-img" src={imgSrc} alt={imgAlt} />
						      <div className="onsale-item-innertext">
						        <h3>Vestibulum laoreet gravida pretium</h3>
						        <p>Ut purus nulla, hendrerit eget blandit sit amet 
						          <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span>
										</p>
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

