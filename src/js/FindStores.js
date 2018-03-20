import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
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
						<li className="findstores-li" ref={(r) => { this.listItem1 = r; }}>
							<b>The Fresh Grocer #1</b><br /><br />
							123 Avenue Lane<br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>

						<li className="findstores-li" ref={(r) => { this.listItem2 = r; }}>
							<b>The Fresh Grocer #2</b><br /><br />
							123 Avenue Lane<br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>

						<li className="findstores-li" ref={(r) => { this.listItem3 = r; }}>
							<b>The Fresh Grocer #3</b><br /><br />
							123 Avenue Lane<br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>

						<li className="findstores-li" ref={(r) => { this.listItem4 = r; }}>
							<b>The Fresh Grocer #4</b><br /><br />
							123 Avenue Lane<br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>

						<li className="findstores-li" ref={(r) => { this.listItem5 = r; }}>
							<b>The Fresh Grocer #5</b><br /><br />
							123 Avenue Lane<br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>

						<li className="findstores-li" ref={(r) => { this.listItem6 = r; }}>
							<b>The Fresh Grocer #6</b><br /><br />
							123 Avenue Lane<br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>

						<li className="findstores-li" ref={(r) => { this.listItem7 = r; }}>
							<b>The Fresh Grocer #7</b><br /><br />
							123 Avenue Lane<br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>

						<li className="findstores-li" ref={(r) => { this.listItem8 = r; }}>
							<b>The Fresh Grocer #8</b><br /><br />
							123 Avenue Lane<br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>
					</ul>

				</section>
			</main>
    );
  }
}


export default FindStores

