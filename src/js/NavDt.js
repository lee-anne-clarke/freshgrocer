import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

// images
import fglogo from '../img/fglogo.png'


class NavDt extends Component {
	render() {
		return (
	    <nav className="nav-dt">
	      <header className="header-dt">
	        <Link to="/work/freshgrocer/"><img src={fglogo} alt="Fresh Grocer logo" /></Link>
	      </header>

	      <ul className="nav-list nav-list--dt">
		      <li><NavLink to="/work/freshgrocer/about" activeClassName="active">About Us</NavLink></li>
		      <li><NavLink to="/work/freshgrocer/findstores" activeClassName="active">Find A Store</NavLink></li>
		      <li><NavLink to="/work/freshgrocer/onsale" activeClassName="active">On Sale</NavLink></li>
		      <li><NavLink to="/work/freshgrocer/recipes" activeClassName="active">Recipes</NavLink></li>
		      <li><NavLink to="/work/freshgrocer/contact" activeClassName="active">Contact Us</NavLink></li>
	      </ul>
	    </nav>
		);
	}
}


export default NavDt

