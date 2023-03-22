import React from 'react'
import { FaInstagram, FaTiktok, FaViber, FaWhatsapp } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  const date = new Date();
  const year=date.getFullYear();
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className="footer-container-categories">
          <h3>CATEGORIES</h3>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Accessories</li>
            <li>All Products</li>
          </ul>
        </div>
        <div className="footer-container-company">
        <h3>COMPANY</h3>
          <ul>
            <li>Home</li>
            <li>About Company</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-container-help">
        <h3>HELP</h3>
          <ul>
            <li>Track Orders</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-container-getInTouch">
          <h3>Get In Touch</h3>
          <p>Any questions? Let us know in store at Tokha, Kathmandu, Nepal or call us on</p>
          <a className='phoneNumber' href='tel:+9779849735167'>(+977) 9849 735 167</a>
          <div className="footer-container-getInTouch-links">
            <a className='instagram' href='https://www.instagram.com/lakhey.clo/' target='_blank' rel="noreferrer" ><FaInstagram /></a>
            <a className='whatsapp' href='https://www.youtube.com/' target='_blank' rel="noreferrer" ><FaWhatsapp /></a>
            <a className='tiktok' href='https://www.tiktok.com/@lakhey.clo' target='_blank' rel="noreferrer" ><FaTiktok /></a>
            <a className='viber' href='https://www.youtube.com/' target='_blank' rel="noreferrer" ><FaViber /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright @{year}. All rights reserved | Designed by: <a className='it-sansaar' href='https://itsansaar.com.np/' target='_blank' >I.T Sansaar</a></p>
      </div>
    </div>
  )
}

export default Footer