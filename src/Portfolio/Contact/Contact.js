import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import './Contact.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9ippbjk', 'template_hphvqh6', form.current, 'gIxadnC6-a1Q47L4M')
      .then((result) => {
        console.log(result.text);
        console.log('send');
        toast.success('Email Sent');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-form grid" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          <p>
            <span className='one'>Get in Touch</span>
            <br />
            <span className='two'>Contact me</span>
          </p>
          {/* <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div> */}
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--orange)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;