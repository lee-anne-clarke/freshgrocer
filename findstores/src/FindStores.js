import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import sr from './scrollReveal.js'

//images
import findStoresHeader from './img/storefront.jpg'


class FindStores extends Component {
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
      <main className="main--innerpage" id="page-wrap">

		<div className="innerpage__header"> 
			<div className="headertext headertext--innerpage" ref="headerTitle">
				<h1>Find A Store</h1>
			</div>

			<div ref="headerImg">
				<Parallax bgImage={findStoresHeader} strength={300} />
			</div>
		</div>


        <div className="innerpage__maintext">
			<h2>Come visit us at one of the following locations:</h2>

			<ul className="findstores__list clearfix">
				
				<li className="findstores__list__item" ref="listItem1">
					<b>The Fresh Grocer #1</b><br /><br />

					Philadelphia, Pennsylvania 19122<br /><br />

					Phone: (215) 555-5555<br /><br />
					<a className="textlink" href="#">Driving Directions</a>
				</li>
				
				<li className="findstores__list__item" ref="listItem2">
					<b>The Fresh Grocer #2</b><br /><br />

					123 Avenue Lane<br />

					Philadelphia, Pennsylvania 19122<br /><br />

					Phone: (215) 555-5555<br /><br />
					<a className="textlink" href="#">Driving Directions</a>
				</li>
				
				<li className="findstores__list__item" ref="listItem3">
					<b>The Fresh Grocer #3</b><br /><br />

					123 Avenue Lane<br />

					Philadelphia, Pennsylvania 19122<br /><br />

					Phone: (215) 555-5555<br /><br />
					<a className="textlink" href="#">Driving Directions</a>
				</li>
				
				<li className="findstores__list__item" ref="listItem4">
					<b>The Fresh Grocer #4</b><br /><br />

					123 Avenue Lane<br />

					Philadelphia, Pennsylvania 19122<br /><br />

					Phone: (215) 555-5555<br /><br />
					<a className="textlink" href="#">Driving Directions</a>
				</li>
				
				<li className="findstores__list__item" ref="listItem5">
					<b>The Fresh Grocer #5</b><br /><br />

					123 Avenue Lane<br />

					Philadelphia, Pennsylvania 19122<br /><br />

					Phone: (215) 555-5555<br /><br />
					<a className="textlink" href="#">Driving Directions</a>
				</li>
				
				<li className="findstores__list__item" ref="listItem6">
					<b>The Fresh Grocer #6</b><br /><br />

					123 Avenue Lane<br />

					Philadelphia, Pennsylvania 19122<br /><br />

					Phone: (215) 555-5555<br /><br />
					<a className="textlink" href="#">Driving Directions</a>
				</li>
				
				<li className="findstores__list__item" ref="listItem7">
					<b>The Fresh Grocer #7</b><br /><br />

					123 Avenue Lane<br />

					Philadelphia, Pennsylvania 19122<br /><br />

					Phone: (215) 555-5555<br /><br />
					<a className="textlink" href="#">Driving Directions</a>
				</li>
				
				<li className="findstores__list__item" ref="listItem8">
					<b>The Fresh Grocer #8</b><br /><br />

					123 Avenue Lane<br />

					Philadelphia, Pennsylvania 19122<br /><br />

					Phone: (215) 555-5555<br /><br />
					<a className="textlink" href="#">Driving Directions</a>
				</li>

			</ul>

        </div> {/* end of .innerpage__maintext */}

      </main>
    );
  }
}



export default FindStores

