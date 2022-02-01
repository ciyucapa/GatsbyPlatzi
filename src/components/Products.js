import React from 'react';
import { Link } from 'gatsby';
import PropTypes from "prop-types";

import {StyledProducts} from '../styles/components'

const Products = (props) => (
    <StyledProducts>
        <h2>Productos</h2>
        <section>
            {props.edges.map(({node}) => 
                <article key={node.id} >
                    <img src={node.image} alt={node.product.name} />
                    <p>{node.product.name}</p>
                    <small>{props.priceFormat(node.price)}</small>
                    <Link to={`/${node.id}`}>
                        Comprar ahora <span> --- </span>
                    </Link>
                </article>
            )}
        </section>
    </StyledProducts>
);

Products.defaultProps = {
    priceFormat: () => {},
    edges: [],
}
  
Products.propTypes = {
    priceFormat: PropTypes.func,
    edges: PropTypes.arrayOf(PropTypes.object),
}

export default Products;