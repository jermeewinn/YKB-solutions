import React from 'react';

const Product = ({ service }) => {
    return(
        <div>
            <h4>
                {service.name}
            </h4>
            <img src={require(`../../../assets/stockPhotos/${service.src}`)}
                alt={service.name}
                className='img-thumbnail'
                key={service.name} />
            <div>
                {service.description}
            </div>
        </div>
    )
}

export default Product;