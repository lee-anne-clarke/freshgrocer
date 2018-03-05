import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
let Menu = require('react-burger-menu').push;


class NavMobile extends Component {
	render() {
		return (
			<Menu 
				id={ "navMobileMenuWrap" } 
				pageWrapId={ "page-wrap" } 
				outerContainerId={ "outer-container" } 
				isOpen={ false }>
				
		    <ul className="nav-list nav-list--mb">
		      <li className="menu-item">
		      	<NavLink to="/about" activeClassName="active">About Us</NavLink>
		      </li>
		      
		      <li className="menu-item">
		      	<NavLink to="/findstores" activeClassName="active">Find A Store</NavLink>
		      </li>
		      
		      <li className="menu-item">
		      	<NavLink to="/onsale" activeClassName="active">On Sale</NavLink>
		      </li>
		      
		      <li className="menu-item">
		      	<NavLink to="/recipes" activeClassName="active">Recipes</NavLink>
		      </li>
		      
		      <li className="menu-item">
		      	<NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
		      </li>
		    </ul>
	    </Menu>
	    );
	}
}

export default NavMobile

