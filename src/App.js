import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import { Login } from "./pages/Login";

function App() {
    

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
