import React from 'react';

function HexText({ name, description }) {
    return(
        <>
            <h3>{name}</h3>
            <hr className='footer-hex-text-hr'/>
            <div>{description}</div>
        </>
    );
};

export default HexText;