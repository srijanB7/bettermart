import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { NavBar } from "../components/NavBar/NavBar";
import { ProductCard } from "../components/ProductCard/ProductCard";
import "../App.css";
import { Filters } from "../components/Filters/Filters";

export const Products = () => {
    const { products, categories, size, sort } = useContext(ProductContext);
    let displayProducts = [];

    for (const val in categories) {
        displayProducts = [
            ...displayProducts,
            ...products.filter(
                (product) => categories[val] && product.category === val
            ),
        ];
    }

    let sizedProducts = [],
        displayBySize = [];
    for (const val in size) {
        if (size[val]) {
            sizedProducts = [
                ...sizedProducts,
                ...products.filter((product) => product.size === val),
            ];
            // displayProducts = [
            //     ...displayProducts.filter((products) => products.size === val),
            // ];
            displayBySize = [
                ...displayBySize,
                ...displayProducts.filter((products) => products.size === val),
            ];
        }
    }

    if (displayBySize.length > 0) {
        displayProducts = [...displayBySize];
    } else {
        for (const val in size) {
            if (size[val]) {
                displayProducts = displayProducts.filter(
                    (products) => products.size === val
                );
            }
        }
    }

    if (!categories.Men && !categories.Women && !categories.Kids) {
        //displayProducts = [...products, ];
        sizedProducts.length > 0
            ? (displayProducts = [...sizedProducts])
            : (displayProducts = [...products]);
    }

    if (sort.low) {
        displayProducts = displayProducts.sort((a, b) => a.price - b.price);
    }

    if (sort.high) {
        displayProducts = displayProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <div>
            <NavBar />
            <div className="body">
                <Filters />
                <div className="products-container">
                    {displayProducts.length > 0 ? (
                        displayProducts?.map((products) => (
                            <ProductCard {...products} key={products._id} />
                        ))
                    ) : (
                        <p>No Products Found</p>
                    )}
                </div>
            </div>
        </div>
    );
};
