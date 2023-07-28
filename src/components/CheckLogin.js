import { useLocation, Navigate } from "react-router-dom";

export const CheckLogin = ({children}) => {
    const user = localStorage.getItem("user");
    const location = useLocation()
    return user ? <Navigate to="/" state={{ from: location }} /> : children;
};
