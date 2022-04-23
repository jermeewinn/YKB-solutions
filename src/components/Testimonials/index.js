import React from 'react';
import TestimonialList from '../TestimonialList';

function Testimonials({ currentCategory }) {
    const { name, description } = currentCategory;
    return(
        <section id='testimonials'>
            <h1>{name}</h1>
            <p>{description}</p>
            <TestimonialList />
        </section>
    )
};

export default Testimonials;