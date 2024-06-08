import React, { useState } from 'react'
import './Footer.css'
import { download } from '../../assets/assets';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [addClass, setAddClass] = useState("")
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
            <FaFacebook className='social facebook' size={35} />
            <FaInstagram className='social instagram' size={35} />
            <FaTwitter className='social twitter'size={35} />
            <FaLinkedin className='social linkedin' size={35} />
            <FaWhatsapp className='social whatsapp' size={35} />
            <FaYoutube className='social youtube' size={35} />
          </div>
          <div className='logoImg'>
             <img className='playstore' src={download.playStore} alt="Playstore png" />
             <img className='appstore' src={download.appStore} alt="App Store png" />
          </div>
        </div>
      </div>
      <hr />
      <div className='footer-2nd-container'>
        <div>
          <h1>Modern Bags</h1>
        </div>
        <div className='cat'>
          <h4 onClick={() => setAddClass("categ")}>CATEGORIES <i className="arrow down"></i></h4>
          <ul className={addClass==="categ" ? "newClass" : ""} >
            <li>School Bags</li>
            <li>College Bags</li>
            <li>Laptop Bags</li>
            <li>Hand Bags</li>
            <li>Travel Bags</li>
            <li>Trekking Bags</li>
          </ul>
        </div>
        <div className='policies'>
          <h4 onClick={() => setAddClass("pol")} >POLICIES<i className="arrow down"></i></h4>
          <ul className={addClass==="pol" ? "newClass" : ""}>
            <li>Privacy Policy</li>
            <li>Cancellation, Return & Refund Policy</li>
            <li>Return & Exchange</li>
            <li>Terms of offers/promotions</li>
            <li>Warranty Terms and Conditions</li>
          </ul>
        </div>
        <div className='account'>
          <h4 onClick={() => setAddClass("acc")}>ACCOUNT<i className="arrow down"></i></h4>
          <ul className={addClass==="acc" ? "newClass" : ""}>
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
