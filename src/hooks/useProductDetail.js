import {useState, useContext} from 'react';
import {CartContext} from '../context/context';

const useProductDetail = (price, image, id, name, metadata) => {
    const [size, setSize] = useState(2);
    const [qty, setQty] = useState(1); 
    const {addToCart} = useContext(CartContext);

    const handleSubmit = () => {
        addToCart({price, image, name, id, metadata, qty})
    };

    const onSize = (number) => {
        setSize(number);
    };

    const decreaseQuantity = () => {
        if(qty > 1) {
            setQty(qty - 1)
        } 
    };

    const increasequantity = () => {
        setQty(qty + 1)
    };

    return {
        size,
        handleSubmit,
        onSize,
        decreaseQuantity,
        increasequantity,
        qty
    };
};

export default useProductDetail;