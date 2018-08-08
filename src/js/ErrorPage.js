import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class ErrorPage extends Component {
  componentDidMount = () => {
  	document.title = "Page not found | The Fresh Grocer"
  }

  render() {
    return (
      <main className="contact innerpage" id="page-wrap">

        <section className="container">
          <h1>Page not found</h1>

          <p><Link className="btn" to="/">Return to the hompepage</Link></p>

        </section>
      </main>
    );
  }
}


export default ErrorPage

