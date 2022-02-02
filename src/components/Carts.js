import React from "react";
import {Link} from "gatsby";
import PropTypes from "prop-types"

import {Button, StyledCart} from'../styles/components'

const Carts = (props) => (
    <StyledCart>
        <h2>Carrito de compras</h2>
        <table>
            <tbody>
                <tr>
                    <th>Product</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                </tr>
                {props.cart.map(swag => (
                    <tr key={swag.id}>
                        <td>
                            <img src={swag.image} alt={swag.name}/>
                        </td>
                        <td>USD {props.priceFormat(swag.price)}</td>
                        <td>{swag.qty}</td>
                        <td>USD {props.priceFormat(swag.qty * swag.price)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <nav>
            <div>
                <h3>Subtotal:</h3>
                <small>USD {props.priceFormat(props.total)}</small>
            </div>
            <div>
                <Link to='/'>
                    <Button type='outline'>Volver</Button>
                </Link>
                <Button 
                    onClick={props.handleBuy} 
                    disabled={props.cart.length === 0} 
                    type='outline'
                >
                    Comprar
                </Button>
            </div>
        </nav>
    </StyledCart>
);

Carts.propTypes = {
    total: PropTypes.number,
    cart: PropTypes.arrayOf(PropTypes.object),
    handleBuy: PropTypes.func,
    priceFormat: PropTypes.func,
}
  
Carts.defaultProps = {
    cart: [],
    total: 0,
    handleBuy: () => {},
    priceFormat: () => {},
}

export default Carts;