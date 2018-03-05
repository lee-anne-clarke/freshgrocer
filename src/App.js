import React, { Component } from 'react'
import MobileHeader from './js/MobileHeader'
import NavMobile from './js/NavMobile'
import NavDt from './js/NavDt'
import Homepage from './js/Homepage'
import Footer from './js/Footer'
import './normalize.min.css'
import './animate.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <MobileHeader />
        <NavMobile />
        <NavDt />
        <Homepage />
        <Footer />
      </div>
    )
  }
}

export default App;
