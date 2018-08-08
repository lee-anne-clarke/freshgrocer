import React from 'react'
import { Link } from 'react-router-dom'

// images
import fglogo from '../img/fglogo.png'


function HeaderMobile() {
  return (
    <header className="header-mobile">
      <Link to="/">
      	<img className="header-img header-img--mb" src={fglogo} alt="The Fresh Grocer logo" />
      </Link>
    </header>
  );
}


export default HeaderMobile
