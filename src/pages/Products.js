import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { NavBar } from "../components/NavBar/NavBar";
import { ProductCard } from "../components/ProductCard/ProductCard";
import "../App.css";
import { Filters } from "../components/Filters/Filters";
import ReactLoading from "react-loading";

export const Products = () => {
    const {
        products,
        categories,
        size,
        sort,
        wishList,
        cart,
        getProducts,
        isLoading,
        category,
        sizes,
        rating,
        range
    } = useContext(ProductContext);

    useEffect(() => {
        setTimeout(() => {
            getProducts();
        }, 1000);
        return () => {
            clearTimeout();
        };
    }, []);

    let displayProducts = [...products];

    displayProducts =
        category.length > 0
            ? displayProducts.filter((item) => category.includes(item.category))
            : [...products];

    displayProducts =
        sizes.length > 0
            ? displayProducts.filter((item) => sizes.includes(item.size))
            : [...displayProducts];

    if (sort === "low") {
        displayProducts = displayProducts.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        displayProducts = displayProducts.sort((a, b) => b.price - a.price);
    }

    if (rating !== null) {
        displayProducts = displayProducts.filter(
            (item) => item.rating >= parseInt(rating)
        );
    }

    displayProducts = displayProducts.filter(item => parseInt(item.price) <= range);

    return (
        <div>
            <NavBar />
            <div className="body">
                <Filters />

                <div className="products-container">
                    {isLoading && (
                        <ReactLoading
                            type={"spinningBubbles"}
                            color={"blue"}
                            height={667}
                            width={375}
                        />
                    )}

                    {!isLoading &&
                        (displayProducts.length > 0 ? (
                            displayProducts?.map((products) => (
                                <ProductCard {...products} key={products._id} />
                            ))
                        ) : (
                            <p>No Products Found</p>
                        ))}
                </div>
            </div>
        </div>
    );
};
