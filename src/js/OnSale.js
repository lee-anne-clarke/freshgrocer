import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import { 
	innerpTitleConfig, 
	mainSubheaderConfig } from './sr/srConfig'
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
    sr.reveal(this.mainSubheader, mainSubheaderConfig);
  }


  render() {
    return (
      <main className="innerpage" id="page-wrap">

        <section className="u-relative"> 
          <div className="innerpage__title" ref={(r) => { this.innerpTitle = r; }}>
            <h1>On Sale</h1>
          </div>

          <div>
            <Parallax bgImage={onsaleHeader} strength={300} />
          </div>
        </section>


        <section className="container">
          <h2 ref={(r) => { this.mainSubheader = r; }}>Check out this week's featured items on sale:</h2>

          <div className="onsale-list u-clearfix">

            <div className="onsale-li">
              <div className="onsale-li-inner">
                <img src={pumpkins} alt="pumpkins" />
                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>

            <div className="onsale-li">
              <div className="onsale-li-inner">
                <img src={pastries} alt="pastries" />
                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>

            <div className="onsale-li">
              <div className="onsale-li-inner">
                <img src={tomatoes} alt="tomatoes" />
                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>
            
            <div className="onsale-li">
              <div className="onsale-li-inner">
                <img src={fruitsveggies} alt="fruits and vegetables" />
                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>

            <div className="onsale-li">
              <div className="onsale-li-inner">
                <img src={strawberries} alt="strawberries" />
                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>

            <div className="onsale-li">
              <div className="onsale-li-inner">
                <img src={pie2} alt="apple pie and apples on a table" />
                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>

            <div className="onsale-li">
              <div className="onsale-li-inner">
                <img src={apples} alt="green apples" />
                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>

            <div className="onsale-li">
              <div className="onsale-li-inner">
                <img src={coffebeans} alt="coffe beans" />
                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>

            <div className="onsale-li">
              <div className="onsale-li-inner">
                <img src={cupcakes} alt="cupcakes" />
                <div className="onsale-li-innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale-deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>
            
          </div> {/* end of .onsale-list.u-clearfix */}
        </section> {/* end of .container */}
      </main>
    );
  }
}


export default OnSale

