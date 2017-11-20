import React, { Component } from 'react'
import fglogo from './img/fglogo.png'


class NavDt extends Component {
	render() {
		return (
      <nav className="nav--dt">
        <div className="logo--dt">
          <a href="/work/freshgrocer"><img src={fglogo} alt="Fresh Grocer logo" /></a>
        </div>

        <ul className="nav--dt__list">
          <li><a href="/work/freshgrocer/about">About</a></li>
          <li><a href="/work/freshgrocer/findstores">Find A Store</a></li>
          <li><a href="/work/freshgrocer/onsale">On Sale</a></li>
          <li><a href="/work/freshgrocer/recipes">Recipes</a></li>
          <li><a href="/work/freshgrocer/contact">Contact Us</a></li>
        </ul>
      </nav>
	    );
	}
}

export default NavDt

