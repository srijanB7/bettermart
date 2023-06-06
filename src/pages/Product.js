import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Product = () => {
    const { products, deleteItemFromWishList, addItemToWishList, addItemToCart, cart, wishList } = useContext(ProductContext);
    const { id } = useParams();
    const product = products.find(({ _id }) => {
        return _id === id;
    });


    const user = localStorage.getItem("user");
    const isInWishList = wishList.some((item) => item._id === product._id);
    const isInCart = cart.some((item) => item._id === product._id);

    function addProductToCart(id) {
        if (!user) {
            toast.error("Login First");
            return;
        }
        //const product = products.find((product) => product._id === id);
        const productInCart = cart.find((item) => item._id === id);
        if (productInCart)  
            return;
        addItemToCart(product);
        toast("Added to Cart");
    }

    function addProductToWishList(id) {
        if (!user) {
            toast.error("Login First");
            return;
        }
        //const product = products.find((product) => product._id === id);
        if (isInWishList) {
            deleteItemFromWishList(id);
            toast("Removed from wishlist")
            return;
        }
        addItemToWishList(product);
        toast("Added to WishList")
    }
    //console.log(product);
    return (
        <div>
            <NavBar />
            <div className="item-container">
                <div className="left-part-product">
                    <img src={product?.image} className="product-img"/>
                </div>
                <div className="right-part-product">
                    <h3>{product?.title}</h3>
                    <p>{product?.description}</p>
                    <p className="product-price"><span>{product?.price}</span><span className="original-price">{product?.original_price}</span> </p>
                    <button className="cart-btn" onClick={() => addProductToCart(product._id) }>
                        {!isInCart ? "Add to cart" : <Link to="/cart">Go to cart</Link>} 
                    </button>
                    <button className="wishlist-btn" onClick={() => addProductToWishList(product._id)}>
                        { isInWishList ? "Remove from wishlist" : "add to wishlist"}
                    </button>
                </div>
            </div>
            <ToastContainer autoClose={2000}/>
        </div>
    );
};
