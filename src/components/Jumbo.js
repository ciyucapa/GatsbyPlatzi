import React from 'react';

import {StyledJumbo} from '../styles/components';
import ImageComponente from './image';

const Jumbo = (props) => (
    <StyledJumbo>
        <h2>!Consigue el mejor swag exclusivo de Platzi¡</h2>
        <small>{props.description}</small>
        <ImageComponente name="icon" />
    </StyledJumbo>
);

export default Jumbo;