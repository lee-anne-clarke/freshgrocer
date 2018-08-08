import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import { 
	mainHeaderImgConfig, 
	innerpTitleConfig, 
} from './sr/srConfig'
import sr from './sr/ScrollReveal'


class MainPage extends Component {
  componentDidMount = () => {
  	//Scroll Reveal
    sr.reveal(this.mainHeaderImg, mainHeaderImgConfig);
    sr.reveal(this.innerpTitle, innerpTitleConfig);
  }


  render() {
    return (
    	<main className="innerpage" id="page-wrap">
				<section className="u-relative"> 
					<div className="innerpage__title" ref={(r) => { this.mainHeaderImg = r; }}>
						<h1>{this.props.title}</h1>
					</div>

					<div ref={(r) => { this.innerpTitle = r; }}>
						<Parallax bgImage={this.props.paraBgImg} strength={300} />
					</div>
				</section>

				{this.props.children}
				
			</main>
    );
  }
}


export default MainPage