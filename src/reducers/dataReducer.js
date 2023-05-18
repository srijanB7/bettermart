import { useReducer } from "react"

export const INITIAL_STATE = {
    products: [],
    cart: [],
    wishlist: [],
    categories: {
        Men: false,
        Women: false,
        Kids: false,
    }

}

export function dataReducer(state, action) {
    switch(action.type) {
        case "getproducts": {
            return {...state, products: action.payload};
        }
        case "getByCategory": {
            
            return {
                ...state,
                categories: {...state.categories, [action.payload]: !state.categories[action.payload]},
            }
        }
        default: 
            return state;
    }
}