import React from 'react';

function HexText({ name, description }) {
    return(
        <>
            <h3>{name}</h3>
            <div>{description}</div>
        </>
    );
};

export default HexText;