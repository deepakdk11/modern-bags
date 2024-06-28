import React  from "react";
import "./Navbar.css"
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import SearchItems from "../SearchItems/SearchItems";
import { logos } from "../../assets/assets"

const Navbar = ({setPopup}) => {

    return(

        <nav>
            <Menu />
            <div className="title">
                <img src={logos.logo1} alt="" />
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