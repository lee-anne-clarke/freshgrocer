import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import sr from './ScrollReveal.js'

//images
import findStoresHeader from '../img/storefront.jpg'


class FindStores extends Component {
  
  componentDidMount = () => {
    const innerpageTitleConfig = {
      origin: 'top',
      duration: 1800,
      delay: 300,
      distance: 0,
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.innerpageTitle, innerpageTitleConfig);


    const headerImgConfig = {
      origin: 'top',
      duration: 1000,
      delay: 100,
      distance: 0,
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.headerImg, headerImgConfig);


    const listItemConfig = {
      origin: 'top',
      duration: 1000,
      delay: 90,
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.listItem1, listItemConfig);
    sr.reveal(this.refs.listItem2, listItemConfig);
    sr.reveal(this.refs.listItem3, listItemConfig);
    sr.reveal(this.refs.listItem4, listItemConfig);
    sr.reveal(this.refs.listItem5, listItemConfig);
    sr.reveal(this.refs.listItem6, listItemConfig);
    sr.reveal(this.refs.listItem7, listItemConfig);
    sr.reveal(this.refs.listItem8, listItemConfig); 
  }


  render () {
    return (
			<main className="innerpage" id="page-wrap">

				<div className="u-relative"> 
					<div className="innerpage__title" ref="innerpageTitle">
						<h1>Find A Store</h1>
					</div>

					<div ref="headerImg">
						<Parallax bgImage={findStoresHeader} strength={300} />
					</div>
				</div>


				<div className="maintext">
					<h2>Come visit us at one of the following locations:</h2>

					<ul className="findstores-list u-clearfix">
						<li className="findstores-li" ref="listItem1">
							<b>The Fresh Grocer #1</b><br /><br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>

						<li className="findstores-li" ref="listItem2">
							<b>The Fresh Grocer #2</b><br /><br />
							123 Avenue Lane<br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>

						<li className="findstores-li" ref="listItem3">
							<b>The Fresh Grocer #3</b><br /><br />
							123 Avenue Lane<br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>

						<li className="findstores-li" ref="listItem4">
							<b>The Fresh Grocer #4</b><br /><br />
							123 Avenue Lane<br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>

						<li className="findstores-li" ref="listItem5">
							<b>The Fresh Grocer #5</b><br /><br />
							123 Avenue Lane<br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>

						<li className="findstores-li" ref="listItem6">
							<b>The Fresh Grocer #6</b><br /><br />
							123 Avenue Lane<br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>

						<li className="findstores-li" ref="listItem7">
							<b>The Fresh Grocer #7</b><br /><br />
							123 Avenue Lane<br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>

						<li className="findstores-li" ref="listItem8">
							<b>The Fresh Grocer #8</b><br /><br />
							123 Avenue Lane<br />
							Philadelphia, Pennsylvania 19122<br /><br />
							Phone: (215) 555-5555<br /><br />
							<a className="btn" href="#">Driving Directions</a>
						</li>
					</ul>

				</div>
			</main>
    );
  }
}


export default FindStores

