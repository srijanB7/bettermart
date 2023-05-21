import React, { useContext } from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { AuthContext } from '../context/AuthContext';

export const Profile = () => {
    const { user, signOutHandler } = useContext(AuthContext);
    function handleLogout() {
        signOutHandler();
    }
    
    
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
