import { createContext, useState, useReducer, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    //const [user, setUser] = useState(null);
    
    const { reset } = useContext(ProductContext);
    const navigate = useNavigate();
    const location = useLocation();
    const signInHandler = async (email, password) => {
        try {
            let data = {
                email: email,
                password: password,
            };
            const response = await fetch("api/auth/login", {
                method: "POST",
                body: JSON.stringify(data),
            });
            //console.log(response);
            if (response.status === 200) {
                const back = await response.json();
                //console.log(back);
                localStorage.setItem("token", back?.encodedToken);
                localStorage.setItem("user", back?.foundUser.firstName);
                localStorage.setItem("email", back?.foundUser.email)
                //setUser(back?.foundUser.firstName);
                navigate(location?.state?.from?.pathname);

                //console.log(back?.foundUser)
            }
            if (response.status === 404) {
                console.error("User Not Found", "Please sign up");
            }
        } catch (err) {
            console.error(err);
        }
    };
    const signOutHandler = () => {
        localStorage.clear();
        //setUser(null);
        reset();
        navigate("/products");
        
    };

    const signUpHandler = async (name, email, password) => {
        try {
            let data = {
                email: email,
                password: password,
                name: name,
            };
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify(data),
            });
            console.log(response)
            if (response.status === 200 || response.status === 201) {
                const back = await response.json();
                console.log(back);
                localStorage.setItem("token", back?.encodedToken);
                localStorage.setItem("user", back?.createdUser.name);
                localStorage.setItem("email", back?.createdUser.email)
                //setUser(back?.createdUser.name);
                navigate("/products");

                //console.log(back?.foundUser)
            }
        } catch (err) {}
    };

    return (
        <AuthContext.Provider
            value={{ signInHandler, signOutHandler, signUpHandler }}
        >
            {children}
        </AuthContext.Provider>
    );
};
