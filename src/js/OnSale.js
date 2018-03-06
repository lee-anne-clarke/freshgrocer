import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import { 
	innerpTitleConfig, 
	headerImgConfig,
	mainSubheader,  
	listItemConfig } from './sr/srConfig'
import sr from './sr/ScrollReveal'

//images
import onsaleHeader from '../img/onsale/fruitsveggies2.jpg'
import pumpkins from '../img/onsale/pumpkins1.jpg'
import pastries from '../img/onsale/pastries1.jpg'
import tomatoes from '../img/onsale/tomatoes1.jpg'
import fruitsveggies from '../img/onsale/fruitsveggies1.jpg'
import strawberries from '../img/onsale/strawberries1.jpg'
import pie2 from '../img/onsale/pie2.jpg'
import apples from '../img/onsale/apples.jpg'
import coffebeans from '../img/onsale/coffebeans.jpg'
import cupcakes from '../img/onsale/cupcakes.jpg'


class OnSale extends Component {

  componentDidMount = () => {
  	//Scroll Reveal
    sr.reveal(this.innerpTitle, innerpTitleConfig);
    sr.reveal(this.headerImg, headerImgConfig);
    sr.reveal(this.mainSubheader, mainSubheader);
    sr.reveal(this.listItem1, listItemConfig);
    sr.reveal(this.listItem2, listItemConfig);
    sr.reveal(this.listItem3, listItemConfig);
    sr.reveal(this.listItem4, listItemConfig);
    sr.reveal(this.listItem5, listItemConfig);
    sr.reveal(this.listItem6, listItemConfig);
    sr.reveal(this.listItem7, listItemConfig);
    sr.reveal(this.listItem8, listItemConfig);
    sr.reveal(this.listItem9, listItemConfig);
  }


  render () {
    return (
      <main className="innerpage" id="page-wrap">

        <div className="u-relative"> 
          <div className="innerpage__title" ref={(r) => { this.innerpTitle = r; }}>
            <h1>On Sale</h1>
          </div>

          <div ref={(r) => { this.headerImg = r; }}>
            <Parallax bgImage={onsaleHeader} strength={300} />
          </div>
        </div>

        <div className="maintext">
          <h2 ref={(r) => { this.mainSubheader = r; }}>Check out this week's featured items on sale:</h2>

          <div className="onsale-list u-clearfix">

            <div className="onsale-li" ref={(r) => { this.listItem1 = r; }}>
              <div className="onsale-li-inner">
                <img src={pumpkins} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref={(r) => { this.listItem2 = r; }}>
              <div className="onsale-li-inner">
                <img src={pastries} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref={(r) => { this.listItem3 = r; }}>
              <div className="onsale-li-inner">
                <img src={tomatoes} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref={(r) => { this.listItem4 = r; }}>
              <div className="onsale-li-inner">
                <img src={fruitsveggies} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref={(r) => { this.listItem5 = r; }}>
              <div className="onsale-li-inner">
                <img src={strawberries} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref={(r) => { this.listItem6 = r; }}>
              <div className="onsale-li-inner">
                <img src={pie2} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref={(r) => { this.listItem7 = r; }}>
              <div className="onsale-li-inner">
                <img src={apples} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref={(r) => { this.listItem8 = r; }}>
              <div className="onsale-li-inner">
                <img src={coffebeans} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref={(r) => { this.listItem9 = r; }}>
              <div className="onsale-li-inner">
                <img src={cupcakes} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>

          </div> {/* end of .onsale-list.clearfix */}
        </div> {/* end of .maintext */}
      </main>
    );
  }
}


export default OnSale

