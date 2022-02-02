import React from 'react';
import PropTypes from "prop-types"

import {SelectStars} from '../styles/components'

const Starts = (props) =>(
    <SelectStars selected={props.stars}>
        <span role="button" tabIndex="0" onClick={() => props.onStars(1)} onKeyDown={() => props.onStars(1)}>★</span>
        <span role="button" tabIndex="0" onClick={() => props.onStars(2)} onKeyDown={() => props.onStars(2)}>★</span>
        <span role="button" tabIndex="0" onClick={() => props.onStars(3)} onKeyDown={() => props.onStars(3)}>★</span>
        <span role="button" tabIndex="0" onClick={() => props.onStars(4)} onKeyDown={() => props.onStars(4)}>★</span>
        <span role="button" tabIndex="0" onClick={() => props.onStars(5)} onKeyDown={() => props.onStars(5)}>★</span>
    </SelectStars>
);

Starts.propTypes = {
    stars: PropTypes.number,
    onStars: PropTypes.func,
}
  
Starts.defaultProps = {
    stars: 5,
    onStars: () => 5,
}

export default Starts