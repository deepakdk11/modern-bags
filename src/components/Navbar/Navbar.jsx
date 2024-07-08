import React, { useContext }  from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import SearchItems from "../SearchItems/SearchItems";
import { logos } from "../../assets/assets"
import { DataContext } from "../../Context/DataContext";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = ({setPopup, setMenuPopup}) => {

    const { cartTotalAmount } = useContext(DataContext)

    return(
        <nav>
            <RiMenu2Fill
                className='menu-icon'
                size={30}
                style={{cursor: "pointer"}}
                onClick={() => setMenuPopup(true)}
            />
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