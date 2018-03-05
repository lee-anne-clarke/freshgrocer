import React, { Component } from 'react'
import Scroll from 'react-scroll'

//Necessary for React Scroll package
let scroll = Scroll.animateScroll;


class Footer extends Component {
	scrollToTop() {
		scroll.scrollToTop();
	}

	render () {

		return (
		  <footer className="clearfix">
		  	<ul className="footer__nav">
		  		<li>&copy; Fresh Grocer 2016</li>
		  		<li><a href="#">Careers</a></li>
		  		<li><a href="#">Terms of Use</a></li>
		  		<li><a href="#">Privacy Policy</a></li>
		  	</ul>

		  	<div className="footer__backtotop">
		  		<i className="fa fa-chevron-circle-up backtotop__btn" onClick={this.scrollToTop}></i>
		  	</div>
		  </footer>
		);
	}
}


export default Footer

