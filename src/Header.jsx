import React from "react";

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
                <button className="search">Search</button>
                <button className="cart">cart</button>
                <button className="sign">Sign in</button>
            </div>
        </nav>
    );
};

export default Header;