import React, { Component } from 'react'
import MainPage from './MainPage'
import FindStoresList from './FindStoresList'
import { 
	mainHeaderImgConfig, 
	innerpTitleConfig, 
	mainSubheaderConfig
} from './sr/srConfig'
import sr from './sr/ScrollReveal'

//images
import findStoresHeader from '../img/storefront.jpg'


class FindStores extends Component {
	
  componentDidMount = () => {
  	document.title = "Find A Store | The Fresh Grocer"

  	//Scroll Reveal
    sr.reveal(this.mainHeaderImg, mainHeaderImgConfig);
    sr.reveal(this.innerpTitle, innerpTitleConfig);
    sr.reveal(this.mainSubheader, mainSubheaderConfig);
  }


  render() {
    return (
			<MainPage
				title="Find A Store" 
				paraBgImg={findStoresHeader}>

				<section className="container">
					<h2 ref={(r) => { this.mainSubheader = r; }}>Come visit us at one of the following locations:</h2>

					<FindStoresList />
				</section>
					
			</MainPage>
    );
  }
}


export default FindStores

