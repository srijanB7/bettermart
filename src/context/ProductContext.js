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
    const [isLoading, setIsLoading] = useState(true);
    function updateCategory(value) {
        dispatch({ type: "getByCategory", payload: value });
    }

    function updateSize(value) {
        dispatch({ type: "getBySize", payload: value });
    }

    function updateBysort(value) {
        dispatch({ type: "sort", payload: value });
    }

    function getSearchedItems(value) {
        dispatch({type: "search", payload: value})
    }

    function hideSearch() {
        dispatch({type: "toggleSearch"})
    }

    function removeFilters() {
        dispatch({type: "clear"});
    }

    function updateByRating(value) {
        dispatch({type: "rating", payload: value});
    }

    function updateByRange(value) {
        dispatch({type: "range", payload: value});
    }

    // function addItemToCart(value) {
    //     dispatch({ type: "addToCart", payload: value });
    // }

    const getProducts = async () => {
        try {
            const response = await fetch("/api/products");
            if (response.status === 200) {
                const data = await response.json();
                //console.log(data);
                setIsLoading(false);
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
            //console.log(data.cart[0].price);
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

    const updateCart = async (id, operation) => {
        try {
            const body = {
                action: {
                    type: operation,
                },
            };
            const encodedToken = localStorage.getItem("token");
            const response = await fetch(`/api/user/cart/${id}`, {
                method: "POST",
                headers: {
                    authorization: encodedToken,
                },
                body: JSON.stringify(body),
            });
            if (response.status === 200 || response.status === 201) {
                const data = await response.json();
                dispatch({ type: "getCart", payload: data.cart });
            }
        } catch (err) {
            console.error(err);
        }
    };

    const getWishList = async () => {
        try {
            const encodedToken = localStorage.getItem("token");
            const response = await fetch("/api/user/wishlist", {
                headers: {
                    authorization: encodedToken,
                },
            });
            if (response.status === 200 || response.status === 201) {
                const data = await response.json();
                dispatch({ type: "getWishList", payload: data.wishlist });
            }
        } catch (err) {
            console.error(err);
        }
    };

    async function addItemToWishList(value) {
        try {
            const item = {
                product: value,
            };
            const encodedToken = localStorage.getItem("token");
            const response = await fetch("/api/user/wishlist", {
                method: "POST",
                headers: {
                    authorization: encodedToken,
                },
                body: JSON.stringify(item),
            });

            if (response.status === 200 || response.status === 201) {
                const data = await response.json();
                dispatch({ type: "getWishList", payload: data.wishlist });
            }
        } catch (err) {
            console.error(err);
        }
    }

    async function deleteItemFromWishList(id) {
        try {
            const encodedToken = localStorage.getItem("token");
            const response = await fetch(`/api/user/wishlist/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: encodedToken,
                },
            });
            if (response.status === 200 || response.status === 201) {
                const data = await response.json();
                dispatch({ type: "getWishList", payload: data.wishlist });
            }
        } catch (err) {
            console.error(err);
        }
    }

    function reset() {
        dispatch({ type: "signout" });
    }

    useEffect(() => {
        // getProducts();
        getCart();
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
                deleteFromCart,
                updateCart,
                getWishList,
                getProducts,
                reset,
                deleteItemFromWishList,
                isLoading,
                getSearchedItems,
                hideSearch,
                removeFilters,
                updateByRating,
                updateByRange,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
