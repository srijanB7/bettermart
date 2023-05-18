import React, { useContext } from "react";
import "./Filters.css";
import { ProductContext } from "../../context/ProductContext";



export const Filters = () => {

    const { updateCategory } = useContext(ProductContext);

    function handleChange(e) {
        updateCategory(e.target.value);
    }

    return (
        <div className="filters-container">
            <h3>Filters</h3>
            <div className="filters">
                <h4>Price</h4>
                <input type="range" />

                <div className="category">
                    <h4>Category</h4>
                    <div>
                        <input type="checkbox" name="category" value="Men" onChange={handleChange}/>
                        <label>Men</label>
                    </div>
                    <div>
                        <input type="checkbox" name="category" value="Women" onChange={handleChange}/>
                        <label>Women</label>
                    </div>
                    <div>
                        <input type="checkbox" name="category" value="Kids" onChange={handleChange}/>
                        <label>Kids</label>
                    </div>
                </div>

                <div className="size">
                    <h4>Size</h4>
                    <div>
                        <input type="checkbox" value="S" />
                        <label>S</label>
                    </div>
                    <div>
                        <input type="checkbox" value="M" />
                        <label>M</label>
                    </div>
                    <div>
                        <input type="checkbox" value="L" />
                        <label>L</label>
                    </div>
                    <div>
                        <input type="checkbox" value="XL" />
                        <label>XL</label>
                    </div>
                </div>

                <div className="rating">
                    <h4>Rating</h4>
                    <div>
                        <input type="radio" name="rating" />
                        <label>4+ stars </label>
                    </div>
                    <div>
                        <input type="radio" name="rating" />
                        <label>3+ stars </label>
                    </div>
                    <div>
                        <input type="radio" name="rating" />
                        <label>2+ stars </label>
                    </div>

                    <div>
                        <input type="radio" name="rating" />

                        <label>1+ stars </label>
                    </div>
                </div>

                <div className="sort">
                    <h4>Sort By</h4>
                    <div>
                        <input type="radio" name="sort" />
                        <label>Price- Low to High</label>
                    </div>
                    <div>
                        <input type="radio" name="sort" />
                        <label>Price- High to Low</label>
                    </div>
                </div>
            </div>
        </div>
    );
};
