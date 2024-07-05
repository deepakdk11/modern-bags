import React, { useContext }  from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import SearchItems from "../SearchItems/SearchItems";
import { logos } from "../../assets/assets"
import { DataContext } from "../../Context/DataContext";

const Navbar = ({setPopup}) => {

    const { cartTotalAmount } = useContext(DataContext)

    return(
        <nav>
            <Menu />
            <div className="title">
                <Link to={"/"}><p>Modern Bags...</p></Link> 
            </div>
            <div className="add-cart">
                <SearchItems />
                <div className="icon-dot">
                 <Link to="/cart">   
                    <img src={logos.cart} alt="" />
                 </Link>  
                 <div className={cartTotalAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={() => setPopup(true)} className="sign">Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;