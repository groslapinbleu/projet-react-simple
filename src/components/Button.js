

import React from 'react';
import './Button.css';

const Button = ({titre, handleClick}) => {
    return (
        <button onClick={handleClick}>
            {titre}
        </button>
    );
};


export default Button;