import React from 'react'
import "./SocialApps.css"
import { download } from '../../assets/assets';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const SocialApps = () => {
  return (
    <div className='footer-1st-container' id='contact'>
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
  )
}

export default SocialApps
