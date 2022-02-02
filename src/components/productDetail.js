import React, {useState, useContext} from 'react';

import priceFormat from '../utils/priceFormat';
import {CartContext} from '../context/context'

import {
    Tag, 
    SizeButton, 
    Button, 
    //QtyButton, 
    QtySelect,
    SizeSelect, 
    StyledProductDetail
} from '../styles/components'
import Seo from './seo'
import Starts from './Starts';

const ProductDetail = ({price, image, id, product: {name, metadata}}) => {
    const [size, setSize] = useState(2);
    const [qty, setQty] = useState(1); 
    const {addToCart} = useContext(CartContext);

    const handleSubmit = () => {
        addToCart({price, image, name, id, metadata, qty})
    }

    return (
        <StyledProductDetail>
            <Seo title={name}/>
            <img src={image} alt={name}/>
            <div>
                <Tag>Popular</Tag>
                <h2>{name}</h2>
                <b>USD {priceFormat(price)}</b>
                <Starts/>
                {metadata?.color && (<h3>Color: {metadata?.color}</h3>)}
                <small>{metadata?.description}</small>
                {metadata?.wear && (
                    <SizeSelect selected={size}>
                        <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
                        <SizeButton onClick={() => setSize(2)}>S</SizeButton>
                        <SizeButton onClick={() => setSize(3)}>M</SizeButton>
                        <SizeButton onClick={() => setSize(4)}>L</SizeButton>
                        <SizeButton onClick={() => setSize(5)}>XL</SizeButton>
                    </SizeSelect>
                )}
                <p>Cantidad: </p>
                <QtySelect>
                    <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
                    <input type="text" disabled value={qty}/>
                    <button onClick={() => setQty(qty + 1) }>+</button>
                </QtySelect>
                <Button onClick={handleSubmit}>Agregar al carrito</Button>
            </div>
        </StyledProductDetail>
    )
};

export default ProductDetail;