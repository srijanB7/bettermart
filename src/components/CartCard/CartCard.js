import React, { useContext } from 'react'
import "./CartCard.css"
import { ProductContext } from '../../context/ProductContext';
export const CartCard = ({_id, title, image, original_price, price}) => {

    const { deleteFromCart } = useContext(ProductContext);
    function removeFromCart(id) {
        deleteFromCart(id);
        console.log(id);
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
            <button className="cart-button" onClick={() => removeFromCart(_id)} >
                Remove from cart
            </button>
        </div>
  )
}
