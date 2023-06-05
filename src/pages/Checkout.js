import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { NavBar } from "../components/NavBar/NavBar";

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
                    <p>
                        Total Amount: <span>{total}</span>
                    </p>
                    <button>Place Order</button>
                </div>
            </div>
        </div>
    );
};
