import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import sr from './scrollReveal.js'

//images
import contactHeader from './img/berriesinheart.jpg'


class ContactUs extends Component {
  props: Props;

  componentDidMount = () => {
    const headerTitleConfig = {
      origin: 'top',
      duration: 1800,
      delay: 300,
      distance: 0,
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.headerTitle, headerTitleConfig);


    const headerImgConfig = {
      origin: 'top',
      duration: 1000,
      delay: 100,
      distance: 0,
      scale: 1,
      easing: 'ease',
    }

    sr.reveal(this.refs.headerImg, headerImgConfig);


    //Contact form
    let contactForm = document.getElementById('contactForm');
    let contactName = document.getElementById('contactName');
    let contactEmail = document.getElementById('contactEmail');
    let contactMsg = document.getElementById('contactMsg');
    let formValidMsg = document.getElementById('formValidMsg');
    let formInvalidMsg = document.getElementById('formInvalidMsg');

    contactForm.addEventListener('submit', function(event) {
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
      <main className="main--innerpage" id="page-wrap">

        <div className="innerpage__header"> 
          <div className="headertext headertext--innerpage" ref="headerTitle">
            <h1>Contact Us</h1>
          </div>

          <div ref="headerImg">
            <Parallax bgImage={contactHeader} strength={300} />
          </div>
        </div>

        <div className="innerpage__maintext">
          <h2>How can we help you?</h2>

          <hr />

          <h3>Call</h3>
          <p><b>1-800-746-7748</b><br />
          Monday - Friday 8am-6pm<br />
          Saturday & Sunday 9am-5pm</p>

          <hr />

          <h3>Write</h3>
          <p>Fresh Grocer c/o<br />
          ShopRite Customer Care<br />
          PO Box 7812<br />
          Edison, NJ 08818</p>

          <hr />

          <h3>Send A Message</h3>

          <form className="contact__form" id="contactForm">
              <div className="form__group">
                  <label htmlFor="reason" className="form__label">I have a question about: <span className="requiredstar">*</span></label>
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
                  <label htmlFor="name" className="form__label">Name: <span className="requiredstar">*</span></label>
                  <input type="text" id="contactName" name="name" className="form__input" />
              </div>

              <div className="form__group">
                  <label htmlFor="mail" className="form__label">E-mail: <span className="requiredstar">*</span></label>
                  <input type="email" id="contactEmail" name="email" className="form__input" />
              </div>

              <div className="form__group">
                  <label htmlFor="phone" className="form__label">Phone Number:</label>
                  <input type="tel" id="contactPhone" name="phone" className="form__input" />
              </div>

              <div className="form__group">
                  <label htmlFor="msg" className="form__label">Message: <span className="requiredstar">*</span></label>
                  <textarea id="contactMsg" name="message" className="form__input" rows="6"></textarea>
              </div>

              <div className="contact__invalidmsg" id="formInvalidMsg">Please fill out all required fields.</div>

              <button type="submit" id="contactBtn" className="contact__btn">Submit</button>
          </form>

          <div className="contact__validmsg" id="formValidMsg">
              <h3>Thank you! We will get back to you as soon as we can.</h3>
          </div>



        </div> {/* end of .innerpage__maintext */}

      </main>
    );
  }
}



export default ContactUs

