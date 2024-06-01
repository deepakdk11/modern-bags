import React, { useState } from "react";
import "./Navbar.css"
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiHandbagLine } from "react-icons/ri";
import Menu from "../Menu/Menu";
import SearchItems from "../SearchItems/SearchItems";

const Navbar = ({setPopup}) => {

    return(

        <nav>
            <Menu />
            <div className="title">
               <RiHandbagLine size={25} /> <p>  Modern Bags</p>
            </div>
            
            <div className="add-cart">

                <SearchItems />

                <Link to="/cart">
                    <FaCartArrowDown
                        role="button"
                        className="icons"
                        size={20}
                        style={{padding : "0px 20px 0px 20px" , cursor: "pointer"}}
                    />
                </Link> 

                <button onClick={() => setPopup(true)} className="sign">Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;