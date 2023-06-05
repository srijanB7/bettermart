import React, { useContext } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { AuthContext } from "../context/AuthContext";

export const Profile = () => {
    const { signOutHandler } = useContext(AuthContext);
    function handleLogout() {
        signOutHandler();
    }
    const user = localStorage.getItem("user");
    const email = localStorage.getItem("email");
    return (
        <div>
            <NavBar />
            <div className="profile-container">
                <div className="profiled-details">
                    <h2>Details</h2>
                    <p>Name: {user}</p>
                    <p>Email: {email}</p>
                </div>
                <div className="address-details">
                    
                </div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};
