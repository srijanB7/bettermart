export const INITIAL_STATE = {
    products: [],
    cart: [],
    wishList: [],
    searchedItems: [],
    searchResults: false,
    rating: null,
    category: [],
    sizes: [],
    range: 2000,
    sort: "null",
    address: [
        {
            
            name: "SherLock Holmes",
            house: "221 B",
            street: "Baker Street",
            city: "London",
            pin: "NW1",
            mobile: "987654321",
            
        },
    ],
};

export function dataReducer(state, action) {
    switch (action.type) {
        case "getproducts": {
            return { ...state, products: action.payload };
        }

        case "getCart": {
            return { ...state, cart: action.payload };
        }
        case "getByCategory": {
            const checked = action.payload.target.checked;

            let updatedCategories = state.category.filter(
                (item) => item !== action.payload.target.value
            );
            if (checked) {
                updatedCategories = [
                    ...state.category,
                    action.payload.target.value,
                ];
            }

            return {
                ...state,
                // categories: {
                //     ...state.categories,
                //     [action.payload]: !state.categories[action.payload],
                // },
                category: updatedCategories,
            };
        }
        case "getBySize": {
            const checked = action.payload.target.checked;

            let updatedSizes = state.sizes.filter(
                (size) => size !== action.payload.target.value
            );
            if (checked) {
                updatedSizes = [...updatedSizes, action.payload.target.value];
            }
            return {
                ...state,
                sizes: updatedSizes,
            };
        }

        case "sort": {
            return {
                ...state,
                sort: action.payload,
            };
        }

        case "getCart": {
            return {
                ...state,
                cart: [...action.payload],
            };
        }

        case "addToCart": {
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        }

        case "addToWishList": {
            return {
                ...state,
                wishList: [...state.wishList, action.payload],
            };
        }

        case "getWishList": {
            return {
                ...state,
                wishList: [...action.payload],
            };
        }

        case "signout": {
            return {
                ...state,
                wishList: [],
                cart: [],
            };
        }

        case "search": {
            let searchedProducts = [],
                updatedSearchResults = false;
            if (action.payload !== "") {
                searchedProducts = state.products.filter((product) =>
                    product.title.toLowerCase().includes(action.payload)
                );
                updatedSearchResults = true;
            }
            return {
                ...state,
                searchedItems: searchedProducts,
                searchResults: updatedSearchResults,
            };
        }

        case "toggleSearch": {
            return {
                ...state,
                searchResults: false,
            };
        }

        case "clear": {
            return {
                ...state,
                rating: null,
                category: [],
                sizes: [],
                searchedItems: [],
                sort: null,
            };
        }

        case "rating": {
            return {
                ...state,
                rating: action.payload,
            }
        }

        case "range": {
            return {
                ...state,
                range: action.payload
            }
        }

        case "redirect": {
            return {
                ...state,
                category: [action.payload],
            }
        }

        case "add address": {
            return {
                ...state,
                address: [...state.address, action.payload],
            }
        }

        case "delete address": {
            return {
                ...state,
                address: state.address.filter((item, ind) => ind != action.payload)
            }
        }

        default:
            return state;
    }
}
