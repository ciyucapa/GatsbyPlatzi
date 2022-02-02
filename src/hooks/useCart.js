import {useCallback, useContext, useEffect, useState} from 'react';
import {CartContext} from '../context/context';

const useCart = () => {
    const {cart} = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [stripe, setStripe] = useState();

    const getTotal = useCallback(() => {
        setTotal(
            cart.reduce((acc, current) => acc + current.price * current.qty, 0)
        )
    }, [cart]);

    const handleBuy = async event => {
        event.preventDefault();
        let prod = cart.map(({ id, qty }) => ({ price: id, quantity: qty }))

        const {error} = await stripe.redirectToCheckout({
            lineItems: prod,
            mode: "payment",
            successUrl: process.env.SUCCESS_REDIRECT,
            cancelUrl: process.env.CANCEL_REDIRECT,
        });

        if(error) {
            throw error
        }
    };

    useEffect(() => {
        setStripe(window.Stripe(process.env.STRIPE_PK));

        getTotal();
    }, [getTotal]);


    return {
        cart,
        total,
        handleBuy,
    }
};

export default useCart;