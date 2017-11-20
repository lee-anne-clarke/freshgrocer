import React, { Component } from 'react'
let Menu = require('react-burger-menu').push;


class NavMobile extends Component {
	render() {
		return (
			<Menu id={ "navMobileMenuWrap" } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } isOpen={ false }>
			    <ul className="nav--mobile__list">
			        <li className="menu-item">
			        	<a href="/work/freshgrocer/about">About</a>
			        </li>
			        
			        <li className="btn--edu">
			        	<a href="/work/freshgrocer/findstores">Find A Store</a>
			        </li>

			        <li className="menu-item">
			        	<a href="/work/freshgrocer/onsale">On Sale</a>
			        </li>

			        <li className="menu-item">
			        	<a href="/work/freshgrocer/recipes">Recipes</a>
			        </li>

			        <li className="menu-item">
			        	<a href="/work/freshgrocer/contact">Contact Us</a>
			        </li>
			    </ul>
		    </Menu>
	    );
	}
}

export default NavMobile

