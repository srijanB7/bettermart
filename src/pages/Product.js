import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { ProductCard } from "../components/ProductCard/ProductCard";


export const Product = () => {
    const {
        products,
        
    } = useContext(ProductContext);
    const { id } = useParams();
    const product = products.find(({_id}) => {
        
        return _id === id
    });
    //console.log(product); 
    return (<div>
        <NavBar />
        <ProductCard {...product}/>
    </div>);
};
