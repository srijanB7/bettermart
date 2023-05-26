import React, { useContext } from "react";
import "./ProductCard.css";
import { Link, Navigate } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ProductContext } from "../../context/ProductContext";

export const ProductCard = ({ _id, image, title, original_price, price }) => {
    const { products, addItemToCart, cart, addItemToWishList, wishList } =
        useContext(ProductContext);


    function addToCart(id) {
        const product = products.find((product) => product._id === id);
        const productInCart = cart.find((item) => item._id === id);
        if (productInCart) return;
        addItemToCart(product);
    }

    const user = localStorage.getItem("user");

    function addToWishList(id) {
        if (!user) {
            alert("login");
            return;
        }
        const product = products.find((product) => product._id === id);
        addItemToWishList(product);
    }
    const isInCart = cart.some((product) => product._id === _id);
    const isInWishList = wishList.some((product) => product._id === _id);
    return (
        <div className="product-container">
            <div className="product-header">
                <img src={image} className="product-image" />
                <button
                    className="wishlist-button"
                    onClick={() => addToWishList(_id)}
                >
                    {isInWishList ? (
                        <AiFillHeart
                            className="icon"
                            color="red"
                            fontSize="2em"
                        />
                    ) : (
                        <AiOutlineHeart
                            className="icon"
                            color="red"
                            fontSize="2em"
                        />
                    )}
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
