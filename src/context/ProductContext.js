import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react";
import { INITIAL_STATE, dataReducer } from "../reducers/dataReducer";
import { AuthContext } from "./AuthContext";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, INITIAL_STATE);

    function updateCategory(value) {
        dispatch({ type: "getByCategory", payload: value });
    }

    function updateSize(value) {
        dispatch({ type: "getBySize", payload: value });
    }

    function updateBysort(value) {
        dispatch({ type: "sort", payload: value });
    }

    // function addItemToCart(value) {
    //     dispatch({ type: "addToCart", payload: value });
    // }

    function addItemToWishList(value) {
        dispatch({ type: "addToWishList", payload: value });
    }

    const getProducts = async () => {
        try {
            const response = await fetch("/api/products");
            if (response.status === 200) {
                const data = await response.json();
                //console.log(data);
                dispatch({ type: "getproducts", payload: data.products });
            }
        } catch (e) {
            console.error(e);
        }
    };

    const addItemToCart = async (item) => {
        try {
            const encodedToken = localStorage.getItem("token");
            const product = {
                product: item,
            };
            //console.log(product.product);
            const response = await fetch("/api/user/cart", {
                method: "POST",
                headers: {
                    authorization: encodedToken, // passing token as an authorization header
                },
                body: JSON.stringify(product),
            });
            //console.log(response);
            if (response.status === 200 || response.status === 201) {
                const data = await response.json();
                //console.log(data.cart);
                dispatch({ type: "addToCart", payload: product.product });
            }
            // const back = await response.json();
            // cart = back.data.cart;
            // console.log(cart);
        } catch (error) {
            console.log(error);
        }
    };

    const getCart = async () => {
        const encodedToken = localStorage.getItem("token");
        const response = await fetch("/api/user/cart", {
            headers: {
                authorization: encodedToken,
            },
        });
        if (response.status === 200 || response.status === 201) {
            const data = await response.json();
            //console.log(data);
            dispatch({ type: "getCart", payload: data.cart });
        }
    };

    const deleteFromCart = async (id) => {
        try {
            const encodedToken = localStorage.getItem("token");
            const response = await fetch(`/api/user/cart/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: encodedToken,
                },
            });
            if (response.status === 200 || response.status === 201) {
                const data = await response.json();
                dispatch({ type: "getCart", payload: data.cart });
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getProducts();
        //getCart();
        //console.log(user);
    }, []);
    return (
        <ProductContext.Provider
            value={{
                ...state,
                updateCategory,
                updateSize,
                updateBysort,
                addItemToCart,
                addItemToWishList,
                addItemToCart,
                getCart,
                deleteFromCart
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
