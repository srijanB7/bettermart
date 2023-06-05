import React, { useContext } from 'react'
import "./CartCard.css"
import { ProductContext } from '../../context/ProductContext';
export const CartCard = ({_id, title, image, original_price, price, qty}) => {

    const { deleteFromCart, updateCart } = useContext(ProductContext);
    function removeFromCart(id) {
        deleteFromCart(id);
    }

    function increment(id) {
        updateCart(id, "increment");
    }

    function decrement(id) {
        if(qty === 1) {
            deleteFromCart(id);
            return;
        }
        updateCart(id, "decrement");

    }

  return (
    <div className="card-container">
            <div className="card-header">
                <img src={image} className="product-image" />
                
            </div>
            <p className="product-name">{title}</p>
            <div className="price">
                <p className="current-price">Rs {price}</p>
                <p className="actual-price">Rs {original_price}</p>
            </div>
            <div className='product-quantity'>
                <button onClick={() => increment(_id)}>+</button>
                <p>{qty}</p>
                <button onClick={() => decrement(_id)}>-</button>
            </div>
            <button className="cart-button" onClick={() => removeFromCart(_id)} >
                Remove from cart
            </button>
        </div>
  )
}
