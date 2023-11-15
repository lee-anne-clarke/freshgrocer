'use client'

import React, { useState } from 'react'
import HeaderMobile from './HeaderMobile'
import HeaderDt from './HeaderDt'
import navItems from './navItems'


export default function Header() {

  const [navItemsList] = useState(navItems);

	return (
		<div>
			<HeaderMobile navItems={navItemsList} />
	    <HeaderDt navItems={navItemsList} />
		</div>
	);
}