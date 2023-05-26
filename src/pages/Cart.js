import React, { useContext, useEffect } from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { ProductContext } from '../context/ProductContext'
import { CartCard } from '../components/CartCard/CartCard';

export const Cart = () => {
    const { cart, getCart } = useContext(ProductContext);
    
    useEffect(() => {
      getCart();
      //	console.log("effect");  
    }, [])
    let total = 0;
    if(cart.length > 0)
      total = cart.reduce((acc, val) => acc + parseInt(val.price), 0);
    console.log(total)
  return (
    <div>
        <NavBar />
        <div>
            <h2>Cart - {cart.length}</h2>
            {
              cart?.map(item => <CartCard {...item} key={item._id}/>)
            }
        </div>
    </div>
  )
}
