import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

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
                setUser(back?.foundUser.firstName);
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
        setUser(null);
        navigate("/products");
    };
    return (
        <AuthContext.Provider value={{ signInHandler, user, signOutHandler }}>
            {children}
        </AuthContext.Provider>
    );
};
