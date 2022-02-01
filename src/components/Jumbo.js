import React from 'react';
import PropTypes from "prop-types";

import {StyledJumbo} from '../styles/components';
import ImageComponente from './image';

const Jumbo = (props) => (
    <StyledJumbo>
        <div style={{display: "flex", flexDirection: "column"}} >
            <h2>!Consigue el mejor swag exclusivo de Platzi¡</h2>
            <small>{props.description}</small>
        </div>
        <ImageComponente name="icon" />
    </StyledJumbo>
);

Jumbo.defaultProps = {
    description: '',
}
  
Jumbo.propTypes = {
    description: PropTypes.string,
}

export default Jumbo;