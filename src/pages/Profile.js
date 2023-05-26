import React, { useContext } from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { AuthContext } from '../context/AuthContext';

export const Profile = () => {
    const { signOutHandler } = useContext(AuthContext);
    function handleLogout() {
        signOutHandler();
        
    }
    const user = localStorage.getItem("user");
  return (
    <div>
        <NavBar />
        <div>
            <h2>Profile {user}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}
