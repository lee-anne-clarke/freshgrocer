'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid';

import fglogo from '../../img/fglogo.png'


export default function HeaderMobile(props) {

	const [menuOpenState, setMenuOpenState] = useState(false);

	const toggleMenu = () => setMenuOpenState(!menuOpenState);

	useEffect(() => {
		if (menuOpenState === true) {
			document.body.classList.add('u-no-overflow-mb')
		} else {
			document.body.classList.remove('u-no-overflow-mb')
		}
	}, [menuOpenState]);

	const pathname = usePathname();


	return (
		<header className="header-mobile">

			<nav className="nav-mobile">
				{/* Toggle menu button */}
				<button className="mobile-menu-btn" onClick={toggleMenu}>
					<span className="mobile-menu-btn__bar"></span>
					<span className="mobile-menu-btn__bar"></span>
					<span className="mobile-menu-btn__bar"></span>
				</button>

				{/* Mobile nav menu */}
				<div className={menuOpenState === true ? 'nav-mobile__menu open' : 'nav-mobile__menu'}>

					<div 
						className="mobile-menu-overlay" 
						onClick={() => setMenuOpenState(false)}>
					</div>

					<div className="mobile-menu-wrap">
			  			<ul className="nav-list nav-list--mb">
						   	{props.navItems.map(({ btnUrl, btnText }) => (
					      		<li className="nav-item-mb" key={uuidv4()}>
					      			<Link 
					      				href={btnUrl} 
					      				className={pathname === btnUrl ? 'active' : ''}
					      				onClick={() => setMenuOpenState(false)}
					      			>
					      				{btnText}
					      			</Link>
					      		</li>

					      	))}
						 </ul>
				    </div> {/* END OF .mobile-menu-wrap */}
	    		</div> {/* END OF nav-mobile__menu */}
	    	</nav>


		    {/* Logo */}
			<div className="logo-wrap-mobile">
				<Link href="/" onClick={() => setMenuOpenState(false)}>
					<Image 
						className="header-logo header-logo--mb" 
						src={fglogo} 
						alt="The Fresh Grocer logo" 
						priority={true} 
					/>
				</Link>
			</div>

    	</header>
	);
	
}


