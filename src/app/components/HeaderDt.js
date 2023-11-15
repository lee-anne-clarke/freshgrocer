import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

// images
import fglogo from '../../img/fglogo.png'


export default function HeaderDt({ navItems }) {
  const pathname = usePathname();

	return (
    <header className="header-dt">
      <div className="logo-wrap-dt">
        <Link href="/">
        	<Image className="header-logo header-logo--dt" 
                  src={fglogo} 
                  alt="The Fresh Grocer logo" 
                  priority={true} />
        </Link>
      </div>

      <ul className="nav-list nav-list--dt">
      	{navItems.map(({ btnUrl, btnText }) => (
      		<li className="nav-item-dt" key={uuidv4()}>
      			<Link href={btnUrl} className={pathname === btnUrl ? 'active' : ''}>
              {btnText}
            </Link>
      		</li>
      	))}
      </ul>
    </header>
	);
}



