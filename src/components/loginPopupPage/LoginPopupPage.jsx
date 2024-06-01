import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import "./LoginPopupPage.css"

const LoginPopupPage = ({setPopup}) => {

    const [change, setChange] = useState("Login")

  return (
    <div className='popup'>
      <form className="login">
        <div className="titles">
            <h1>{change}</h1>
            <IoMdClose className='icon' onClick={() => setPopup(false)} size={25} />
        </div>
        <div className="input-container">
            {change==="Sign Up" ? <input type='text' placeholder='Your Name' required/> : <></>}
            {change==="Sign Up" ? <input type="tel" name="Phone Number" id="number" placeholder='Your Mobile Number' required /> : <></>}
            
            
            <input type="email" name="email" id="mail"  placeholder='Your Mail ID' required/>
            <input type="password" name="password" id="password" placeholder='Password' required />
            <button type='submit' >{change}</button>
        </div>
        <div className="check">
            <input type="checkbox" name="check" id="checkbox-round" required /><p>Be continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        <div className='last-container'>
            {change==="Login" ? <p>Create a new account? <span onClick={() => setChange("Sign Up")}>Click hear</span></p> : <></> }
            {change==="Sign Up" ? <p>Already have an account? <span onClick={() => setChange("Login")}>Login here</span></p> : <></>}
            
        </div>
      </form>
    </div>
  )
}

export default LoginPopupPage
