import React, { useContext, useEffect } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { LandingBody } from "../components/LandingBody/LandingBody";
import { Footer } from "../components/Footer/Footer";
import { ProductContext } from "../context/ProductContext";

export const Home = () => {
    const { getProducts } = useContext(ProductContext);

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
            <NavBar />
            <LandingBody />
            <Footer />
        </div>
    );
};
