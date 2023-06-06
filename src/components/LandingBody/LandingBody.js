import React, { useContext } from "react";
import "./LandingBody.css";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

export const LandingBody = () => {
    const { redirectToCategory } = useContext(ProductContext);
    function handleClick(val) {
        redirectToCategory(val);
    }
    return (
        <div className="landing-container">
            <main>
                <h2>A wide line of clothing for everyone</h2>
                <div className="images">
                    <Link to="/products">
                        <img
                            src="https://res.cloudinary.com/dcxnaihyu/image/upload/v1684359236/best-season-sale-banner-design-template_2239-1175_tx5bcp.jpg"
                            className="home-image"
                        />
                        <img
                            src="https://res.cloudinary.com/dcxnaihyu/image/upload/v1684359739/Screenshot_2023-05-18_at_3.11.03_AM_cvjio4.png"
                            className="home-image"
                        />
                    </Link>
                    
                   
                </div>
                <div className="category-container">
                    <h3>SHOP BY CATEGORY</h3>
                    <div className="categories">
                        <Link to="/products" onClick={() => handleClick("Men")}>
                            <div className="category-card">
                                <div className="category-left">
                                    <img
                                        className="category-image"
                                        src="https://res.cloudinary.com/donqbxlnc/image/upload/v1648896074/fashify/e3220043-d4db-4c8a-9a5e-80459db0aae31648190230381-Roadster-_HL_fan7lo.webp"
                                    />
                                </div>
                                <div className="category-right">
                                    <h4>Men's Collection</h4>
                                    <p>Explore the Latest collection</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/products" onClick={() => handleClick("Women")}>
                            <div className="category-card">
                                <div className="category-left">
                                    <img
                                        className="category-image"
                                        src="https://res.cloudinary.com/donqbxlnc/image/upload/v1648896554/fashify/4f54b81d-51ca-4526-bab3-04066d977f5a1648368745195-Levis_keqmez.webp"
                                    />
                                </div>
                                <div className="category-right">
                                    <h4>Women's Collection</h4>
                                    <p>Explore the Latest collection</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/products" onClick={() => handleClick("Kids")}>
                            <div className="category-card">
                                <div className="category-left">
                                    <img
                                        className="category-image"
                                        src="https://res.cloudinary.com/donqbxlnc/image/upload/v1648516896/fashify/dce84423-582a-4487-986b-46af90a7048e1647926860775-Allen-Solly-Junior-Girls-Navy-Blue--Off-White-Floral-Print-T-2_d2obqp.jpg"
                                    />
                                </div>
                                <div className="category-right">
                                    <h4>Kids Collection</h4>
                                    <p>Explore the Latest collection</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};
