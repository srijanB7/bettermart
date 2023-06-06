import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { NavBar } from "../components/NavBar/NavBar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export const Checkout = () => {
    const { cart, address, addaAddress } = useContext(ProductContext);
    console.log(address[0].city);
    let total = 0;
    if (cart.length > 0)
        total = cart.reduce(
            (acc, val) => acc + parseInt(val.price) * val.qty,
            0
        );

        const [newAddress, setNewAddress] = useState(false);
        const [name, setName] = useState("");
        const [house, setHouse] = useState("");
        const [street, setStreet] = useState("");
        const [city, setCity] = useState("");
        const [pin, setPin] = useState("");
        const [mobile, setMobile] = useState("");
        function addNewAddress() {
            setNewAddress(true);
        }
    
    
        function addAddress() {
            setNewAddress(false);
            const newAddress = {
                name,
                house,
                street,
                city,
                pin,
                mobile
            }
            addaAddress(newAddress);
        }
    
        function handleName(event) {
            setName(event.target.value);
        }
        function handleHouse(event) {
            setHouse(event.target.value)
        }
        function handleStreet(event) {
            setStreet(event.target.value);
        }
        function handleCity(event) {
            setCity(event.target.value);
        }
        function handlePin(event) {
            setPin(event.target.value);
        }
        function handleMobile(event) {
            setMobile(event.target.value);
        }

    return (
        <div>
            <NavBar />
            <div className="order-container">
                <div className="address">
                    {address?.map((add, ind) => (
                        <div key={ind} className="indi-address">
                            <input
                                type="radio"
                                required={true}
                                name="address"
                            />
                            <label>
                                <h3>{add.name}</h3>
                                <p>{add.house}</p>
                                <p>{add.street}</p>
                            </label>
                        </div>
                    ))}
                    <button className="add-btn" onClick={addNewAddress}>Add new Address</button>
                    {newAddress && (
                        <div className="newAddress-inputs">
                            <label>Name</label>
                            <input
                                type="text"
                                required={true}
                                value={name}
                                onChange={handleName}
                            />
                            <label>House</label>
                            <input
                                type="text"
                                required={true}
                                value={house}
                                onChange={handleHouse}
                            />
                            <label>Street</label>
                            <input
                                type="text"
                                required={true}
                                value={street}
                                onChange={handleStreet}
                            />
                            <label>City</label>
                            <input
                                type="text"
                                required={true}
                                value={city}
                                onChange={handleCity}
                            />
                            <label>PinCode</label>
                            <input
                                type="text"
                                required={true}
                                value={pin}
                                onChange={handlePin}
                            />
                            <label>Mobile</label>
                            <input
                                type="text"
                                required={true}
                                value={mobile}
                                onChange={handleMobile}
                            />
                            <button onClick={addAddress}>Add</button>
                        </div>
                    )}
                </div>

                <div className="checkout-container">
                    <h3>Cart Details</h3>
                    <p>
                        Total Items in Cart: <span>{cart.length}</span>
                    </p>
                    {cart.map((item) => (
                        <div key={item._id}>
                            <p>
                                {item.title} ({item.qty})
                            </p>
                        </div>
                    ))}
                    <p>
                        Total Amount: <span>{total}</span>
                    </p>
                    <button>
                        <Link to="/products">Place Order</Link>
                    </button>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
};
