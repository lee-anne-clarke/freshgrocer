import React from 'react'
import { Link } from 'react-router-dom'
import fglogo from '../img/fglogo.png'


function MobileHeader() {
  return (
    <header className="header-mobile">
      <Link to="/"><img src={fglogo} alt="Fresh Grocer logo" /></Link>
    </header>
  );
}


export default MobileHeader
