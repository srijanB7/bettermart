import { createContext, useEffect, useReducer, useState } from "react";
import { INITIAL_STATE, dataReducer } from "../reducers/dataReducer";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, INITIAL_STATE);

    function updateCategory(value) {
        dispatch({ type: "getByCategory", payload: value });
    }

    function updateSize(value) {
        dispatch({type: "getBySize", payload: value});
    }

    function updateBysort(value) {
        dispatch({type: "sort", payload: value});
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

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <ProductContext.Provider value={{ ...state, updateCategory, updateSize, updateBysort }}>
            {children}
        </ProductContext.Provider>
    );
};
