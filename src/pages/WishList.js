import React, { useContext, useEffect } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { ProductContext } from "../context/ProductContext";
import { WishListCard } from "../components/WishListCard/WishListCard";

export const WishList = () => {
    const { wishList, getWishList } = useContext(ProductContext);
    useEffect(() => {
        getWishList();
    }, []);

    return (
        <div>
            <NavBar />
            <div>
                <h1>WishList - {wishList.length}</h1>
                <ul>
                    {wishList.map((item) => (
                        <WishListCard {...item} key={item._id} />
                    ))}
                </ul>
				
            </div>
        </div>
    );
};
