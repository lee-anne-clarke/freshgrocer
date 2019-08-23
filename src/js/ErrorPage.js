import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'


class ErrorPage extends PureComponent {
  componentDidMount() {
  	document.title = "Page not found | The Fresh Grocer"
  }

  render() {
    return (
      <main className="contact innerpage" id="page-wrap">

        <section className="container">
          <h1>Page not found</h1>

          <p><Link className="btn" to="/">Return to hompepage</Link></p>

        </section>
      </main>
    );
  }
}


export default ErrorPage

