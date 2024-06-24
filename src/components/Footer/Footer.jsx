import React, { useState } from 'react'
import './Footer.css'

const Footer = () => {
  const [addClass, setAddClass] = useState("")
  return (
    <div className='footerContainer'>
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
