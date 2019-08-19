import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import navItems from './navItems'
import uuid from 'uuid'

// images
import fglogo from '../img/fglogo.png'


class HeaderDt extends Component {
	
  constructor(props) {
    super(props);
    this.state = { navItems }
  }

	render() {
		const { navItems } = this.state

		return (
	    <div className="header-dt-wrap">
	      <header className="header-dt">
	        <Link to="/">
	        	<img className="header-img header-img--dt" src={fglogo} alt="The Fresh Grocer logo" />
	        </Link>
	      </header>

	      <ul className="nav-list nav-list--dt">
	      	{navItems.map(({ url, btnText }) => (
	      		<li className="nav-item-dt" key={uuid()}>
	      			<NavLink to={`/${url}`}>{btnText}</NavLink>
	      		</li>
	      	))}
	      </ul>
	    </div>
		);
	}
}


export default HeaderDt

