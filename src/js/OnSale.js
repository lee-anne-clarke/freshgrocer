import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import sr from './ScrollReveal.js'

//images
import onsaleHeader from '../img/onsale/pie1.jpg'
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
    sr.reveal(this.refs.listItem9, listItemConfig);
  }


  render () {
    return (
      <main className="innerpage" id="page-wrap">

        <div className="u-relative"> 
          <div className="innerpage__title" ref="innerpageTitle">
            <h1>On Sale</h1>
          </div>

          <div ref="headerImg">
            <Parallax bgImage={onsaleHeader} strength={300} />
          </div>
        </div>

        <div className="maintext" ref="mainText1">
          <h2>Check out this week's featured items on sale:</h2>

          <div className="onsale-list u-clearfix">

            <div className="onsale-li" ref="listItem1">
              <div className="onsale-li-inner">
                <img src={pumpkins} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref="listItem2">
              <div className="onsale-li-inner">
                <img src={pastries} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref="listItem3">
              <div className="onsale-li-inner">
                <img src={tomatoes} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref="listItem4">
              <div className="onsale-li-inner">
                <img src={fruitsveggies} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref="listItem5">
              <div className="onsale-li-inner">
                <img src={strawberries} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref="listItem6">
              <div className="onsale-li-inner">
                <img src={pie2} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref="listItem7">
              <div className="onsale-li-inner">
                <img src={apples} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref="listItem8">
              <div className="onsale-li-inner">
                <img src={coffebeans} alt="" />

                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale-li" ref="listItem9">
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

