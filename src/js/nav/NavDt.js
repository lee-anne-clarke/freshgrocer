import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import uuid from 'uuid'

// images
import fglogo from '../../img/fglogo.png'


class NavDt extends Component {
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
	    <nav className="nav-dt">
	      <header className="header-dt">
	        <Link to="/"><img src={fglogo} alt="The Fresh Grocer logo" /></Link>
	      </header>

	      <ul className="nav-list nav-list--dt">
	      	{navItems.map(({ id, url, btnText }) => (
	      		<li key={id}>
	      			<NavLink to={`/${url}`} activeClassName="active">{btnText}</NavLink>
	      		</li>
	      	))}
	      </ul>
	    </nav>
		);
	}
}


export default NavDt

