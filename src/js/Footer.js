import React, { Component } from 'react'
import Scroll from 'react-scroll'

//Necessary for React Scroll
const scroll = Scroll.animateScroll;


class Footer extends Component {
	scrollToTop() {
		scroll.scrollToTop();
	}

	render() {
		return (
		  <footer className="footer u-clearfix">
		  	<ul className="footer__nav">
		  		<li>&copy; The Fresh Grocer {new Date().getFullYear()}</li>
		  		<li><a href="#">Careers</a></li>
		  		<li><a href="#">Terms of Use</a></li>
		  		<li><a href="#">Privacy Policy</a></li>
		  	</ul>

		  	<div className="footer__backtotop">
		  		<button className="btn-backtotop" type="button" onClick={this.scrollToTop}>
		  			<i className="fa fa-chevron-circle-up"></i>
		  		</button>
		  	</div>
		  </footer>
		);
	}
}


export default Footer

