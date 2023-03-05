import React from 'react'
import { FaInstagram, FaTiktok, FaViber, FaWhatsapp } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
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
          <p>Any questions? Let us know in store at Tokha, Kathmandu, Nepal or call us on (+977) 9849 735 167.</p>
          <a href='https://www.youtube.com/' target='_blank'><FaInstagram /></a>
          <a href='https://www.youtube.com/' target='_blank'><FaTiktok /></a>
          <a href='https://www.youtube.com/' target='_blank'><FaWhatsapp /></a>
          <a href='https://www.youtube.com/' target='_blank'><FaViber /></a>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright @2023. All rights reserved | Designed by: I.T Sansaar</p>
      </div>
    </div>
  )
}

export default Footer