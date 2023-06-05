import React, { useContext } from "react";
import "./ProductCard.css";
import { Link, Navigate } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ProductContext } from "../../context/ProductContext";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const ProductCard = ({ _id, image, title, original_price, price }) => {
    const {
        products,
        addItemToCart,
        cart,
        addItemToWishList,
        wishList,
        deleteItemFromWishList,
    } = useContext(ProductContext);

    function addToCart(id) {
        const product = products.find((product) => product._id === id);
        const productInCart = cart.find((item) => item._id === product._id);
        if (productInCart)  
            return;
        addItemToCart(product);
        toast("Added to Cart");
    }
    const user = localStorage.getItem("user");
    const isInWishList = wishList.some((product) => product._id === _id);

    function addToWishList(id) {
        if (!user) {
            alert("login");
            return;
        }
        const product = products.find((product) => product._id === id);
        if (isInWishList) {
            deleteItemFromWishList(id);
            toast("Removed from wishlist")
            return;
        }
        addItemToWishList(product);
        toast("Added to WishList")
    }
    const isInCart = cart.some((product) => product._id === _id);
    return (
        <div className="product-container">
            <div className="product-header">
                <Link to={`/product/${_id}`}>
                    <img src={image} className="product-image" />
                </Link>
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
            <ToastContainer autoClose={2000}/>
            
        </div>
    );
};
