import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import navItems from './navItems'
import uuid from 'uuid'
import { slide as Menu } from 'react-burger-menu'

// images
import fglogo from '../img/fglogo.png'


class HeaderMobile extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	menuOpen: false,
      navItems
    }

    this.closeMenu = this.closeMenu.bind(this)
  }

	// This keeps state in sync with the opening/closing of the menu
	// via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

	render() {
		const { navItems } = this.state

		return (
			<div>
				<header className="header-mobile">
					<Link to="/" onClick={this.closeMenu}>
						<img className="header-img header-img--mb" src={fglogo} alt="The Fresh Grocer logo" />
					</Link>
				</header>

				<Menu 
					bodyClassName={"u-no-overflow-mb"} 
					isOpen={this.state.menuOpen}
	        onStateChange={(state) => this.handleStateChange(state)}>
					
			    <ul className="nav-list nav-list--mb">
		      	{navItems.map(({ url, btnText }) => (
		      		<li className="nav-item-mb" key={uuid()}>
		      			<NavLink to={`/${url}`} onClick={this.closeMenu}>{btnText}</NavLink>
		      		</li>
		      	))}
			    </ul>
		    </Menu>
	    </div>
		);
	}
}


export default HeaderMobile
