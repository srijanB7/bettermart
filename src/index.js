import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductContext, ProductProvider } from "./context/ProductContext";

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ProductProvider>
                <App />
            </ProductProvider>
        </BrowserRouter>
    </React.StrictMode>
);
