import {useState} from 'react';

const useStars = () => {
    const [stars, setStars] = useState(5);

    const onStars = (number) => {
        setStars(number)
    };
    
    return {
        stars,
        onStars
    };
};

export default useStars;