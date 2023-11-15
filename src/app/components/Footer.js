'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
	const scrollToTop = () => {
		window.scroll({
		  top: 0,
		  behavior: 'smooth',
		});
	}


	return (
	  <footer className="footer u-clearfix">
	  	<ul className="footer__nav">
	  		<li className="footer__nav-li">
	  			&copy; The Fresh Grocer {new Date().getFullYear()}
	  		</li>
	  		
	  		<li className="footer__nav-li">
	  			<button className="btn-footer">Careers</button>
	  		</li>

	  		<li className="footer__nav-li">
	  			<button className="btn-footer">Terms of Use</button>
	  		</li>
	  		
	  		<li className="footer__nav-li">
	  			<button className="btn-footer">Privacy Policy</button>
	  		</li>
	  	</ul>

	  	<div className="footer__backtotop">
	  		<button className="btn-backtotop" type="button" onClick={scrollToTop}>
	  			<FontAwesomeIcon icon={faCircleChevronUp} />
	  			<span className="u-sr">Scroll to the top</span>
	  		</button>
	  	</div>
	  </footer>
	);

}

