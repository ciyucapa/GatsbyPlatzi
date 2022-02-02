import React from 'react';

import priceFormat from '../utils/priceFormat';
import Seo from './seo'
import Starts from './Starts';
import useStars from '../hooks/useStars';
import useProductDetail from '../hooks/useProductDetail';
import {
    Tag, 
    SizeButton, 
    Button, 
    QtySelect,
    SizeSelect, 
    StyledProductDetail
} from '../styles/components';

const ProductDetail = ({price, image, id, product: {name, metadata}}) => {
    const hookStart = useStars();
    const {
        qty,
        size,
        increasequantity, 
        decreaseQuantity, 
        onSize, 
        handleSubmit
    } = useProductDetail(price, image, id, name, metadata);

    return (
        <StyledProductDetail>
            <Seo title={name}/>
            <img src={image} alt={name}/>
            <div>
                <Tag>Popular</Tag>
                <h2>{name}</h2>
                <b>USD {priceFormat(price)}</b>
                <Starts {...hookStart} />
                {metadata?.color && (<h3>Color: {metadata?.color}</h3>)}
                <small>{metadata?.description}</small>
                {metadata?.wear && (
                    <SizeSelect selected={size}>
                        <SizeButton onClick={() => onSize(1)}>XS</SizeButton>
                        <SizeButton onClick={() => onSize(2)}>S</SizeButton>
                        <SizeButton onClick={() => onSize(3)}>M</SizeButton>
                        <SizeButton onClick={() => onSize(4)}>L</SizeButton>
                        <SizeButton onClick={() => onSize(5)}>XL</SizeButton>
                    </SizeSelect>
                )}
                <p>Cantidad: </p>
                <QtySelect>
                    <button onClick={decreaseQuantity}>-</button>
                    <input type="text" disabled value={qty}/>
                    <button onClick={increasequantity}>+</button>
                </QtySelect>
                <Button onClick={handleSubmit}>Agregar al carrito</Button>
            </div>
        </StyledProductDetail>
    )
};

export default ProductDetail;