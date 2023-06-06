import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { NavBar } from "../components/NavBar/NavBar";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export const Checkout = () => {
    const { cart, address } = useContext(ProductContext);
    console.log(address[0].city);
    let total = 0;
    if (cart.length > 0)
        total = cart.reduce(
            (acc, val) => acc + parseInt(val.price) * val.qty,
            0
        );


    return (
        <div>
            <NavBar />
            <div className="order-container">
                <div className="address">
                    {address?.map((add, ind) => (
                        <div key={ind} className="indi-address">
                            <input type="radio" required={true} name="address"/>
                            <label>
                                <h3>{add.name}</h3>
                                <p>{add.house}</p>
                                <p>{add.street}</p>
                            </label>
                        </div>
                    ))}
                    <button className="add-btn">Add new Address</button>
                </div>

                <div className="checkout-container">
                    <h3>Cart Details</h3>
                    <p>
                        Total Items in Cart: <span>{cart.length}</span>
                    </p>
                    {
                        cart.map(item => <div key={item._id}>
                            <p>{item.title}  ({item.qty})</p>

                        </div>)
                    }
                    <p>
                        Total Amount: <span>{total}</span>
                    </p>
                    <button><Link to="/products">Place Order</Link></button>
                    
                </div>
            </div>
            <ToastContainer autoClose={2000}/>
        </div>
    );
};
