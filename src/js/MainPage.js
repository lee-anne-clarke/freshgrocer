import React, { PureComponent } from 'react'
import { 
	mainHeaderImgConfig, 
	innerpTitleConfig } from './sr/srConfig'
import sr from './sr/ScrollReveal'


class MainPage extends PureComponent {

  componentDidMount() {
  	//Scroll Reveal
    sr.reveal(this.mainHeaderImg, mainHeaderImgConfig);
    sr.reveal(this.innerpTitle, innerpTitleConfig);
  }

  render() {
  	const style = {
			backgroundImage: `url(${this.props.headerImg})`
		}

    return (
    	<main className="innerpage" id="page-wrap">
				<section className="u-relative"> 
					<div className="innerpage__title" ref={(r) => { this.innerpTitle = r; }}>
						<h1>{this.props.title}</h1>
					</div>

					<div className="innerpage__largeBgImg" 
							 ref={(r) => { this.mainHeaderImg = r; }}
							 style={style}>
					</div>
				</section>

				{this.props.children}
				
			</main>
    );
  }
}


export default MainPage