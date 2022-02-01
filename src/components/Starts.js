import React, {useState} from 'react';

import {SelectStars} from '../styles/components'

const Starts = () => {
    const [stars, setStars] = useState(5)
    return (
        <SelectStars selected={stars}>
            <span role="button" tabIndex="0" onClick={() => setStars(1)} onKeyDown={() => setStars(1)}>★</span>
            <span role="button" tabIndex="0" onClick={() => setStars(2)} onKeyDown={() => setStars(2)}>★</span>
            <span role="button" tabIndex="0" onClick={() => setStars(3)} onKeyDown={() => setStars(3)}>★</span>
            <span role="button" tabIndex="0" onClick={() => setStars(4)} onKeyDown={() => setStars(4)}>★</span>
            <span role="button" tabIndex="0" onClick={() => setStars(5)} onKeyDown={() => setStars(5)}>★</span>
        </SelectStars>
    )
}

export default Starts