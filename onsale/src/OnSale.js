import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import sr from './scrollReveal.js'

//images
import onsaleHeader from './img/pie1.jpg'
import pumpkins from './img/pumpkins1.jpg'
import pastries from './img/pastries1.jpg'
import tomatoes from './img/tomatoes1.jpg'
import fruitsveggies from './img/fruitsveggies1.jpg'
import strawberries from './img/strawberries1.jpg'
import pie2 from './img/pie2.jpg'
import apples from './img/apples.jpg'
import coffebeans from './img/coffebeans.jpg'
import cupcakes from './img/cupcakes.jpg'


class OnSale extends Component {
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
    sr.reveal(this.refs.listItem9, listItemConfig);
  }


  render () {
    return (
      <main className="main--innerpage" id="page-wrap">

        <div className="innerpage__header"> 
          <div className="headertext headertext--innerpage" ref="headerTitle">
            <h1>On Sale</h1>
          </div>

          <div ref="headerImg">
            <Parallax bgImage={onsaleHeader} strength={300} />
          </div>
        </div>

        <div className="innerpage__maintext" ref="mainText1">
          <h2>Check out this week's featured items on sale:</h2>

          <div className="onsale__list clearfix">

            <div className="onsale__list__item" ref="listItem1">
              <div className="onsale__list__item__inner">
                <img src={pumpkins} alt="" />

                <div className="onsale__list__item__innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale__deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale__list__item" ref="listItem2">
              <div className="onsale__list__item__inner">
                <img src={pastries} alt="" />

                <div className="onsale__list__item__innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale__deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale__list__item" ref="listItem3">
              <div className="onsale__list__item__inner">
                <img src={tomatoes} alt="" />

                <div className="onsale__list__item__innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale__deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale__list__item" ref="listItem4">
              <div className="onsale__list__item__inner">
                <img src={fruitsveggies} alt="" />

                <div className="onsale__list__item__innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale__deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale__list__item" ref="listItem5">
              <div className="onsale__list__item__inner">
                <img src={strawberries} alt="" />

                <div className="onsale__list__item__innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale__deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale__list__item" ref="listItem6">
              <div className="onsale__list__item__inner">
                <img src={pie2} alt="" />

                <div className="onsale__list__item__innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale__deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale__list__item" ref="listItem7">
              <div className="onsale__list__item__inner">
                <img src={apples} alt="" />

                <div className="onsale__list__item__innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale__deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale__list__item" ref="listItem8">
              <div className="onsale__list__item__inner">
                <img src={coffebeans} alt="" />

                <div className="onsale__list__item__innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale__deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


            <div className="onsale__list__item" ref="listItem9">
              <div className="onsale__list__item__inner">
                <img src={cupcakes} alt="" />

                <div className="onsale__list__item__innertext">
                  <h3>Vestibulum laoreet gravida pretium</h3>
                  
                  <p>Ut purus nulla, hendrerit eget blandit sit amet 
                    <span className="onsale__deal"><i className="fa fa-tags"></i> 20% off</span></p>
                </div>
              </div>
            </div>


          </div> {/* end of .onsale__list.clearfix */}

        </div> {/* end of .innerpage__maintext */}

      </main>
    );
  }
}



export default OnSale

