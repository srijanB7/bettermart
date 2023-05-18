import React from "react";
import "./LoginBox.css";
import { NavLink } from "react-router-dom";
export const LoginBox = () => {
    return (
        <div className="login-box">
            <div className="login-container">
                <h1>Sign In</h1>
                
                <label>Email address</label>
                <input type="email" placeholder="Enter Email" />

                <label>Password</label>
                <input type="password" placeholder="Enter Password" />

                <button>Login With test Credentials</button>
                <NavLink to="/signup">Create a New Account {">"} </NavLink>
            </div>
        </div>
    );
};
