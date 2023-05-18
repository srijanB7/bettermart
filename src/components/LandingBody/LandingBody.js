import React from "react";
import "./LandingBody.css";

export const LandingBody = () => {
    return (
        <div className="landing-container">
            <main>
                <h2>A wide line of clothing for everyone</h2>
                <div className="images">
                    <img
                        src="https://res.cloudinary.com/dcxnaihyu/image/upload/v1684359236/best-season-sale-banner-design-template_2239-1175_tx5bcp.jpg"
                        className="home-image"
                    />
                    <img
                        src="https://res.cloudinary.com/dcxnaihyu/image/upload/v1684359739/Screenshot_2023-05-18_at_3.11.03_AM_cvjio4.png"
                        className="home-image"
                    />
                </div>
                <div className="category-container">
                    <h3>SHOP BY CATEGORY</h3>
                    <div className="Categories">
						
					</div>
                </div>
            </main>

            {/* <h5>12K+</h5>
            <p>Happy Customers</p> */}
        </div>
    );
};
