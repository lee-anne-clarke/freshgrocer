import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import ScrollToTop from './js/ScrollToTop'
import MobileHeader from './js/MobileHeader'
import NavMobile from './js/nav/NavMobile'
import NavDt from './js/nav/NavDt'
import Homepage from './js/Homepage'
import AboutUs from './js/AboutUs'
import FindStores from './js/FindStores'
import OnSale from './js/OnSale'
import Recipes from './js/Recipes'
import ContactUs from './js/ContactUs'
import Footer from './js/Footer'
import './normalize.min.css'
import './animate.min.css'
import './App.css'


class App extends Component {
  render() {
    return (
			<Router>
				<ScrollToTop>
		      <div id="outer-container">
		        <MobileHeader />
		        <NavMobile />
		        <NavDt />
		        
				    <Route exact path="/" component={Homepage} />
				    <Route path="/about" component={AboutUs} />
				    <Route path="/findstores" component={FindStores} />
						<Route path="/onsale" component={OnSale} />
						<Route path="/recipes" component={Recipes} />
				    <Route path="/contact" component={ContactUs} />

				    <Footer />
		      </div>
	     </ScrollToTop>
      </Router>
    )
  }
}

export default App;
