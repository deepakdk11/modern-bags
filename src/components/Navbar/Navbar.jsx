import React, { useState } from "react";
import "./Navbar.css"
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {

    const [menu, setMenu] = useState("home")

    return(

        <nav>
            <div className="title">
                <p>Modern Bags</p>
            </div>
            <div className="menu">
                <ul>
                    <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""} >Home</li>
                    <li onClick={() => setMenu("categories")} className={menu === "categories" ? "active" : ""} >Categories</li>
                    <li onClick={() => setMenu("brands")} className={menu === "brands" ? "active" : ""} >Top Brands</li>
                    <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""} >Contact</li>
                </ul>
            </div>
            <div className="add-cart">
                <FaSearch role="button" size={30} style={{cursor:"pointer"}} />
                <FaCartArrowDown role="button" size={30} style={{padding : "0px 20px", cursor: "pointer"}} />
                {/* <button className="search">Search</button> */}
                {/* <button className="cart">cart</button> */}
                <button className="sign">Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;