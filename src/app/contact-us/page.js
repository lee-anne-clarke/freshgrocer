'use client'

import React, { useState, useEffect } from 'react'
import MainPage from '../components/MainPage'
import FormItem from './FormItem'

import contactHeader from '../../img/contactus/pie1.jpg'


export default function ContactUs() {
  
  useEffect(() => {
  	document.title = "Contact Us | The Fresh Grocer"
  }, [])

  const [contactReason, setContactReason] = useState('option1');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMsg, setContactMsg] = useState('');

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formInvalid, setformInvalid] = useState(false);

  // Hide invalid message on form field focus
  useEffect(() => {
    const formFields = document.querySelectorAll(".form__input");
  
    for (let field of formFields) {
      field.addEventListener('focus', () => {
        setformInvalid(false);
      }); 
    }
  }, [])

  // Form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      contactName.length > 1 && 
      contactEmail.length > 4 && 
      contactMsg.length > 1
    ) {
      setFormSubmitted(true);
    } else {
      setformInvalid(true);
    }
  }

  return (
    <MainPage
      title="Contact Us" 
      headerImg={contactHeader}>

      <div className="container">
        <h2>Call</h2>
        <p><b>1-800-746-7748</b><br />
        Monday - Friday 8am-6pm<br />
        Saturday & Sunday 9am-5pm</p>

        <hr />

        <h2>Write</h2>
        <p>The Fresh Grocer c/o<br />
        ShopRite Customer Care<br />
        PO Box 7812<br />
        Edison, NJ 08818</p>

        <hr />

        <h2>Contact Customer Service</h2>


        {formSubmitted ? (
             <div className="contact__validmsg">
                <h3>
                  Thank you! We will get back to you as soon as we can.
                </h3>
            </div>

          ) : (
            <form className="form" id="contactForm" onSubmit={handleSubmit}>

                <div className="form__group">
                  <label htmlFor="reason" className="form__label">I have a question about: <span className="form__asterisk">*</span></label>
                  <select id="selectbox" name="reason" className="form__input" value={contactReason} onChange={(e) => setContactReason(e.target.value)}>
                    <option value="option1">Mauris vel pretium ligula, ut semper tortor</option>
                    <option value="option2">Aliquam a leo eu ante imperdiet </option>
                    <option value="option3">Aenean lobortis dignissim suscipit</option>
                    <option value="option4">Sed orci neque, elementum bibendum lacinia nec</option>
                    <option value="option5">Donec interdum metus sed iaculis lobortis</option>
                    <option value="option6">Phasellus eleifend eros elementum lectus</option>
                  </select>
                </div>

                <FormItem 
                  inputName="name"
                  labelText="Name"
                  inputType="text"
                  inputValue={contactName}
                  inputIsRequired={true}
                  changeHandler={(e) => setContactName(e.target.value)}
                />

                <FormItem 
                  inputName="email"
                  labelText="Email"
                  inputType="email"
                  inputValue={contactEmail}
                  inputIsRequired={true}
                  changeHandler={(e) => setContactEmail(e.target.value)}
                />

                <FormItem 
                  inputName="phone"
                  labelText="Phone Number"
                  inputType="tel"
                  inputValue={contactPhone}
                  inputIsRequired={false}
                  changeHandler={(e) => setContactPhone(e.target.value)}
                />

                <div className="form__group">
                  <label htmlFor="message" className="form__label">Message: <span className="form__asterisk">*</span></label>
                  <textarea className="form__input" rows="6" name="message" value={contactMsg} onChange={(e) => setContactMsg(e.target.value)}></textarea>
                </div>

                {formInvalid && (
                  <div>
                    <p className="contact__invalidmsg">
                      Please fill out all required fields.
                    </p>
                  </div>
                  ) 
                }

                <button className="btn btn--submit" type="submit">Submit</button>
              </form> 
          )
        
        } 


      </div>
        
    </MainPage>
  );
  
}


