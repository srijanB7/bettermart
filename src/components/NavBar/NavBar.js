import React from "react";
import { BsCart, BsHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg"
import "./NavBar.css";

export const NavBar = () => {
    return (
        <nav>
            <p>BetterMart</p>
            <input type="search" placeholder="Search"/>
            <div className="links">
                <a><CgProfile /></a>
                <a><BsCart /></a>
                <a><BsHeart /></a>
            </div>
        </nav>
    );
};
