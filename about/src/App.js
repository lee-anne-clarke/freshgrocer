import React, { Component } from 'react'
import MobileHeader from './MobileHeader'
import NavMobile from './NavMobile'
import NavDt from './NavDt'
import About from './About'
import Footer from './Footer'


class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <MobileHeader />
        <NavMobile />
        <NavDt />
        <About />
        <Footer />
      </div>
    )
  }
}

export default App;
