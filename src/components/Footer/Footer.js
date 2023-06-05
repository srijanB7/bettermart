import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import "./Footer.css";

export const Footer = () => {
    return (
        <div className="Footer-container">
            <div className="links">
                <a href="https://www.linkedin.com/in/sb07/">
                    <BsLinkedin />
                </a>
                <a href="https://twitter.com/i_am_srijanb">
                    <BsTwitter />
                </a>
                <a href="https://github.com/srijanB7">
                    <BsGithub />
                </a>
            </div>
            <div className="msg">
                <p>Made with ❤️</p>
                <p>No Copyright</p>
            </div>
        </div>
    );
};
