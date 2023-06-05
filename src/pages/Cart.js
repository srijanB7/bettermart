import React, { useContext, useEffect } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { ProductContext } from "../context/ProductContext";
import { CartCard } from "../components/CartCard/CartCard";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

export const Cart = () => {
    const { cart, getCart } = useContext(ProductContext);

    useEffect(() => {
        getCart();
        //	console.log("effect");
    }, []);
    let total = 0;
    if (cart.length > 0)
        total = cart.reduce(
            (acc, val) => acc + parseInt(val.price) * val.qty,
            0
        );

    return (
        <div>
            <NavBar />
            <div className="cart-container">
                
                <ul>
                    {cart?.map((item) => (
                        <CartCard {...item} key={item._id} />
                    ))}
                </ul>
                <div className="checkout-container">
                    <h3>Cart Details</h3>
                    <p>
                        Total Items in Cart: <span>{cart.length}</span>
                    </p>
                    <p>
                        Total Amount: <span>{total}</span>
                    </p>
                    <button>
                        {cart.length === 0 ? (
                            <Link to="/products">Add Items to Cart</Link>
                        ) : (
                            <Link to="/checkout">Checkout</Link>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};
