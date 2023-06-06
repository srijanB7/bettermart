import React, { useContext, useState } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { AuthContext } from "../context/AuthContext";
import { ProductContext } from "../context/ProductContext";
import { Footer } from "../components/Footer/Footer";
import { AiFillDelete } from "react-icons/ai"

export const Profile = () => {
    const { signOutHandler } = useContext(AuthContext);
    const { address, addaAddress, deleteaAddress } = useContext(ProductContext);
    function handleLogout() {
        signOutHandler();
    }

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

    const user = localStorage.getItem("user");
    const email = localStorage.getItem("email");

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

	function deleteAddress(ind) {
		deleteaAddress(ind);
	}

    return (
        <div className="profile-page">
            <NavBar />
            <div className="profile-container">
                <div className="profile-details">
                    <h2>Details</h2>
                    <p>Name: {user}</p>
                    <p>Email: {email}</p>
                </div>
                <div className="address-details">
                    <h2>Address</h2>
                    {address?.map((add, ind) => (
                        <div key={ind} className="indi-address">
                            <button className="addDel-btn" onClick={() => deleteAddress(ind)}><AiFillDelete height={"large"}/></button>
                            <label>
                                <h3>{add.name}</h3>
                                <p>{add.house}</p>
                                <p>{add.street}</p>
                            </label>
                        </div>
                    ))}
                    <button className="add-btn" onClick={addNewAddress}>
                        Add new Address
                    </button>
                </div>
                <button className="logout-btn" onClick={handleLogout} >Logout</button>
            </div>
            {newAddress && (
                <div className="newAddress-inputs">
                    <label>Name</label>
                    <input type="text" required={true} value={name} onChange={handleName}/>
                    <label>House</label>
                    <input type="text" required={true} value={house} onChange={handleHouse}/>
                    <label>Street</label>
                    <input type="text" required={true} value={street} onChange={handleStreet}/>
                    <label>City</label>
                    <input type="text" required={true} value={city} onChange={handleCity}/>
                    <label>PinCode</label>
                    <input type="text" required={true} value={pin} onChange={handlePin}/>
                    <label>Mobile</label>
                    <input type="text" required={true} value={mobile} onChange={handleMobile}/>
					<button onClick={addAddress}>Add</button>
                </div>
            )}
			
        </div>
    );
};
