import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import { Login } from "./pages/Login";
import { RequiresAuth } from "./components/RequiresAuth";
import { Cart } from "./pages/Cart";
import { WishList } from "./pages/WishList";
import { Profile } from "./pages/Profile";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/login" element={<Login />} />
                
                
                <Route
                    path="/profile"
                    element={
                        <RequiresAuth>
                            <Profile />
                        </RequiresAuth>
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <RequiresAuth>
                            <Cart />
                        </RequiresAuth>
                    }
                />
                <Route
                    path="/wishlist"
                    element={
                        <RequiresAuth>
                            <WishList />
                        </RequiresAuth>
                    }
                />

            </Routes>
        </div>
    );
}

export default App;
