import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import { Login } from "./pages/Login";
import { RequiresAuth } from "./components/RequiresAuth";
import { Cart } from "./pages/Cart";
import { WishList } from "./pages/WishList";
import { Profile } from "./pages/Profile";
import { SignUp } from "./pages/SignUp";
import { Logout } from "./pages/Logout";
import MockAPI from "./pages/Mockman";
import { Checkout } from "./pages/Checkout";
import { CheckLogin } from "./components/CheckLogin";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route
                    path="/login"
                    element={
                        <CheckLogin>
                            <Login />
                        </CheckLogin>
                    }
                />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/logout" element={<Logout />} />
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
                <Route
                    path="/checkout"
                    element={
                        <RequiresAuth>
                            <Checkout />
                        </RequiresAuth>
                    }
                />
                {/* <Route path="/mockman" element={<MockAPI/>}/> */}
            </Routes>
        </div>
    );
}

export default App;
