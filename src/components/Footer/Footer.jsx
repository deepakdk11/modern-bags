import React from 'react'
import './Footer.css'
import { download } from '../../assets/assets';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footer-1st-container'>
        <div className='join'>
          <h3>Sign up for The Circle Program</h3>
          <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
          <input type="email" placeholder='you@gmail.com'/> <button>Join US</button>
        </div>
        <div className='iconLogo'>
          <div className='iconsSocial'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaWhatsapp />
            <FaYoutube />
          </div>
          <div className='logoImg'>
             <img src={download.playStore} alt="Playstore png" />
             <img src={download.appStore} alt="App Store png" />
          </div>
        </div>
      </div>
      <hr />
      <div className='footer-2nd-container'>
        <div>
          <h1>Modern Bags</h1>
        </div>
        <div className='cat'>
          <h4>CATEGORIES</h4>
          <ul>
            <li>School Bags</li>
            <li>College Bags</li>
            <li>Laptop Bags</li>
            <li>Hand Bags</li>
            <li>Travel Bags</li>
            <li>Trekking Bags</li>
          </ul>
        </div>
        <div className='policies'>
          <h4>POLICIES</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Cancellation, Return & Refund Policy</li>
            <li>Return & Exchange</li>
            <li>Terms of offers/promotions</li>
            <li>Warranty Terms and Conditions</li>
          </ul>
        </div>
        <div className='account'>
          <h4>ACCOUNT</h4>
          <ul>
            <li>Track Order</li>
            <li>Sign In</li>
            <li>Shop All Products</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
