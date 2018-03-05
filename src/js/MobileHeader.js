import React from 'react'
import fglogo from '../img/fglogo.png'


function MobileHeader() {
  return (
    <div className="logo--mobile">
      <a href="/work/freshgrocer"><img src={fglogo} alt="Fresh Grocer logo" /></a>
    </div>
  );
}

export default MobileHeader
