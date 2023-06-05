import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Logout = () => {
    const { user } = useContext(AuthContext);
    //console.log(user);
  return (
    <div>
        Logout
        <Link to="/products">Products</Link>
    </div>

  )
}
