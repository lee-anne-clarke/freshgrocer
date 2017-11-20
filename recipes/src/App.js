import React, { Component } from 'react'
import MobileHeader from './MobileHeader'
import NavMobile from './NavMobile'
import NavDt from './NavDt'
import Recipes from './Recipes'
import Footer from './Footer'


class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <MobileHeader />
        <NavMobile />
        <NavDt />
        <Recipes />
        <Footer />
      </div>
    )
  }
}

export default App;
