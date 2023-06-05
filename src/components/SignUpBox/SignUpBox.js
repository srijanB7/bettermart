import React, { useContext, useState } from "react";
import "./SignUpBox.css";
import { AuthContext } from "../../context/AuthContext";

export const SignUpBox = () => {
    const { signUpHandler } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleName(event) {
        setName(event.target.value);
    }

    function handleSignUp(event) {
        signUpHandler(name, email, password);
        //console.log(localStorage.getItem("token"));
    }
    return (
        <div className="signup-box">
            <div className="signup-container">
                <h1>Sign Up</h1>

                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={handleName}
                />
                <label>Email address</label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={handleEmail}
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePassword}
                />

                
                <button onClick={handleSignUp}>SignUp</button>
            </div>
        </div>
    );
};
