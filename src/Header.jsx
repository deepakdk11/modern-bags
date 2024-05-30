import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
    return(
        <nav>
            <div className="title">
                <p>Modern Bags</p>
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Top Brands</li>
                    <li>Contact</li>
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

export default Header;