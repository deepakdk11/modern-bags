import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { RiMenu2Fill } from "react-icons/ri";
import "./Menu.css"

const Menu = () => {

    const [menu, setMenu] = useState("home")
    const [toggle, setToggle] = useState(false)

  return (
    <>
      <RiMenu2Fill className='menu-icon' onClick={() => setToggle(!toggle)} size={30} style={{cursor: "pointer"}} />
      <div className="menu">
                { toggle && (<ul>
                    <li
                        onClick={() => setMenu("home")}
                        className={menu === "home" ? "active" : ""}>
                        <Link to="/">Home</Link>
                    </li>

                    <li
                        onClick={() => setMenu("categories")}
                        className={menu === "categories" ? "active" : ""}>
                        Categories
                    </li>

                    <li
                        onClick={() => setMenu("brands")}
                        className={menu === "brands" ? "active" : ""}>
                        Top Brands
                    </li>
                    
                    <li
                        onClick={() => setMenu("contact")}
                        className={menu === "contact" ? "active" : ""}>
                        Contact
                    </li>

                </ul>)}
            </div>
    </>
  )
}

export default Menu
