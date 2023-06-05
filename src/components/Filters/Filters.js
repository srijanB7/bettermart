import React, { useContext } from "react";
import "./Filters.css";
import { ProductContext } from "../../context/ProductContext";

export const Filters = () => {
    const {
        updateCategory,
        updateSize,
        updateBysort,
        category,
        sizes,
        sort,
        removeFilters,
        rating,
        updateByRating,
        range,
        updateByRange,
    } = useContext(ProductContext);

    function handleCategoryChange(e) {
        updateCategory(e);
    }

    function handleSizeChange(e) {
        updateSize(e);
    }

    function handleSort(e) {
        updateBysort(e.target.value);
    }

    function clearFilters() {
        removeFilters();
    }

    function handleRating(event) {
        updateByRating(event.target.value);
    }

    function handleRange(event) {
        updateByRange(event.target.value);
    }

    return (
        <div className="filters-container">
            <div className="filter-header">
                <h3>Filters</h3>
                <button onClick={clearFilters}>Clear</button>
            </div>
            <div className="filters">
                <h4>Price</h4>
                <label className="slider">
                    <span>200</span>
                    <span>750</span>
                    <span>2000</span>
                </label>
                <input
                    type="range"
                    value={range}
                    max={2000}
                    min={200}
                    onChange={handleRange}
                />

                <div className="category">
                    <h4>Category</h4>
                    <div>
                        <input
                            type="checkbox"
                            value="Men"
                            checked={category.includes("Men")}
                            onChange={handleCategoryChange}
                        />
                        <label>Men</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            value="Women"
                            checked={category.includes("Women")}
                            onChange={handleCategoryChange}
                        />
                        <label>Women</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            value="Kids"
                            checked={category.includes("Kids")}
                            onChange={handleCategoryChange}
                        />
                        <label>Kids</label>
                    </div>
                </div>

                <div className="size">
                    <h4>Size</h4>
                    <div>
                        <input
                            type="checkbox"
                            value="S"
                            checked={sizes.includes("S")}
                            onChange={handleSizeChange}
                        />
                        <label>S</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            value="M"
                            checked={sizes.includes("M")}
                            onChange={handleSizeChange}
                        />
                        <label>M</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            value="L"
                            checked={sizes.includes("L")}
                            onChange={handleSizeChange}
                        />
                        <label>L</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            value="XL"
                            checked={sizes.includes("XL")}
                            onChange={handleSizeChange}
                        />
                        <label>XL</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            value="XXL"
                            checked={sizes.includes("XXL")}
                            onChange={handleSizeChange}
                        />
                        <label>XXL</label>
                    </div>
                </div>

                <div className="rating">
                    <h4>Rating</h4>
                    <div>
                        <input
                            type="radio"
                            name="rating"
                            value="4"
                            checked={rating === "4"}
                            onChange={handleRating}
                        />
                        <label>4+ stars </label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="rating"
                            value="3"
                            checked={rating === "3"}
                            onChange={handleRating}
                        />
                        <label>3+ stars </label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="rating"
                            value="2"
                            checked={rating === "2"}
                            onChange={handleRating}
                        />
                        <label>2+ stars </label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            name="rating"
                            value="1"
                            checked={rating === "1"}
                            onChange={handleRating}
                        />

                        <label>1+ stars </label>
                    </div>
                </div>

                <div className="sort">
                    <h4>Sort By</h4>
                    <div>
                        <input
                            type="radio"
                            name="sort"
                            value="low"
                            checked={sort === "low"}
                            onChange={handleSort}
                        />
                        <label>Price- Low to High</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="sort"
                            value="high"
                            checked={sort === "high"}
                            onChange={handleSort}
                        />
                        <label>Price- High to Low</label>
                    </div>
                </div>
            </div>
        </div>
    );
};
