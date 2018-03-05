import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollToTop from './js/ScrollToTop'
import MobileHeader from './js/MobileHeader'
import NavMobile from './js/NavMobile'
import NavDt from './js/NavDt'
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
		        
				    <Route exact path="/work/freshgrocer/" component={Homepage} />
				    <Route path="/work/freshgrocer/about" component={AboutUs} />
				    <Route path="/work/freshgrocer/findstores" component={FindStores} />
						<Route path="/work/freshgrocer/onsale" component={OnSale} />
						<Route path="/work/freshgrocer/recipes" component={Recipes} />
				    <Route path="/work/freshgrocer/contact" component={ContactUs} />

				    <Footer />
		      </div>
	     </ScrollToTop>
      </Router>
    )
  }
}

export default App;
