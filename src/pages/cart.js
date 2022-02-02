import React from "react";
import Carts from '../components/Carts'
import useCart from "../hooks/useCart";
import priceFormat from "../utils/priceFormat";

const Cart = () => {
    const hookCart = useCart();
    return(
        <Carts {...hookCart} priceFormat={priceFormat} />
    )
};

export default Cart;