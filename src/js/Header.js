import React, { Component } from 'react'
import HeaderMobile from './HeaderMobile'
import HeaderDt from './HeaderDt'
import navItems from './navItems'


class Header extends Component {
	
  constructor(props) {
    super(props);
    this.state = { navItems }
  }

  render() {
  	return (
  		<div>
  			<HeaderMobile navItems={this.state.navItems} />
		    <HeaderDt navItems={this.state.navItems} />
  		</div>
  	);
  }
}

export default Header