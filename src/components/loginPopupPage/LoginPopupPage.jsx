import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";

const LoginPopupPage = ({setPopup}) => {

    const [change, setChange] = useState("Login")

  return (
    <div>
      <form className="login">
        <div className="title">
            <h1>{change}</h1>
            <IoMdClose onClick={() => setPopup(false)} />
        </div>
        <div className="input-container">
            {change==="Sign Up" ? <input type='text' placeholder='Your Name'/> : <></>}
            {change==="Sign Up" ? <input type="tel" name="Phone Number" id="number" placeholder='Your Mobile Number' /> : <></>}
            
            
            <input type="email" name="email" id="mail"  placeholder='Your Mail ID'/>
            <input type="password" name="password" id="password" placeholder='Password' />
        </div>
        <button>{change}</button>
        <div className="check">
            <input type="checkbox" name="check" id="check" /><p>Be continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        <div>
            {change==="Login" ? <p>Create a new account? <span onClick={() => setChange("Sign Up")}>Click hear</span></p> : <></> }
            {change==="Sign Up" ? <p>Already have an account? <span onClick={() => setChange("Login")}>Login here</span></p> : <></>}
            
        </div>
      </form>
    </div>
  )
}

export default LoginPopupPage
