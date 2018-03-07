import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import { innerpTitleConfig } from './sr/srConfig'
import sr from './sr/ScrollReveal'

//images
import contactHeader from '../img/contactus/pie1.jpg'


class ContactUs extends Component {
  
  componentDidMount = () => {
    //Scroll Reveal
    sr.reveal(this.innerpTitle, innerpTitleConfig);

    //Contact form
    let contactForm = document.getElementById('contactForm');
    let contactName = document.getElementById('contactName');
    let contactEmail = document.getElementById('contactEmail');
    let contactMsg = document.getElementById('contactMsg');
    let formValidMsg = document.getElementById('formValidMsg');
    let formInvalidMsg = document.getElementById('formInvalidMsg');

    contactForm.addEventListener('submit', (event) => {
      if (contactName.value && contactEmail.value && contactMsg.value) {
        contactForm.style.display = 'none';
        formValidMsg.style.display = 'block';
        event.preventDefault();
      } else {
        formInvalidMsg.style.display = 'block';
        event.preventDefault();
      }
    });
  }


  render () {
    return (
      <main className="contact innerpage" id="page-wrap">

        <section className="u-relative"> 
          <div className="innerpage__title" ref={(r) => { this.innerpTitle = r; }}>
            <h1>Contact Us</h1>
          </div>

          <div>
            <Parallax bgImage={contactHeader} strength={300} />
          </div>
        </section>


        <section className="container">
          <h3>Call</h3>
          <p><b>1-800-746-7748</b><br />
          Monday - Friday 8am-6pm<br />
          Saturday & Sunday 9am-5pm</p>

          <hr />

          <h3>Write</h3>
          <p>The Fresh Grocer c/o<br />
          ShopRite Customer Care<br />
          PO Box 7812<br />
          Edison, NJ 08818</p>

          <hr />

          <h3>Send A Message</h3>

          <form className="form" id="contactForm">
		        <div className="form__group">
		          <label htmlFor="reason" className="form__label">I have a question about: <span className="form__reqstar">*</span></label>
		          <select id="selectbox" name="reason" className="form__input">
		            <option>Mauris vel pretium ligula, ut semper tortor</option>
		            <option>Aliquam a leo eu ante imperdiet </option>
		            <option>Aenean lobortis dignissim suscipit</option>
		            <option>Sed orci neque, elementum bibendum lacinia nec</option>
		            <option>Donec interdum metus sed iaculis lobortis</option>
		            <option>Phasellus eleifend eros elementum lectus</option>
		          </select>
		        </div>

		        <div className="form__group">
		          <label className="form__label" htmlFor="name">Name: <span className="form__reqstar">*</span></label>
		          <input className="form__input" type="text" name="name" id="contactName" />
		        </div>

		        <div className="form__group">
		          <label className="form__label" htmlFor="mail">E-mail: <span className="form__reqstar">*</span></label>
		          <input className="form__input" type="email" name="email" id="contactEmail" />
		        </div>

		        <div className="form__group">
		          <label className="form__label" htmlFor="phone">Phone Number:</label>
		          <input className="form__input" type="tel" name="phone" id="contactPhone" />
		        </div>

		        <div className="form__group">
		          <label htmlFor="msg" className="form__label">Message: <span className="form__reqstar">*</span></label>
		          <textarea className="form__input" rows="6" name="message" id="contactMsg"></textarea>
		        </div>

		        <p className="contact__invalidmsg" id="formInvalidMsg">
		        	Please fill out all required fields.
		        </p>

		        <button className="btn btn--submit" type="submit">Submit</button>
          </form>

          <div className="contact__validmsg" id="formValidMsg">
						<h3>Thank you! We will get back to you as soon as we can.</h3>
          </div>

        </section> {/* end of .container */}
      </main>
    );
  }
}


export default ContactUs

