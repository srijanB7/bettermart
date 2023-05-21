import React from "react";
import { BsCart, BsHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg"
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = ({products}) => {
    return (
        <nav>
            <Link to="/products">
                <p>BetterMart</p>
            </Link>
            <input type="search" placeholder="Search"/>
            <div className="links">
                <Link to="/profile"><CgProfile /></Link>
                <Link to="/cart"><BsCart /></Link>
                <Link to="/wishlist"><BsHeart /></Link>
            </div>
        </nav>
    );
};
