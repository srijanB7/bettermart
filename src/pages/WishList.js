import React, { useContext } from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { ProductContext } from '../context/ProductContext'

export const WishList = () => {
    const { wishList } = useContext(ProductContext);
    console.log(wishList);
  return (
    <div>
        <NavBar />
        <div>
            <h1>WishList - {wishList.length}</h1>
        </div>
    </div>
  )
}
