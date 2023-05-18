import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { NavBar } from "../components/NavBar/NavBar";
import { ProductCard } from "../components/ProductCard/ProductCard";
import "../App.css";
import { Filters } from "../components/Filters/Filters";

export const Products = () => {
    const { products, categories } = useContext(ProductContext);
    let displayProducts = [];

    if (categories.Men) {
        displayProducts = [
            ...displayProducts,
            ...products.filter((product) => product.category === "Men"),
        ];
        console.log(displayProducts);
    }
    if (categories.Women) {
        displayProducts = [
            ...displayProducts,
            ...products.filter((product) => product.category === "Women"),
        ];
    }
    if (categories.Kids) {
        displayProducts = [
            ...displayProducts,
            ...products.filter((product) => product.category === "Kids"),
        ];
    }

    if (!categories.Men && !categories.Women && !categories.Kids)
        displayProducts = [...products];

    console.log(categories);
    console.log(displayProducts);

    return (
        <div>
            <NavBar />
            <div className="body">
                <Filters />
                <div className="products-container">
                    {displayProducts?.map((products) => (
                        <ProductCard {...products} />
                    ))}
                </div>
            </div>
        </div>
    );
};
