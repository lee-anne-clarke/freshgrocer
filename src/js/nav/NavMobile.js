import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import uuid from 'uuid'
let Menu = require('react-burger-menu').push;


class NavMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
			{ 
				id: uuid(), 
				url: 'findstores',
				btnText: 'Find A Store' 
			},
			{ 
				id: uuid(), 
				url: 'onsale',
				btnText: 'On Sale' 
			},
			{ 
				id: uuid(), 
				url: 'recipes',
				btnText: 'Recipes' 
			},
			{ 
				id: uuid(), 
				url: 'about',
				btnText: 'About Us' 
			},
			{ 
				id: uuid(), 
				url: 'contact',
				btnText: 'Contact Us' 
			},
     ],
    }
  }

	render() {
		const { navItems } = this.state

		return (
			<Menu 
				id={ "navMobileMenuWrap" } 
				pageWrapId={ "page-wrap" } 
				outerContainerId={ "outer-container" } 
				isOpen={ false }>
				
		    <ul className="nav-list nav-list--mb">
	      	{navItems.map(({ id, url, btnText }) => (
	      		<li className="nav-mb-item" key={id}>
	      			<NavLink to={`/${url}`} activeClassName="active">{btnText}</NavLink>
	      		</li>
	      	))}
		    </ul>
	    </Menu>
		);
	}
}

export default NavMobile

