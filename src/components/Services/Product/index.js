import React from 'react';

const Product = ({ service }) => {
    return(
        <div>
            <h4>
                {service.name}
            </h4>
        </div>
    )
}

export default Product;