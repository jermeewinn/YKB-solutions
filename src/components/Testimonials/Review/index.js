import React from 'react';

const Review = ({ client }) => {
    return(
        <div className='mx-2 my-1'>
            <h4>
                <a href={client.link}>{client.name}</a>
            </h4>
            <img src={require(`../../../assets/profilePics/${client.src}`)}
                alt={client.name}
                className='img-thumbnail'
                key={client.name} />
            <p>{client.description}</p>
        </div>
    );
};

export default Review;