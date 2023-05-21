import React, { useContext, useState } from "react";
import "./LoginBox.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
export const LoginBox = () => {
    const { signInHandler } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const guest = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika"
    }
    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }


    function handleSignIn(event) {        
        signInHandler(email, password);
        //console.log(localStorage.getItem("token"));
        
    }

    function handleGuestSignIn() {
        setEmail(guest.email); setPassword(guest.password)
        signInHandler(guest.email, guest.password);
    }
    //console.log(guest)
    

    return (
        <div className="login-box">
            <div className="login-container">
                <h1>Sign In</h1>
                
                <label>Email address</label>
                <input type="email" placeholder="Enter Email" value={email} onChange={handleEmail}/>

                <label>Password</label>
                <input type="password" placeholder="Enter Password" value={password} onChange={handlePassword}/>

                <button onClick={handleSignIn}>Login</button>
                <button onClick={handleGuestSignIn} value="guest">Guest Login</button>
                <NavLink to="/signup">Create a New Account {">"} </NavLink>
            </div>
        </div>
    );
};
