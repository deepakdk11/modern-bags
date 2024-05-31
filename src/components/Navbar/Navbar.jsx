import React, { useState } from "react";
import "./Navbar.css"
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {

    const [menu, setMenu] = useState("home")

    return(

        <nav>
            <div className="title">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu">
                <ul>
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

                </ul>
            </div>
            <div className="add-cart">

                <FaSearch
                    role="button"
                    className="icons"
                    size={20}
                    style={{cursor:"pointer", paddingTop: "8px"}}
                />

                <Link to="/cart">
                    <FaCartArrowDown
                        role="button"
                        className="icons"
                        size={20}
                        style={{padding : "8px 20px 0px 20px" , cursor: "pointer"}}
                    />
                </Link> 

                <button className="sign">Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;