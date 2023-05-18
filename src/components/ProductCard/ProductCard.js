import React from "react";
import "./ProductCard.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export const ProductCard = ({ _id, image, title }) => {
    
    return (
        <div className="product-container" key={_id}>
            <div className="product-header">
                <img src={image} className="product-image" />
                <button className="wishlist-button">
                    <AiFillHeart className="icon" color="red" fontSize="2em" />
                </button>
            </div>
            <p className="product-name">{title}</p>
            <div className="price">
                <p className="current-price">Rs 2000</p>
                <p className="actual-price">Rs 3885</p>
            </div>
            <button className="cart-button">Add to Cart</button>
        </div>
    );
};
