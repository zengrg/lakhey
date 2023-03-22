import React from 'react'
import {Navbar, Footer} from '../components';
import { GoLocation } from "react-icons/go";
import { HiOutlinePhone } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";

import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <Navbar />
      <div className='contact-container'>
        <h1>Get In Touch</h1>
        <div className="contact-container-form">
          <div className="contact-container-form-left">
            <h3>Send Us A Message</h3>
            <form className='contact-form'>
              <div className="form-container">
                <input type="text" placeholder='Your Full Name*'></input>
                <input type="text" placeholder='Your Email*'></input>
                <input type="text" placeholder='Your Contact*'></input>
                <input type="text" placeholder='Your Address*'></input>
              </div>
              <textarea type="text" placeholder='Your Message*' className='messageBox'></textarea>
              <button type='submit' className='submit-btn'>Submit</button>
            </form>
          </div>
          <div className="contact-container-form-right">
            <h3>CONTACT US</h3>
            <p><GoLocation />Tokha, Kathmandu, Nepal</p>
            <a href='tel:+9779849735167'><HiOutlinePhone />(+977) 9849 735 167</a>
            <a href='mailto:contactlakhey@gmail.com'><AiOutlineMail />contactlakhey@gmail.com</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact