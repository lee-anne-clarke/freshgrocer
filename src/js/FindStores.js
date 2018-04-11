import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import uuid from 'uuid'
import FGAddress from './FGAddress'
import { 
	innerpTitleConfig, 
	mainSubheaderConfig,  
	listItemConfig } from './sr/srConfig'
import sr from './sr/ScrollReveal'

//images
import findStoresHeader from '../img/storefront.jpg'


class FindStores extends Component {
  
  componentDidMount = () => {
  	//Scroll Reveal
    sr.reveal(this.innerpTitle, innerpTitleConfig);
    sr.reveal(this.mainSubheader, mainSubheaderConfig);
    sr.reveal(this.listItem1, listItemConfig);
    sr.reveal(this.listItem2, listItemConfig);
    sr.reveal(this.listItem3, listItemConfig);
    sr.reveal(this.listItem4, listItemConfig);
    sr.reveal(this.listItem5, listItemConfig);
    sr.reveal(this.listItem6, listItemConfig);
    sr.reveal(this.listItem7, listItemConfig);
    sr.reveal(this.listItem8, listItemConfig); 
  }


  render() {
    return (
			<main className="innerpage" id="page-wrap">

				<section className="u-relative"> 
					<div className="innerpage__title" ref={(r) => { this.innerpTitle = r; }}>
						<h1>Find A Store</h1>
					</div>

					<div>
						<Parallax bgImage={findStoresHeader} strength={300} />
					</div>
				</section>


				<section className="container">
					<h2 ref={(r) => { this.mainSubheader = r; }}>Come visit us at one of the following locations:</h2>

					<ul className="findstores-list u-clearfix">
						<FGAddress 
							keyNum={uuid()} 
							storeNum="1" 
							reference={(r) => { this.listItem1 = r; }}
						/>

						<FGAddress 
							keyNum={uuid()} 
							storeNum="2" 
							reference={(r) => { this.listItem2 = r; }}
						/>

						<FGAddress 
							keyNum={uuid()} 
							storeNum="3" 
							reference={(r) => { this.listItem3 = r; }}
						/>

						<FGAddress 
							keyNum={uuid()} 
							storeNum="4" 
							reference={(r) => { this.listItem4 = r; }}
						/>

						<FGAddress 
							keyNum={uuid()} 
							storeNum="5" 
							reference={(r) => { this.listItem5 = r; }}
						/>

						<FGAddress 
							keyNum={uuid()} 
							storeNum="6" 
							reference={(r) => { this.listItem6 = r; }}
						/>

						<FGAddress 
							keyNum={uuid()} 
							storeNum="7" 
							reference={(r) => { this.listItem7 = r; }}
						/>

						<FGAddress 
							keyNum={uuid()} 
							storeNum="8" 
							reference={(r) => { this.listItem8 = r; }}
						/>
					</ul>

				</section>
			</main>
    );
  }
}


export default FindStores

