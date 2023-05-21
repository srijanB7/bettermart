import { useReducer } from "react"

export const INITIAL_STATE = {
    products: [],
    cart: [],
    wishlist: [],
    categories: {
        Men: false,
        Women: false,
        Kids: false,
    },
    size: {
        S: false,
        M: false,
        L: false,
        XL: false,
        XXL: false
    },
    sort: {
        low: false,
        high: false,
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
        case "getBySize": {
            return {
                ...state,
                size: { ...state.size, [action.payload]: !state.size[action.payload]},
            }
        }

        case "sort": {
            let updatedSort;
            if(action.payload === "low")
                updatedSort={ low: true, high: false};
            else 
                updatedSort={low: false, high: true}
        
            return {
                ...state, sort: updatedSort
            }    
        }


        default: 
            return state;
    }
}