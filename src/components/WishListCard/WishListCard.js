import React, { useContext } from "react";
import "./WishListCard.css";
import { ProductContext } from "../../context/ProductContext";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const WishListCard = ({ _id, image, title, original_price, price }) => {
    const { wishList, deleteItemFromWishList, addItemToCart, cart } =
        useContext(ProductContext);

    const isInCart = cart.some((product) => product._id === _id);
    const addToCart = (id) => {
        if (isInCart) {
            return;
        }
        const product = wishList.find((product) => product._id === id);
        addItemToCart(product);
    };

    function handleDeleteWishlist(id) {
        deleteItemFromWishList(id);
    }
    return (
        <div className="product-container">
            <div className="product-header">
                <img src={image} className="product-image" />
                <button
                    className="wishlist-button"
                    onClick={() => handleDeleteWishlist(_id)}
                >
                    <AiFillHeart className="icon" color="red" fontSize="2em" />
                </button>
            </div>
            <p className="product-name">{title}</p>
            <div className="price">
                <p className="current-price">Rs {price}</p>
                <p className="actual-price">Rs {original_price}</p>
            </div>
            <button className="cart-button" onClick={() => addToCart(_id)}>
                {isInCart ? <Link to="/cart">Go To Cart</Link> : "Add to cart"}
            </button>
        </div>
    );
};
