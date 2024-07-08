import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css"
import { IoMdClose } from "react-icons/io";

const Menu = ({setMenuPopup}) => {

    const [menu, setMenu] = useState("home")

  return (
    <div className='menuPopup'>
      <div className="menu">
        <div className='closeIcon'>
          <IoMdClose className='icon' 
          onClick={() => setMenuPopup(false)} 
          size={25}
          style={{cursor:"pointer", color:"white"}}
          />
        </div>
                <ul>
                    <li
                        onClick={() => setMenu("home")}
                        className={menu === "home" ? "active" : ""}>
                        <Link to="/" onClick={() => setMenuPopup(false)}>Home</Link>
                    </li>

                    <li
                        onClick={() => setMenu("categories")}
                        className={menu === "categories" ? "active" : ""}>
                        <a href="#container" onClick={() => setMenuPopup(false)}>categories</a>
                    </li>

                    <li
                        onClick={() => setMenu("brands")}
                        className={menu === "brands" ? "active" : ""}>
                        Top Brands
                    </li>
                    
                    <li
                        onClick={() => setMenu("contact")}
                        className={menu === "contact" ? "active" : ""}>
                        <a href="#contact" onClick={() => setMenuPopup(false)}>Contact</a>
                    </li>

                </ul>
            </div>
    </div>
  )
}

export default Menu
