import React, { useContext, useState } from "react";
import { BsCart, BsHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { ProductContext } from "../../context/ProductContext";

export const NavBar = ({ products }) => {
    const [searchText, setSearchText] = useState("");
    const { getSearchedItems, searchedItems, searchResults, hideSearch } =
        useContext(ProductContext);
    function handleChange(event) {
        const input = event.target.value.toLowerCase();
        setSearchText(event.target.value);
        getSearchedItems(input);
        //console.log(event.target.value)
    }
    //console.log(searchResults);
    return (
        <nav>
            <Link to="/">
                <p>BetterMart</p>
            </Link>
            <input
                type="search"
                placeholder="Search"
                onChange={handleChange}
                value={searchText}
            />
            {searchResults && (
                <div className="search-results">
                    {searchedItems.length > 0 ? (
                        searchedItems.map((item) => (
                            <div key={item._id} className="search-product">
                                <Link
                                    to={`/product/${item._id}`}
                                    className="search-item"
                                    onClick={() => hideSearch()}
                                >
                                    <img
                                        src={item.image}
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                        }}
                                    />
                                    <div className="search-product-details">
                                        <p>{item.title}</p>
                                        <p>{item.price}</p>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No Items Found</p>
                    )}
                </div>
            )}
            <div className="links">
                <Link to="/profile">
                    <CgProfile />
                </Link>
                <Link to="/cart">
                    <BsCart />
                </Link>
                <Link to="/wishlist">
                    <BsHeart />
                </Link>
            </div>
        </nav>
    );
};
