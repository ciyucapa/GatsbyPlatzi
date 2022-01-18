import React from 'react';

import {StyledJumbo} from '../styles/components';

const Jumbo = (props) => (
    <StyledJumbo>
        <h2>!Consigue el mejor swag exclusivo de Platzi¡</h2>
        <small>{props.description}</small>
    </StyledJumbo>
);

export default Jumbo;